import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { updateInvitationStatus } from "@/core/tournament/list";
import { useInvitationsStore } from "@/stores/admin/tournaments/invitations.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { InvitationStatuses } from "@/types/tournaments/invitations";
import React from "react";

type Props = {
  invitationId: number;
};

function AcceptInvite({ invitationId }: Props) {
  const { user } = useUserStore((state) => state);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const { updateInvitationStatus: updateInvitation } = useInvitationsStore(
    (state) => state
  );

  const handleAccept = async () => {
    if (!user) return;
    const options = {
      token: user.token,
      invitation_id: invitationId,
      new_status: InvitationStatuses.ACCEPTED,
    };
    setLoading(true);
    await updateInvitationStatus({ ...options })
      .then((res) => {
        updateInvitation(invitationId, InvitationStatuses.ACCEPTED);
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
        setOpen(false);
      })
      .catch((err) => {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Failed",
          description: err.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-transparent w-5 h-5 m-0 p-0 mb-2">
        <Icons.mail className="w-full h-full text-success-border" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Accept Invite</DialogTitle>
        <DialogDescription>
          Are you sure you want to accept this invitation on behalf of the user?
        </DialogDescription>
        <DialogFooter className="flex items-center justify-end gap-3">
          <Button
            type="button"
            variant={"outline"}
            size={"sm"}
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            type="button"
            size={"sm"}
            onClick={handleAccept}
          >
            Accept
            {loading && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">Accept</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AcceptInvite;
