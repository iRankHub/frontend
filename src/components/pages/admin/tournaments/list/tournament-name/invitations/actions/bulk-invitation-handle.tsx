import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  bulkResendInvitations,
  bulkUpdateInvitation,
} from "@/core/tournament/list";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import { useUserStore } from "@/stores/auth/auth.store";
import React from "react";

type useBulkUpdateInviteProps = {
  invitationIds: number[];
};

export function useBulkUpdateInvite({
  invitationIds,
}: useBulkUpdateInviteProps) {
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const { bulkUpdateInvitationStatus } = useInvitationsStore((state) => state);

  const handleUpdate = async (new_status: string) => {
    try {
      if (!user) return;
      const options = {
        token: user.token,
        invitation_ids: invitationIds,
        new_status,
      };
      setLoading(true);
      const res = await bulkUpdateInvitation({ ...options });

      if (res.success) {
        bulkUpdateInvitationStatus(options.invitation_ids, options.new_status);
        toast({
          variant: "success",
          title: "Success",
          description: res.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed",
          description: res.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleUpdate, open, loading };
}

type useBulkResendInvitesProps = {
  invitationIds: number[];
};

export const useBulkResendInvites = ({
  invitationIds,
}: useBulkResendInvitesProps) => {
  const { user } = useUserStore((state) => state);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const handleResend = async () => {
    try {
      if (!user) return;
      const options = {
        token: user.token,
        invitation_ids: invitationIds,
      };
      setLoading(true);
      const res = await bulkResendInvitations({ ...options });

      if (res.success) {
        toast({
          variant: "success",
          title: "Success",
          description: res.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed",
          description: res.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return { handleResend, open, loading };
};
