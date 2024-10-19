import { InvitationInfo, Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { create } from "zustand";

interface InvitationsStore {
    invitations: InvitationInfo.AsObject[];
    tournament: Tournament.AsObject | undefined;
    setInvitations: (invitations: InvitationInfo.AsObject[]) => void;
    setTournament: (tournament: Tournament.AsObject) => void;
    updateInvitationStatus: (invitationID: number, newStatus: string) => void;
    bulkUpdateInvitationStatus: (invitationIDs: number[], newStatus: string) => void;
    bulkDeleteInvitations: (invitationIDs: number[]) => void;
    deleteInvitation: (invitationID: number) => void;
}

export const useInvitationsStore = create<InvitationsStore>((set) => ({
    invitations: [],
    tournament: undefined,
    setInvitations: (invitations: InvitationInfo.AsObject[]) => set({ invitations }),
    setTournament: (tournament: Tournament.AsObject) => set({ tournament }),
    updateInvitationStatus: (invitationID: number, newStatus: string) => {
        set((state: InvitationsStore) => {
            const newInvitations = state.invitations.map((invitation) => {
                if (invitation.invitationId === invitationID) {
                    return { ...invitation, status: newStatus };
                }
                return invitation;
            });
            return { invitations: newInvitations };
        });
    },
    bulkUpdateInvitationStatus: (invitationIDs: number[], newStatus: string) => {
        set((state: InvitationsStore) => {
            const newInvitations = state.invitations.map((invitation) => {
                if (invitationIDs.includes(invitation.invitationId)) {
                    return { ...invitation, status: newStatus };
                }
                return invitation;
            });
            return { invitations: newInvitations };
        });
    },
    bulkDeleteInvitations: (invitationIDs: number[]) => {
        set((state: InvitationsStore) => {
            const newInvitations = state.invitations.filter((invitation) => !invitationIDs.includes(invitation.invitationId));
            return { invitations: newInvitations };
        });
    },
    deleteInvitation: (invitationID: number) => {
        set((state: InvitationsStore) => {
            const newInvitations = state.invitations.filter((invitation) => invitation.invitationId !== invitationID);
            return { invitations: newInvitations };
        });
    },
}));