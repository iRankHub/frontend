import { Pairing } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface Swap {
    from: { rowIndex: number; columnId: string };
    to: { rowIndex: number; columnId: string };
}

interface TeamSwapState {
    originalData: Pairing.AsObject[];
    swapsByRound: Record<number, Swap[]>;
    currentRound: number;
    editingRow: number | null;
    setOriginalData: (data: Pairing.AsObject[]) => void;
    setCurrentRound: (round: number) => void;
    swapTeams: (from: Swap['from'], to: Swap['to']) => void;
    setEditingRow: (rowIndex: number | null) => void;
}

export const useTeamSwapStore = create<TeamSwapState>((set) => ({
    originalData: [],
    swapsByRound: {},
    currentRound: 1,
    editingRow: null,
    setOriginalData: (data) => set({ originalData: data }),
    setCurrentRound: (round) => set({ currentRound: round }),
    swapTeams: (from, to) =>
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
        }),
    setEditingRow: (rowIndex) => set({ editingRow: rowIndex }),
}));