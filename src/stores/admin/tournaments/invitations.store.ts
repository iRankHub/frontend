import { InvitationInfo } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { create } from "zustand";

interface InvitationsStore {
    invitations: InvitationInfo.AsObject[];
    setInvitations: (invitations: InvitationInfo.AsObject[]) => void;
    updateInvitationStatus: (invitationID: number, newStatus: string) => void;
    bulkUpdateInvitationStatus: (invitationIDs: number[], newStatus: string) => void;
    deleteInvitation: (invitationID: number) => void;
}

export const useInvitationsStore = create<InvitationsStore>((set) => ({
    invitations: [],
    setInvitations: (invitations: InvitationInfo.AsObject[]) => set({ invitations }),
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
    deleteInvitation: (invitationID: number) => {
        set((state: InvitationsStore) => {
            const newInvitations = state.invitations.filter((invitation) => invitation.invitationId !== invitationID);
            return { invitations: newInvitations };
        });
    },
}));