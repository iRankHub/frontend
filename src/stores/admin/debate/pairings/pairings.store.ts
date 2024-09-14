import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface Swap {
    from: { rowIndex: number; columnId: string };
    to: { rowIndex: number; columnId: string };
}

interface TeamSwapState {
    originalData: Pairing.AsObject[];
    filteredData: Pairing.AsObject[]; // Add this line
    swapsByRound: Record<number, Swap[]>;
    currentRound: number;
    editingRow: number | null;
    isSwapMade: boolean;
    setOriginalData: (data: Pairing.AsObject[]) => void;
    setFilteredData: (data: Pairing.AsObject[]) => void; // Add this line
    setCurrentRound: (round: number) => void;
    swapTeams: (from: Swap['from'], to: Swap['to']) => void;
    setEditingRow: (rowIndex: number | null) => void;
    resetSwaps: () => void;
}

export const useTeamSwapStore = create<TeamSwapState>((set) => ({
    originalData: [],
    filteredData: [], // Add this line
    swapsByRound: {},
    isSwapMade: false,
    currentRound: 1,
    editingRow: null,
    setOriginalData: (data) => set({ originalData: data, filteredData: data }), // Update this line
    setFilteredData: (data) => set({ filteredData: data }), // Add this line
    setCurrentRound: (round) => set({ currentRound: round }),
    swapTeams: (from, to) => {
        set((state) => {
            const newSwapsByRound = { ...state.swapsByRound };
            if (!newSwapsByRound[state.currentRound]) {
                newSwapsByRound[state.currentRound] = [];
            }
            newSwapsByRound[state.currentRound].push({ from, to });

            return {
                swapsByRound: newSwapsByRound,
                // @ts-ignore
                selectedTeam: state.originalData[to.rowIndex][to.columnId].name,
            };
        });

        // update isSwapMade
        set({ isSwapMade: true });
    },
    setEditingRow: (rowIndex) => set({ editingRow: rowIndex }),
    resetSwaps: () => set({ swapsByRound: {}, isSwapMade: false }),
}));