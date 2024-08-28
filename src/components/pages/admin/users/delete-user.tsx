import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "@/components/ui/use-toast";
import { deactivateUser } from "@/core/users/users";
import { DeactivateUser } from "@/types/user_management/users";
import { ToastAction } from "@/components/ui/toast";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { useState } from "react";

interface DeleteUserProps {
  userid: number;
}
export const DeleteUser = ({ userid }: DeleteUserProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const { user } = useUserStore((state) => state);
  const { deleteUser: deleteUserInStore, users } = useUsersStore(
    (state) => state
  );
  const { toast } = useToast();

  const handleDeleteUser = async () => {
    if (!user) return;

    const options: DeactivateUser = {
      userID: Number(userid),
      token: user.token,
    };

    setDeleteLoading(true);
    await deactivateUser({
      ...options,
    })
      .then((res) => {
        console.log(res);
        if (res.success) {
          setOpen(false);
          deleteUserInStore(Number(userid));
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
        console.error(err.message);
        setDeleteLoading(false);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="bg-transparent w-6 h-6 p-1 m-0"
        >
          <Icons.trash2 className="w-4 h-4 text-destructive" />
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
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            type="button"
            size={"sm"}
            variant={"destructive"}
            className="max-w-32"
            onClick={handleDeleteUser}
          >
            Delete
            {deleteLoading && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
