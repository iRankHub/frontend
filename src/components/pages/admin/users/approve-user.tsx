import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { approveUser } from "@/core/users/users";
import { useUsersStore } from "@/stores/admin/users/users.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { DeactivateUser } from "@/types/user_management/users";
import { useState } from "react";

interface ApproveUserProps {
  userid: number;
}

export const ApproveUser = ({ userid }: ApproveUserProps) => {
  const { user } = useUserStore((state) => state);
  const { updateUserStatus } = useUsersStore((state) => state);
  const { toast } = useToast();
  const [approveLoading, setApproveLoading] = useState(false);

  const handleApproveUser = async () => {
    if (!user) return;
    const options: DeactivateUser = {
      userID: Number(userid),
      token: user.token,
    };

    setApproveLoading(true);
    await approveUser({
      ...options,
    })
      .then((res) => {
        console.log(res);
        if (res.success) {
          updateUserStatus(Number(userid), "approved");
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
        setApproveLoading(false);
      })
      .finally(() => {
        setApproveLoading(false);
      });
  };
  return (
    <Button
      type="button"
      variant={"secondary"}
      size={"icon"}
      className="bg-transparent w-6 h-6 p-1 m-0"
      onClick={handleApproveUser}
      disabled={approveLoading}
    >
      {approveLoading ? (
        <Icons.spinner className="w-4 h-4 animate-spin" />
      ) : (
        <Icons.circleCheck className="w-4 h-4 text-success-light" />
      )}
    </Button>
  );
};
