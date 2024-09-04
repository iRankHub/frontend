import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface TeamSwapState {
    tableData: Pairing.AsObject[];
    changedField: { rowIndex: number; columnId: string } | null;
    affectedField: { rowIndex: number; columnId: string } | null;
    swapTeams: (
        from: { rowIndex: number; columnId: string },
        to: { rowIndex: number; columnId: string }
    ) => void;
    setTableData: (data: Pairing.AsObject[]) => void;
}

export const useTeamSwapStore = create<TeamSwapState>((set) => ({
    tableData: [], // Initialize with an empty array
    changedField: null,
    affectedField: null,
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
            };
        }),
    setTableData: (data) => set({ tableData: data }), // Add this action to set table data
}));
