import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { rejectUser } from "@/core/users/users";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { DeactivateUser } from "@/types/user_management/users";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RejectUserProps {
  userid: number;
}

export const RejectUser = ({ userid }: RejectUserProps) => {
  const { user } = useUserStore((state) => state);
  const { updateUserStatus } = useUsersStore((state) => state);
  const { toast } = useToast();
  const [rejectLoading, setRejectLoading] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleRejectUser = async () => {
    if (!user) return;
    const options: DeactivateUser = {
      userID: Number(userid),
      token: user.token,
    };

    setRejectLoading(true);
    await rejectUser({
      ...options,
    })
      .then((res) => {
        if (res.success) {
          updateUserStatus(Number(userid), "rejected");
          setOpen(false);
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
            title: "Error",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      })
      .catch((err) => {
        setRejectLoading(false);
      })
      .finally(() => {
        setRejectLoading(false);
      });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="bg-transparent w-6 h-6 p-1 m-0"
        >
          <Icons.circleX className="w-4 h-4 text-destructive" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-base">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            This action cannot be undone. This will permanently delete this user
            and remove all related data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full justify-end">
          <Button
            type="button"
            size={"sm"}
            variant={"outline"}
            className="max-w-32"
            onClick={() => setOpen(!open)}
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            type="button"
            size={"sm"}
            variant={"destructive"}
            className="max-w-32"
            onClick={handleRejectUser}
          >
            Reject
            {rejectLoading && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">Reject</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
