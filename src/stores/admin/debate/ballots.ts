import { Ballot } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface BallotsStore {
    ballots: Ballot.AsObject[];
    setBallots: (Ballots: Ballot.AsObject[]) => void;
    updateBallot: (ballotId: number, newBallot: Ballot.AsObject) => void;
    addBallot: (Ballot: Ballot.AsObject) => void;
    deleteBallot: (ballotId: number) => void;
    markBallotAsRecorded: (ballotId: number, newVerdit: string) => void;
}

export const useBallotsStore = create<BallotsStore>((set) => ({
    ballots: [],
    setBallots: (ballots: Ballot.AsObject[]) => set({ ballots }),
    updateBallot: (ballotId: number, newBallot: Ballot.AsObject) => {
        set((state: BallotsStore) => {
            const newBallots = state.ballots.map((ballot) => {
                if (ballot.ballotId === ballotId) {
                    return {
                        ...ballot,
                        ...newBallot,
                    }
                }
                return ballot;
            });
            return { ballots: newBallots };
        });
    },
    addBallot: (ballot: Ballot.AsObject) => {
        set((state: BallotsStore) => {
            const newBallots = [...state.ballots, ballot];
            return { ballots: newBallots };
        });
    },
    deleteBallot: (ballotId: number) => {
        set((state: BallotsStore) => {
            const newBallots = state.ballots.filter((ballot) => ballot.ballotId !== ballotId);
            return { ballots: newBallots };
        });
    },
    markBallotAsRecorded: (ballotId: number, newVerdit: string) => {
        console.log("Marking ballot as recorded", ballotId);
        set((state: BallotsStore) => {
            const newBallots = state.ballots.map((ballot) => {
                if (ballot.ballotId === ballotId) {
                    return {
                        ...ballot,
                        recordingStatus: "Recorded",
                        verdict: newVerdit,
                    }
                }
                return ballot;
            });
            return { ballots: newBallots };
        });
    }
}));