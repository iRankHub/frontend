import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  PanelBody,
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { Input } from "@/components/ui/input";

type Props = {
  user: UserSummary.AsObject;
};

function ViewUser({ user }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <Sheet>
        <SheetTrigger>
          <Button
            type="button"
            variant={"secondary"}
            size={"icon"}
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.view className="w-4 h-4 text-info" />
          </Button>
        </SheetTrigger>
        <SidePanel>
          <Panelheader className="font-semibold">Detail Summary</Panelheader>
          <PanelBody className="flex flex-col p-5">
            <div className="flex-1 w-full flex flex-col gap-5">
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  IDebate Id
                </h3>
                <Input
                  value={user.idebateid}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  Name
                </h3>
                <Input
                  value={user.name}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  Email
                </h3>
                <Input
                  value={user.email}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  Joined on
                </h3>
                <Input
                  value={user.signupdate}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  Account Status
                </h3>
                <Input
                  value={user.status}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              <div className="w-full">
                <h3 className="text-sm mb-1 text-foreground font-medium">
                  Role
                </h3>
                <Input
                  value={user.userrole}
                  disabled
                  className="disabled:opacity-100"
                />
              </div>
              {user.userrole !== "school" && (
                <div className="w-full">
                  <h3 className="text-sm mb-1 text-foreground font-medium">
                    Gender
                  </h3>
                  <Input
                    value={user.gender}
                    disabled
                    className="disabled:opacity-100"
                  />
                </div>
              )}
            </div>
            {/* <div className="w-full flex flex-row items-center justify-between gap-3">
                <Button
                  type="button"
                  size={"sm"}
                  variant={"destructive"}
                  onClick={() => setOpen(!open)}
                >
                  Reject
                  <span className="sr-only">Reject</span>
                </Button>
                <Button
                  type="button"
                  size={"sm"}
                  variant={"default"}
                  className="w-full hover:bg-primary"
                >
                  Accept
                  <span className="sr-only">Accept</span>
                </Button>
              </div> */}
          </PanelBody>
        </SidePanel>
      </Sheet>
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
          >
            Delete
            <span className="sr-only">Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ViewUser;
