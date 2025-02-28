import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { StudentRanking } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { activateRanking, getTournamentStudentRanking } from "@/core/debates/rankings";
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

function Speakers({ tournamentId }: Props) {
  const [studentRankings, setStudentRankings] = useState<StudentRanking.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isActivatingRanking, setIsActivatingRanking] = useState(false);
  const [isRankingVisible, setIsRankingVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<Role[]>(["student", "volunteer", "school"]);
  const [activationProgress, setActivationProgress] = useState(0);
  const pageSize = 5;
  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  // Use refs to prevent duplicate fetches
  const isFetchingRef = useRef(false);
  const lastFetchedPageRef = useRef(0);
  const dataInitializedRef = useRef(false);
  const lastTournamentIdRef = useRef(0);

  // Track component mount state
  const isMountedRef = useRef(true);

  // Reset mount state on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const fetchRankings = useCallback(async (page: number) => {
    // Prevent fetching if already in progress for this page
    if (isFetchingRef.current) return;

    // Don't fetch if we're out of data and not on first page
    if (!hasMore && page > 1) return;

    // Don't fetch the same page twice (unless it's page 1 for refresh)
    if (page > 1 && page === lastFetchedPageRef.current) return;

    // Don't fetch without user or tournamentId
    if (!user || !tournamentId) return;

    // Set loading state and fetching flag
    setIsLoading(true);
    isFetchingRef.current = true;

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentStudentRanking(options);

      // Exit if component was unmounted
      if (!isMountedRef.current) return;

      lastFetchedPageRef.current = page;

      if (!res || (Array.isArray(res) && res.length === 0)) {
        setHasMore(false);
        return;
      }

      setStudentRankings(prev => {
        // Only update if we're still mounted
        if (!isMountedRef.current) return prev;

        if (page === 1) {
          dataInitializedRef.current = true;
          return res;
        } else {
          // For subsequent pages, keep top 3 and append new data
          const topSpeakers = prev.slice(0, 3);
          const newData = res.filter(speaker =>
            !prev.some(p => p.studentId === speaker.studentId)
          );
          return [...topSpeakers, ...prev.slice(3), ...newData];
        }
      });

      // If we received fewer items than pageSize, we've reached the end
      if (Array.isArray(res) && res.length < pageSize) {
        setHasMore(false);
      }

    } catch (err) {
      console.error("Error fetching student rankings:", err);
      setHasMore(false);
    } finally {
      // Only update state if still mounted
      if (isMountedRef.current) {
        setIsLoading(false);
        isFetchingRef.current = false;
      }
    }
  }, [user, tournamentId, pageSize, hasMore]);

  // Reset and load first page when user or tournament changes
  useEffect(() => {
    if (!user || !tournamentId) return;

    // Prevent duplicate fetches during rapid rendering
    if (tournamentId === 0) return;

    // Only refresh if tournament ID has changed
    if (dataInitializedRef.current && lastTournamentIdRef.current === tournamentId) {
      return;
    }

    lastTournamentIdRef.current = tournamentId;

    // Reset pagination state
    setCurrentPage(1);
    setHasMore(true);
    lastFetchedPageRef.current = 0;
    dataInitializedRef.current = false;
    setStudentRankings([]);

    // Fetch first page after state reset
    fetchRankings(1);

  }, [user, tournamentId, fetchRankings]);

  const handleLoadMore = useCallback(() => {
    if (isLoading || !hasMore || isFetchingRef.current) {
      return;
    }

    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchRankings(nextPage);
  }, [isLoading, hasMore, currentPage, fetchRankings]);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleRoleToggle = useCallback((role: Role) => {
    setSelectedRoles(prevRoles => {
      if (prevRoles.includes(role)) {
        return prevRoles.filter(r => r !== role);
      } else {
        return [...prevRoles, role];
      }
    });
  }, []);

  // Make a single API call to set visibility for one role
  const setVisibilityForRole = useCallback(async (role: Role) => {
    if (!user || !tournamentId) return false;

    try {
      await activateRanking({
        token: user.token,
        isVisible: true,
        ranking_type: "student",
        tournament_id: tournamentId,
        visible_to: role
      });
      return true;
    } catch (error) {
      console.error(`Failed to set ranking visibility for role ${role}:`, error);
      return false;
    }
  }, [user, tournamentId]);

  const handleSaveVisibility = useCallback(async () => {
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
          description: `Student rankings are now visible to: ${selectedRoles.join(", ")}.`,
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
        description: "Could not change the visibility of student rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
        setActivationProgress(0);
      }
    }
  }, [user, selectedRoles, setVisibilityForRole, handleCloseModal, toast]);

  const handleDeactivateRanking = useCallback(async () => {
    if (!user || isActivatingRanking) return;

    setIsActivatingRanking(true);
    try {
      // When deactivating, we need to make calls for all possible roles to ensure complete deactivation
      const allRoles: Role[] = ["student", "volunteer", "school"];

      for (const role of allRoles) {
        await activateRanking({
          token: user.token,
          isVisible: false,
          ranking_type: "student",
          tournament_id: tournamentId,
          visible_to: role
        });
      }

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      setIsRankingVisible(false);
      toast({
        title: "Ranking Deactivated",
        description: "Student rankings are now hidden from all users.",
        variant: "success"
      });

    } catch (error) {
      console.error("Failed to deactivate ranking:", error);

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      toast({
        title: "Operation Failed",
        description: "Could not deactivate student rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
      }
    }
  }, [user, tournamentId, isActivatingRanking, toast]);

  // Prevent unnecessary recalculations
  const topSpeakers = React.useMemo(() =>
    studentRankings.slice(0, 3),
    [studentRankings]
  );

  const remainingSpeakers = React.useMemo(() =>
    studentRankings.slice(3),
    [studentRankings]
  );

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Speaker Ranking
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
          {topSpeakers.map((speaker, index) => (
            <React.Fragment key={speaker.studentId || index}>
              {index < 2 ? (
                <WinnerCard speaker={speaker} count={index + 1} />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto">
                  <WinnerCard speaker={speaker} count={index + 1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <DataTable
          columns={columns}
          data={remainingSpeakers}
          infiniteScroll={true}
          isLoading={isLoading}
          hasMore={hasMore}
          onLoadMore={handleLoadMore}
        />
      </div>

      {/* Visibility Settings Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Activate Speaker Rankings</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select who can see the speaker rankings:
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

// Memoize card to prevent unnecessary renders
const WinnerCard = React.memo(({ speaker, count }: {
  speaker: StudentRanking.AsObject;
  count: number;
}) => {
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
          <Image
            src="/static/images/mic-speech.jpg"
            alt="user image"
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">
                {speaker.studentName}
              </h3>
              <small className="text-xs text-muted-foreground">
                {speaker.schoolName}
              </small>
            </div>
            <div className="w-8 h-8 relative">
              <Image
                src={`/static/images/medal-${count}.png`}
                alt="medal first"
                fill
                className={cn("w-full h-full", count === 1 && "scale-125")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{speaker.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{speaker.totalWins}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Rank</span>
              <span className="text-foreground">
                {parseInt(String(speaker.averageRank))}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 w-full">
        <Button size="sm" className="w-full hover:bg-primary">
          Bravo!
        </Button>
      </CardFooter>
    </Card>
  );
});

WinnerCard.displayName = "WinnerCard";

export default Speakers;
