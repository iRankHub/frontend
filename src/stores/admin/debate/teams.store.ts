import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface TeamsStore {
    teams: Team.AsObject[];
    setTeams: (teams: Team.AsObject[]) => void;
    updateTeam: (teamId: number, team: Team.AsObject) => void;
    addTeam: (team: Team.AsObject) => void;
    deleteTeam: (teamId: number) => void;
}

export const useTeamsStore = create<TeamsStore>((set) => ({
    teams: [],
    setTeams: (teams: Team.AsObject[]) => set({ teams }),
    updateTeam: (teamId: number, newTeam: Team.AsObject) => {
        set((state: TeamsStore) => {
            const newTeams = state.teams.map((team) => {
                if (team.teamId === teamId) {
                    return newTeam;
                }
                return team;
            });
            return { teams: newTeams };
        });
    },
    addTeam: (team: Team.AsObject) => {
        set((state: TeamsStore) => {
            const newTeams = [...state.teams, team];
            return { teams: newTeams };
        });
    },
    deleteTeam: (teamID: number) => {
        set((state: TeamsStore) => {
            const newTeams = state.teams.filter((team) => team.teamId !== teamID);
            return { teams: newTeams };
        });
    },
}));