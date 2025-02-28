import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import {
  SchoolRanking,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { activateRanking, getTournamentSchoolRanking } from "@/core/debates/rankings";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  tournamentId: number;
};

// Define the role type
type Role = "student" | "volunteer" | "school";

function Schools({ tournamentId }: Props) {
  const [schoolsRankings, setSchoolsRankings] = useState<SchoolRanking.AsObject[]>([]);
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

  const hasMoreData = useCallback(() => {
    // If we've already fetched data at least once and there are no items,
    // then there's definitely no more data
    if (dataInitializedRef.current && schoolsRankings.length === 0) {
      return false;
    }

    // If we've received a totalCount from the API and have reached or exceeded it
    if (totalCount > 0 && schoolsRankings.length >= totalCount) {
      return false;
    }

    // If we've reached our max page limit (add a reasonable limit)
    const MAX_PAGES = 10; // Adjust based on your needs
    if (currentPage >= MAX_PAGES) {
      return false;
    }

    // If we've made at least one request but received an empty response
    if (lastFetchedPageRef.current > 0 && schoolsRankings.length === 0) {
      return false;
    }

    // Otherwise, assume there might be more data
    return true;
  }, [schoolsRankings.length, totalCount, currentPage]);

  const fetchSchools = useCallback(async (page: number) => {
    // Guard against concurrent fetches
    if (isFetchingRef.current) return;

    // Guard against invalid inputs
    if (!user || !tournamentId) return;

    // Only allow refetching page 1 (refresh case)
    if (page > 1 && page === lastFetchedPageRef.current) return;

    // Set loading state
    isFetchingRef.current = true;
    setIsLoading(true);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentSchoolRanking(options);

      // Exit if component was unmounted
      if (!isMountedRef.current) return;

      // Record that we've fetched this page
      lastFetchedPageRef.current = page;

      // Handle empty response
      if (!res || !res.rankingsList || res.rankingsList.length === 0) {
        setTotalCount(res?.totalCount || 0);
        return;
      }

      // Update total count based on response
      if (res.totalCount) {
        setTotalCount(res.totalCount);
      }

      // Update state with new data
      setSchoolsRankings(prev => {
        if (page === 1) {
          // For first page, replace all data
          dataInitializedRef.current = true;
          return res.rankingsList;
        } else {
          // For subsequent pages, append new unique items
          const topSchools = prev.slice(0, 3);
          const existingIds = new Set(prev.map(p => p.schoolName));
          const newSchools = res.rankingsList.filter(school => !existingIds.has(school.schoolName));

          return [...topSchools, ...prev.slice(3), ...newSchools];
        }
      });

    } catch (err) {
      console.error("Error fetching schools:", err);
    } finally {
      if (isMountedRef.current) {
        // Delay setting loading state to prevent UI flickering
        setTimeout(() => {
          setIsLoading(false);
          isFetchingRef.current = false;
        }, 300);
      }
    }
  }, [user, tournamentId, pageSize]);

  // Handle tournament ID changes
  useEffect(() => {
    if (!user || !tournamentId) return;

    // Prevent action for invalid tournament IDs
    if (tournamentId === 0) return;

    // Only refresh if tournament ID has changed
    if (dataInitializedRef.current && lastTournamentIdRef.current === tournamentId) {
      return;
    }

    // Record the new tournament ID
    lastTournamentIdRef.current = tournamentId;

    // Reset pagination state
    setCurrentPage(1);
    lastFetchedPageRef.current = 0;
    dataInitializedRef.current = false;
    setSchoolsRankings([]);
    setTotalCount(0);

    // Fetch first page
    fetchSchools(1);
  }, [user, tournamentId, fetchSchools]);

  const handleLoadMore = useCallback(() => {
    // Don't load more if we're already loading or fetching
    if (isLoading || isFetchingRef.current) return;

    // Don't load more if we've fetched all data
    if (!hasMoreData()) return;

    // Increment page and fetch
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchSchools(nextPage);
  }, [isLoading, hasMoreData, currentPage, fetchSchools]);

  const getUniqueKey = useCallback((school: SchoolRanking.AsObject, index: number) => {
    return `${school.schoolName}-${school.totalPoints}-${index}`;
  }, []);

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
        ranking_type: "school",
        tournament_id: tournamentId,
        visible_to: role
      });
      return true;
    } catch (error) {
      console.error(`Failed to set school ranking visibility for role ${role}:`, error);
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
          description: `School rankings are now visible to: ${selectedRoles.join(", ")}.`,
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
        description: "Could not change the visibility of school rankings.",
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
          ranking_type: "school",
          tournament_id: tournamentId,
          visible_to: role
        });
      }

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      setIsRankingVisible(false);
      toast({
        title: "Ranking Deactivated",
        description: "School rankings are now hidden from all users.",
        variant: "success"
      });

    } catch (error) {
      console.error("Failed to deactivate ranking:", error);

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      toast({
        title: "Operation Failed",
        description: "Could not deactivate school rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
      }
    }
  }, [user, tournamentId, isActivatingRanking, toast]);

  // Memoize data slices to prevent unnecessary recalculations
  const topSchools = React.useMemo(() =>
    schoolsRankings.slice(0, 3),
    [schoolsRankings]
  );

  const remainingSchools = React.useMemo(() =>
    schoolsRankings.slice(3),
    [schoolsRankings]
  );

  // Empty state with activation button
  if (schoolsRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Schools Ranking
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
          {isLoading ? "Loading..." : "No schools data available."}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Schools Ranking
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
          {topSchools.map((school, index) => (
            <div
              key={getUniqueKey(school, index)}
              className={cn(
                "w-full",
                index === 2 && "sm:col-span-2 md:col-span-1"
              )}
            >
              <WinnerCard school={school} count={index + 1} />
            </div>
          ))}
        </div>
        <DataTable
          data={remainingSchools}
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
            <DialogTitle>Activate School Rankings</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select who can see the school rankings:
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
const WinnerCard = React.memo(({ school, count }: {
  school: SchoolRanking.AsObject;
  count: number;
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="flex-1 flex gap-3 p-2">
        <div className="relative w-[73px] h-20 shrink-0 rounded-md overflow-hidden">
          <Image
            src={`/static/images/medal-${count}.png`}
            alt="user image"
            fill
            className={cn(
              "w-full h-full object-cover",
              count === 1 && "scale-125"
            )}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-foreground font-semibold line-clamp-1">
            {school.schoolName}
          </h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{school.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{school.totalWins}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Rank</span>
              <span className="text-foreground">
                {parseInt(String(school.averageRank))}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="p-2 mt-auto">
        <Button size="sm" className="w-full hover:bg-primary">
          Bravo!
        </Button>
      </div>
    </Card>
  );
});

WinnerCard.displayName = "WinnerCard";

export default React.memo(Schools);
