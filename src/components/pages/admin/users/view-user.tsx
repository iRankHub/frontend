import React, { useState } from 'react'
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

type Props = {}

function ViewUser({}: Props) {
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
                <div>
                  <h3 className="text-primary text-sm mb-3">Student Profile</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                    <p className="text-foreground text-sm mb-2">
                      Speaker 2: Iman Koulibally
                    </p>
                    <p className="text-foreground text-sm mb-2">
                      Speaker 3: Joselyto
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-primary text-sm mb-3">Academics</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                  </Card>
                </div>
                <div>
                  <h3 className="text-primary text-sm mb-3">Identification</h3>
                  <Card className="w-full px-4 py-5">
                    <p className="text-foreground text-sm mb-2">
                      Speaker 1: Bideri Alec
                    </p>
                  </Card>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-between gap-3">
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
              </div>
            </PanelBody>
          </SidePanel>
        </Sheet>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-base">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              This action cannot be undone. This will permanently delete this
              user and remove all related data from our servers.
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
  )
}

export default ViewUser