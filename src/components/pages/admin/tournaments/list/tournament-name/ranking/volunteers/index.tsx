import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import {
  VolunteerTournamentRank,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  getTournamentVolunteerRanking,
  activateRanking
} from "@/core/debates/rankings";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {
  tournamentId: number;
};

// Define the role type
type Role = "student" | "volunteer" | "school";

function Volunteers({ tournamentId }: Props) {
  const [volunteerRankings, setVolunteerRankings] = useState<VolunteerTournamentRank.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActivatingRanking, setIsActivatingRanking] = useState(false);
  const [isRankingVisible, setIsRankingVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<Role[]>(["student", "volunteer", "school"]);
  const [activationProgress, setActivationProgress] = useState(0);
  const pageSize = 10;
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  // Track component mount state
  const isMountedRef = useRef(true);
  const isFetchingRef = useRef(false);

  // Reset mount state on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const hasMoreData = useCallback(() => {
    // If we've received a totalCount from the API and have reached or exceeded it
    if (totalCount > 0 && volunteerRankings.length >= totalCount) {
      return false;
    }

    // Otherwise, assume there might be more data
    return true;
  }, [volunteerRankings.length, totalCount]);

  const fetchVolunteers = async (page: number) => {
    if (!user || isFetchingRef.current) return;
    isFetchingRef.current = true;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentVolunteerRanking(options);

      // Exit if component unmounted
      if (!isMountedRef.current) return;

      if (!res || !res.rankingsList) {
        return;
      }

      setTotalCount(res.totalCount || 0);

      setVolunteerRankings(prev => {
        if (page === 1) {
          return res.rankingsList;
        } else {
          // Keep top 3 from first page and append new data
          const topVolunteers = prev.slice(0, 3);
          const newVolunteers = res.rankingsList.filter(volunteer =>
            !prev.some(p => p.volunteerId === volunteer.volunteerId)
          );
          return [...topVolunteers, ...prev.slice(3), ...newVolunteers];
        }
      });

    } catch (err) {
      console.error(err);
    } finally {
      if (isMountedRef.current) {
        // Small delay to prevent UI flickering
        setTimeout(() => {
          setIsLoading(false);
          isFetchingRef.current = false;
        }, 300);
      }
    }
  };

  useEffect(() => {
    if (!user || !tournamentId) return;

    setCurrentPage(1);
    setVolunteerRankings([]);
    fetchVolunteers(1);
  }, [user, tournamentId]);

  const handleLoadMore = () => {
    if (!isLoading && hasMoreData() && !isFetchingRef.current) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchVolunteers(nextPage);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRoleToggle = (role: Role) => {
    setSelectedRoles(prevRoles => {
      if (prevRoles.includes(role)) {
        return prevRoles.filter(r => r !== role);
      } else {
        return [...prevRoles, role];
      }
    });
  };

  // Make a single API call to set visibility for one role
  const setVisibilityForRole = async (role: Role) => {
    if (!user || !tournamentId) return false;

    try {
      await activateRanking({
        token: user.token,
        isVisible: true,
        ranking_type: "volunteer",
        tournament_id: tournamentId,
        visible_to: role
      });
      return true;
    } catch (error) {
      console.error(`Failed to set volunteer ranking visibility for role ${role}:`, error);
      return false;
    }
  };

  const handleSaveVisibility = async () => {
    if (!user || selectedRoles.length === 0) {
      if (selectedRoles.length === 0) {
        toast({
          title: "Error",
          description: "Please select at least one role to see the rankings.",
          variant: "destructive"
        });
      }
      return;
    }

    if (isActivatingRanking) return;

    setIsActivatingRanking(true);
    setActivationProgress(0);

    try {
      let successCount = 0;

      // Make separate API calls for each selected role
      for (let i = 0; i < selectedRoles.length; i++) {
        // Check if component is still mounted
        if (!isMountedRef.current) return;

        const role = selectedRoles[i];
        const success = await setVisibilityForRole(role);

        if (success) {
          successCount++;
        }

        // Update progress
        setActivationProgress(Math.round(((i + 1) / selectedRoles.length) * 100));
      }

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      if (successCount === selectedRoles.length) {
        setIsRankingVisible(true);
        toast({
          title: "Ranking Activated",
          description: `Volunteer rankings are now visible to: ${selectedRoles.join(", ")}.`,
          variant: "success"
        });
        handleCloseModal();
      } else if (successCount > 0) {
        setIsRankingVisible(true);
        toast({
          title: "Partial Activation",
          description: `Rankings activated for ${successCount} out of ${selectedRoles.length} roles.`,
          variant: "warning"
        });
        handleCloseModal();
      } else {
        toast({
          title: "Activation Failed",
          description: "Could not activate rankings for any of the selected roles.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Failed to set ranking visibility:", error);

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      toast({
        title: "Operation Failed",
        description: "Could not change the visibility of volunteer rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
        setActivationProgress(0);
      }
    }
  };

  const handleDeactivateRanking = async () => {
    if (!user || isActivatingRanking) return;

    setIsActivatingRanking(true);
    try {
      // When deactivating, we need to make calls for all possible roles to ensure complete deactivation
      const allRoles: Role[] = ["student", "volunteer", "school"];

      for (const role of allRoles) {
        await activateRanking({
          token: user.token,
          isVisible: false,
          ranking_type: "volunteer",
          tournament_id: tournamentId,
          visible_to: role
        });
      }

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      setIsRankingVisible(false);
      toast({
        title: "Ranking Deactivated",
        description: "Volunteer rankings are now hidden from all users.",
        variant: "success"
      });

    } catch (error) {
      console.error("Failed to deactivate ranking:", error);

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      toast({
        title: "Operation Failed",
        description: "Could not deactivate volunteer rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
      }
    }
  };

  // If no volunteers data yet, show loading or empty state
  if (volunteerRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Volunteer Ranking
          </h3>
          {isRankingVisible ? (
            <Button
              onClick={handleDeactivateRanking}
              disabled={isActivatingRanking}
              variant="destructive"
            >
              {isActivatingRanking ? "Processing..." : "Deactivate"}
            </Button>
          ) : (
            <Button
              onClick={handleOpenModal}
              disabled={isActivatingRanking}
            >
              {isActivatingRanking ? "Processing..." : "Activate"}
            </Button>
          )}
        </div>
        <div className="w-full bg-background p-8 px-5 text-center">
          {isLoading ? "Loading..." : "No volunteers data available."}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Volunteer Ranking
        </h3>
        {isRankingVisible ? (
          <Button
            onClick={handleDeactivateRanking}
            disabled={isActivatingRanking}
            variant="destructive"
          >
            {isActivatingRanking ? "Processing..." : "Deactivate"}
          </Button>
        ) : (
          <Button
            onClick={handleOpenModal}
            disabled={isActivatingRanking}
          >
            {isActivatingRanking ? "Processing..." : "Activate"}
          </Button>
        )}
      </div>
      <div className="w-full bg-background mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-3 mb-3">
          {volunteerRankings.slice(0, 3).map((volunteer, index) => (
            <React.Fragment key={volunteer.volunteerId || index}>
              {index < 2 ? (
                <WinnerCard
                  volunteer={volunteer}
                  count={index + 1}
                />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto sm:mx-0.5">
                  <WinnerCard
                    volunteer={volunteer}
                    count={index + 1}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <DataTable
          data={volunteerRankings.slice(3)}
          columns={columns}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={hasMoreData()}
          onLoadMore={handleLoadMore}
        />
      </div>

      {/* Visibility Settings Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Activate Volunteer Rankings</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select who can see the volunteer rankings:
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="student-role"
                  checked={selectedRoles.includes("student")}
                  onCheckedChange={() => handleRoleToggle("student")}
                />
                <Label htmlFor="student-role">Students</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="volunteer-role"
                  checked={selectedRoles.includes("volunteer")}
                  onCheckedChange={() => handleRoleToggle("volunteer")}
                />
                <Label htmlFor="volunteer-role">Volunteers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="school-role"
                  checked={selectedRoles.includes("school")}
                  onCheckedChange={() => handleRoleToggle("school")}
                />
                <Label htmlFor="school-role">Schools</Label>
              </div>
            </div>

            {isActivatingRanking && activationProgress > 0 && (
              <div className="mt-4">
                <div className="text-sm text-muted-foreground mb-2">
                  Activating rankings: {activationProgress}%
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${activationProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseModal}>Cancel</Button>
            <Button
              onClick={handleSaveVisibility}
              disabled={isActivatingRanking || selectedRoles.length === 0}
            >
              {isActivatingRanking ? "Processing..." : "Save & Activate"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

interface WinnerCardProps {
  volunteer: VolunteerTournamentRank.AsObject;
  count: number;
}

const WinnerCard = React.memo(({ volunteer, count }: WinnerCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col w-full p-0 m-0 justify-between">
        <div className="flex-1 w-full flex gap-3 p-2 h-full">
          <div className="relative w-[66px] h-20 rounded-md overflow-hidden">
            <Image
              src="/static/images/mic-speech.jpg"
              alt="user image"
              fill
              className={cn("w-full h-full object-cover")}
            />
          </div>
          <div className="flex-1">
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="flex flex-col">
                <h3 className="text-foreground font-semibold line-clamp-1">
                  {volunteer.volunteerName}
                </h3>
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src={`/static/images/medal-${count}.png`}
                  alt="medal first"
                  fill
                  className={cn(
                    "w-full h-full",
                    count === 1 && "scale-125"
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Prelims
                </span>
                <span className="text-foreground">
                  {volunteer.preliminaryRounds}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Elims
                </span>
                <span className="text-foreground">
                  {volunteer.eliminationRounds}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground line-clamp-1">
                  Points
                </span>
                <span className="text-foreground">
                  {parseInt(String(volunteer.averageRating))}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full p-2">
          <Button size="sm" className="w-full hover:bg-primary">
            Bravo!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

WinnerCard.displayName = "WinnerCard";

export default React.memo(Volunteers);
