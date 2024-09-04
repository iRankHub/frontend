import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface TeamSwapState {
    tableData: Pairing.AsObject[];
    changedField: { rowIndex: number; columnId: string } | null;
    affectedField: { rowIndex: number; columnId: string } | null;
    selectedTeam: string | null; // Track selected team
    swapTeams: (
        from: { rowIndex: number; columnId: string },
        to: { rowIndex: number; columnId: string }
    ) => void;
    setTableData: (data: Pairing.AsObject[]) => void;
    setSelectedTeam: (teamName: string | null) => void; // Action to set selected team
    resetSwapState: () => void;
}

export const useTeamSwapStore = create<TeamSwapState>((set) => ({
    tableData: [],
    changedField: null,
    affectedField: null,
    selectedTeam: null,
    swapTeams: (from, to) =>
        set((state) => {
            const newTableData = [...state.tableData];
            const fromTeam =
                // @ts-ignore
                newTableData[from.rowIndex][from.columnId] as { name: string };
            const toTeam =
                // @ts-ignore
                newTableData[to.rowIndex][to.columnId] as { name: string };

            // Swap the teams
            // @ts-ignore
            newTableData[from.rowIndex][from.columnId] = toTeam;
            // @ts-ignore
            newTableData[to.rowIndex][to.columnId] = fromTeam;

            return {
                tableData: newTableData,
                changedField: from,
                affectedField: to,
                selectedTeam: toTeam.name, // Update selected team to the new value
            };
        }),
    setTableData: (data) => set({ tableData: data }),
    setSelectedTeam: (teamName) => set({ selectedTeam: teamName }),
    resetSwapState: () => set({ changedField: null, affectedField: null, selectedTeam: null }),
}));
