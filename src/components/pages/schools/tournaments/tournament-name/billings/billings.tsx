import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import {
  DetailedRegistrationResponse,
  Tournament,
} from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { Separator } from "@/components/ui/separator";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  createSchoolRegistration,
  getSchoolRegistration,
} from "@/core/tournament/list/billings";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { getUserProfile } from "@/core/users/users";
import { School, UserProfile } from "@/lib/grpc/proto/user_management/users_pb";
import { getSchoolsNoAuth } from "@/core/users/schools";

interface TournamentBillingsRegistrationProps {
  tournament: Tournament.AsObject;
}

const TournamentBillingsRegistration = ({
  tournament,
}: TournamentBillingsRegistrationProps) => {
  const [numberOfTeams, setNumberOfTeams] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [schools, setSchools] = useState<School.AsObject[]>([]);
  const [userSchool, setUserSchool] = useState<School.AsObject | null>(null);
  const [userProfile, setUserProfile] = useState<
    UserProfile.AsObject | undefined
  >(undefined);
  const [existingRegistration, setExistingRegistration] =
    useState<DetailedRegistrationResponse.AsObject | null>(null);
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  // Fetch user profile first
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user?.userId || !user?.token) return;

      try {
        const response = await getUserProfile({
          token: user.token,
          userID: user.userId,
        });
        setUserProfile(response.profile);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Profile Error",
          description: "Could not fetch user profile",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      }
    };

    fetchUserProfile();
  }, [user?.userId, user?.token, toast]);

  // Fetch schools after getting user profile
  useEffect(() => {
    const fetchSchools = async () => {
      if (!userProfile?.email) return;

      try {
        const response = await getSchoolsNoAuth({
          page: 1,
          pageSize: 5000,
        });
        setSchools(response.schoolsList);

        const matchedSchool = response.schoolsList.find(
          (school: School.AsObject) => school.schoolemail === userProfile.email
        );

        if (matchedSchool) {
          setUserSchool(matchedSchool);
        } else {
          toast({
            variant: "destructive",
            title: "School Not Found",
            description: "Your account is not associated with any school",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch schools",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      }
    };

    if (userProfile?.email) {
      fetchSchools();
    }
  }, [userProfile?.email, toast]);

  // Check for existing registration
  useEffect(() => {
    const checkExistingRegistration = async () => {
      if (!user?.token || !tournament?.tournamentId || !userSchool?.schoolid)
        return;

      setIsChecking(true);
      try {
        const response = await getSchoolRegistration({
          school_id: userSchool.schoolid,
          token: user.token,
          tournament_id: tournament.tournamentId,
        });

        if (response) {
          setExistingRegistration(response);
          setNumberOfTeams(String(response.plannedTeamsCount));

          toast({
            title: "Existing Registration Found",
            description: `Registration exists with ${response.plannedTeamsCount} teams (${response.paymentStatus})`,
            duration: 5000,
          });
        }
      } catch (error: any) {
        // If error is "not found", we don't need to show an error toast
        if (!error.message.includes("not found")) {
          console.error("Error checking registration:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to check existing registration",
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      } finally {
        setIsChecking(false);
      }
    };

    if (userSchool) {
      checkExistingRegistration();
    }
  }, [user?.token, tournament?.tournamentId, userSchool, toast]);

  const calculateTotalAmount = () => {
    return (Number(numberOfTeams) || 0) * tournament.tournamentFee;
  };

  const handleRegister = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "Please login to register for the tournament",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    if (!userSchool) {
      toast({
        variant: "destructive",
        title: "School Error",
        description: "No school associated with your account",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    if (!numberOfTeams || Number(numberOfTeams) <= 0) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please select the number of teams",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
      return;
    }

    setIsLoading(true);

    try {
      const registrationData = {
        planned_teams_count: Number(numberOfTeams),
        school_id: userSchool.schoolid,
        token: user.token,
        tournament_id: tournament.tournamentId,
      };

      const response = await createSchoolRegistration(registrationData);

      toast({
        variant: "success",
        title: "Success",
        description: "Tournament registration successful",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });

      // Set existing registration to prevent multiple registrations
      setExistingRegistration({
        registrationId: response?.registrationId || 0,
        schoolId: userSchool.schoolid,
        tournamentId: tournament.tournamentId,
        schoolName: userSchool.name,
        schoolEmail: userSchool.schoolemail || "",
        schoolType: userSchool.schooltype || "",
        contactEmail: userSchool.contactemail || "",
        contactPersonName: userSchool.contactpersonname || "",
        country: userSchool.country || "",
        province: userSchool.province || "",
        district: userSchool.district || "",
        address: userSchool.address || "",
        plannedTeamsCount: Number(numberOfTeams),
        actualTeamsCount: 0,
        amountPerTeam: tournament.tournamentFee,
        totalAmount: calculateTotalAmount(),
        discountAmount: 0,
        actualPaidAmount: 0,
        paymentStatus: "pending",
        currency: "RWF",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Registration Error",
        description: error.message || "Failed to register for tournament",
        action: (
          <ToastAction altText="Close" className="bg-primary text-white">
            Close
          </ToastAction>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <Card className="w-full rounded-md overflow-hidden">
        <CardHeader className="bg-brown">
          <CardTitle className="text-2xl font-semibold text-white">
            {existingRegistration ? "Registration Details" : "Choose teams"}
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-xl mx-auto p-6 pb-20">
          <div className="space-y-6">
            {isChecking && (
              <div className="text-sm text-gray-600 text-center">
                Checking registration status...
              </div>
            )}

            {userSchool && (
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm font-medium text-gray-600">
                  {existingRegistration
                    ? "Registered for:"
                    : "Registering for:"}
                </p>
                <p className="text-base font-medium dark:text-background">{userSchool.name}</p>
                <p className="text-sm text-gray-500">{userProfile?.email}</p>
                {existingRegistration && (
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-green-600">
                      Registration confirmed with{" "}
                      {existingRegistration.plannedTeamsCount} teams
                    </p>
                    <p className="text-sm text-gray-600">
                      Payment Status:{" "}
                      <span className="font-medium capitalize">
                        {existingRegistration.paymentStatus}
                      </span>
                    </p>
                    {existingRegistration.actualPaidAmount > 0 && (
                      <p className="text-sm text-gray-600">
                        Paid Amount:{" "}
                        {existingRegistration.actualPaidAmount.toLocaleString()}{" "}
                        {existingRegistration.currency}
                      </p>
                    )}
                    {existingRegistration.discountAmount > 0 && (
                      <p className="text-sm text-gray-600">
                        Discount:{" "}
                        {existingRegistration.discountAmount.toLocaleString()}{" "}
                        {existingRegistration.currency}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Number of Teams Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-white flex items-center">
                Number of teams
                <span className="text-red-500 ml-1">*</span>
              </label>
              <Select
                value={numberOfTeams}
                onValueChange={(value) => setNumberOfTeams(value)}
                disabled={!!existingRegistration || isChecking}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select planned teams" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      {i + 1} teams
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {existingRegistration && (
                <p className="text-sm text-gray-500 dark:text-white italic mt-1">
                  Registered with {existingRegistration.plannedTeamsCount} teams
                  - Total: {existingRegistration.totalAmount.toLocaleString()}{" "}
                  {/* {existingRegistration.currency} */} RWF
                </p>
              )}
            </div>

            {/* Tournament Details Card */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1 flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded overflow-hidden">
                      <Image
                        src="/static/images/mic-speech.jpg"
                        alt="placeholder image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="line-clamp-1 text-base font-medium mb-1 text-start">
                              {tournament.name}
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-white">
                      <span className="text-xl font-bold mr-2">•</span>
                      Tournament Fees (per team)
                    </span>
                    <span className="font-medium">
                      <span className="text-xl font-bold mr-2">•</span>
                      {tournament.tournamentFee.toLocaleString()} RWF
                    </span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-white">
                      <span className="text-xl font-bold mr-2">•</span>
                      Total amount to pay
                    </span>
                    <span className="font-medium">
                      <span className="text-xl font-bold mr-2">•</span>
                      {calculateTotalAmount().toLocaleString()} RWF
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Note */}
            <p className="text-sm text-gray-600 dark:text-white">
              <span className="text-orange-500 font-medium">
                Amount should be paid
              </span>{" "}
              on the tournament day or through communicated bank account
            </p>

            {/* Confirm Button */}
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50"
              onClick={handleRegister}
              disabled={
                isLoading ||
                !userSchool ||
                !numberOfTeams ||
                !!existingRegistration ||
                isChecking
              }
            >
              {isLoading
                ? "Registering..."
                : isChecking
                ? "Checking registration..."
                : existingRegistration
                ? "Already Registered"
                : "Confirm"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TournamentBillingsRegistration;
