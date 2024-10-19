import { League } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { create } from "zustand";

interface LeaguesStore {
    leagues: League.AsObject[];
    setLeagues: (leagues: League.AsObject[]) => void;
    updateLeague: (leagueId: number, newLeague: League.AsObject) => void;
    addLeague: (league: League.AsObject) => void;
    deleteLeague: (leagueId: number) => void;
}

export const useLeaguesStore = create<LeaguesStore>((set) => ({
    leagues: [],
    setLeagues: (leagues: League.AsObject[]) => set({ leagues }),
    updateLeague: (leagueId: number, newLeague: League.AsObject) => {
        set((state: LeaguesStore) => {
            const newLeagues = state.leagues.map((league) => {
                if (league.leagueId === leagueId) {
                    return { ...league, ...newLeague };
                }
                return league;
            });
            return { leagues: newLeagues };
        });
    },
    addLeague: (league: League.AsObject) => {
        set((state: LeaguesStore) => {
            const newLeagues = [...state.leagues, league];
            return { leagues: newLeagues };
        });
    },
    deleteLeague: (leagueId: number) => {
        set((state: LeaguesStore) => {
            const newLeagues = state.leagues.filter((league) => league.leagueId !== leagueId);
            return { leagues: newLeagues };
        });
    },
}));