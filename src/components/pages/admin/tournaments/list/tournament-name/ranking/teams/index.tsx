import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { DataTable } from "@/components/tables/data-table";
import { columns } from "./columns";
import { TeamRanking } from "@/lib/grpc/proto/debate_management/debate_pb";
import { useUserStore } from "@/stores/auth/auth.store";
import { activateRanking, getTournamentTeamsRanking } from "@/core/debates/rankings";
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

function TeamsRanking({ tournamentId }: Props) {
  const [teamsRankings, setTeamsRankings] = useState<TeamRanking.AsObject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isActivatingRanking, setIsActivatingRanking] = useState(false);
  const [isRankingVisible, setIsRankingVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<Role[]>(["student", "volunteer", "school"]);
  const [activationProgress, setActivationProgress] = useState(0);
  const [noMoreData, setNoMoreData] = useState(false);
  const pageSize = 10;

  // Use refs to prevent multiple resets and loading cycles
  const didInitialLoadRef = useRef(false);
  const prevTournamentIdRef = useRef<number | null>(null);
  const loadedPagesRef = useRef<Set<number>>(new Set([1]));

  const { user } = useUserStore((state) => state);
  const { toast } = useToast();

  // Track component mount state
  const isMountedRef = useRef(true);

  // Reset mount state on unmount
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      console.log('Component unmounting');
    };
  }, []);

  const fetchTeams = useCallback(async (page: number) => {
    // Prevent the same page from being loaded multiple times
    if (loadedPagesRef.current.has(page) && page > 1) {
      console.log(`Page ${page} already loaded, skipping`);
      return;
    }

    // Don't load more if we've detected no more data is available
    if (noMoreData && page > 1) {
      console.log(`No more data available, skipping page ${page}`);
      return;
    }

    // Don't proceed without user token or tournament ID
    if (!user?.token || !tournamentId) {
      console.log('Missing user token or tournament ID');
      return;
    }

    // Set appropriate loading state
    if (page === 1) {
      setIsLoading(true);
    } else {
      setIsLoadingMore(true);
    }

    console.log(`Fetching teams for page ${page}`);

    try {
      const options = {
        token: user.token,
        tournament_id: tournamentId,
        page,
        page_size: pageSize,
      };

      const res = await getTournamentTeamsRanking(options);
      console.log('Teams response:', res);

      // Mark this page as loaded
      loadedPagesRef.current.add(page);

      if (!res || !res.rankingsList) {
        console.log('No rankings data received');
        if (page > 1) {
          setNoMoreData(true);
        }
        return;
      }

      // Set total count
      setTotalCount(res.totalCount || 0);

      // If we receive an empty array, mark that we have no more data
      if (res.rankingsList.length === 0) {
        console.log('Empty rankings list received, no more data');
        setNoMoreData(true);
        return;
      }

      // Update team rankings
      setTeamsRankings(prev => {
        if (page === 1) {
          return res.rankingsList;
        } else {
          // Keep only unique items
          const uniqueNewTeams = res.rankingsList.filter(
            newTeam => !prev.some(existingTeam => existingTeam.teamId === newTeam.teamId)
          );

          // If we receive no new unique teams, mark that we have no more data
          if (uniqueNewTeams.length === 0) {
            console.log('No new unique teams received, no more data');
            setNoMoreData(true);
            return prev;
          }

          // For pages after the first, append new data after existing data
          return [...prev, ...uniqueNewTeams];
        }
      });

    } catch (err) {
      console.error('Error fetching teams:', err);
      if (page > 1) {
        setNoMoreData(true);
      }
    } finally {
      if (page === 1) {
        setIsLoading(false);
      } else {
        setIsLoadingMore(false);
      }
    }
  }, [user, tournamentId, pageSize, noMoreData]);

  // Initial data fetch with safeguards against multiple loading cycles
  useEffect(() => {
    // Skip if no tournament ID or no user token
    if (!tournamentId || !user?.token) {
      return;
    }

    // Only reset and fetch if tournament ID changes
    if (prevTournamentIdRef.current !== tournamentId) {
      console.log(`Tournament ID changed: ${prevTournamentIdRef.current} -> ${tournamentId}`);

      // Reset state
      setCurrentPage(1);
      setTeamsRankings([]);
      setNoMoreData(false);
      loadedPagesRef.current = new Set();
      didInitialLoadRef.current = false;
      prevTournamentIdRef.current = tournamentId;
    }

    // Only do initial load once per tournament ID
    if (!didInitialLoadRef.current) {
      console.log('Initial data fetch trigger');
      didInitialLoadRef.current = true;
      fetchTeams(1);
    }
  }, [user, tournamentId, fetchTeams]);

  const handleLoadMore = useCallback(() => {
    // Don't load more if we already know there's no more data
    if (noMoreData) {
      console.log('No more data available, skipping load more');
      return;
    }

    // Guard against duplicate requests
    if (isLoading || isLoadingMore) {
      console.log('Already loading, skipping load more');
      return;
    }

    // Check if we have more data to load
    if (teamsRankings.length >= totalCount) {
      console.log('Reached total count, no more data');
      setNoMoreData(true);
      return;
    }

    // Update page and fetch
    const nextPage = currentPage + 1;
    console.log(`Loading more data: page ${nextPage}`);
    setCurrentPage(nextPage);

    fetchTeams(nextPage);

  }, [isLoading, isLoadingMore, teamsRankings.length, totalCount, currentPage, fetchTeams, noMoreData]);

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
        ranking_type: "team",
        tournament_id: tournamentId,
        visible_to: role
      });
      return true;
    } catch (error) {
      console.error(`Failed to set team ranking visibility for role ${role}:`, error);
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
          description: `Team rankings are now visible to: ${selectedRoles.join(", ")}.`,
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
        description: "Could not change the visibility of team rankings.",
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
          ranking_type: "team",
          tournament_id: tournamentId,
          visible_to: role
        });
      }

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      setIsRankingVisible(false);
      toast({
        title: "Ranking Deactivated",
        description: "Team rankings are now hidden from all users.",
        variant: "success"
      });

    } catch (error) {
      console.error("Failed to deactivate ranking:", error);

      // Check if component is still mounted
      if (!isMountedRef.current) return;

      toast({
        title: "Operation Failed",
        description: "Could not deactivate team rankings.",
        variant: "destructive"
      });
    } finally {
      // Check if component is still mounted
      if (isMountedRef.current) {
        setIsActivatingRanking(false);
      }
    }
  };

  // If no teams data yet, show loading or empty state
  if (teamsRankings.length === 0) {
    return (
      <div className="w-full rounded-md overflow-hidden">
        <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
          <h3 className="text-lg text-background font-medium text-white">
            Team Ranking
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
          {isLoading ? "Loading..." : "No teams data available."}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-md overflow-hidden">
      <div className="flex items-center justify-between gap-5 p-5 py-4 bg-brown">
        <h3 className="text-lg text-background font-medium text-white">
          Team Ranking
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
          {teamsRankings.slice(0, 3).map((team, index) => (
            <React.Fragment key={team.teamId || index}>
              {index < 2 ? (
                <WinnerCard speaker={team} count={index + 1} />
              ) : (
                <div className="w-full sm:w-auto sm:col-span-2 md:col-span-1 mx-auto">
                  <WinnerCard speaker={team} count={index + 1} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <DataTable
          data={teamsRankings.slice(3)}
          columns={columns}
          infiniteScroll={true}
          isLoading={isLoading || isLoadingMore}
          hasMore={!noMoreData && teamsRankings.length < totalCount}
          onLoadMore={handleLoadMore}
        />
      </div>

      {/* Visibility Settings Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Activate Team Rankings</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">
              Select who can see the team rankings:
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
  speaker: TeamRanking.AsObject;
  count: number;
}

// Utility function to extract school name
const extractSchoolName = (schoolNamesList: string[] | undefined): string => {
  if (Array.isArray(schoolNamesList) && schoolNamesList.length > 0) {
    const firstSchool = schoolNamesList[0];
    if (typeof firstSchool === "string") {
      // Remove surrounding curly braces, quotes, and any trailing quote
      return firstSchool.replace(/^{"|"}$|"$/g, "").replace(/\\"/g, "");
    }
  }
  return "School name unavailable";
};

const WinnerCard = ({ speaker, count }: WinnerCardProps) => {
  const schoolName = extractSchoolName(speaker.schoolNamesList);
  return (
    <Card>
      <CardContent className="flex gap-3 p-2">
        <div className="relative w-[73px] h-20 rounded-md overflow-hidden">
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
        <div className="flex-1">
          <div className="w-full flex items-center gap-2 justify-between">
            <div className="flex flex-col">
              <h3 className="text-foreground font-semibold">
                {speaker.teamName}
              </h3>
              <small className="text-xs text-muted-foreground">
                {schoolName}
              </small>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Points</span>
              <span className="text-foreground">{speaker.totalPoints}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Wins</span>
              <span className="text-foreground">{speaker.wins}</span>
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
};

export default TeamsRanking;
