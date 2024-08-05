"use client";

import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";

type Props = {};

function FormatCard({}: Props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  return (
    <>
      <div className="w-full border rounded-md border-gray-200 p-3 flex flex-col gap-4 cursor-pointer hover:shadow-lg">
        <h3>World Schools Debate</h3>
        <p className="text-sm text-muted-text">Description</p>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Icons.users className="text-primary w-3.5 h-3.5" />
            <span className="text-muted-text text-sm">21</span>
          </div>
          <Sheet
            onOpenChange={() => {
              setIsEdit(false);
              setIsDelete(false);
            }}
          >
            <SheetTrigger>
              <Icons.expand className="w-3.5 h-3.5 text-primary" />
            </SheetTrigger>
            <SidePanel>
              <Panelheader>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-bold">Worlds Schools Debate</h3>
                  {!isEdit && (
                    <Button
                      type="button"
                      className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                      size={"icon"}
                      onClick={() => {
                        setIsEdit(true);
                        setIsDelete(false);
                      }}
                    >
                      <Icons.pencilLine className="w-4 h-4" />
                    </Button>
                  )}
                  <Dialog
                    onOpenChange={() => {
                      setIsEdit(false);
                      setIsDelete(false);
                    }}
                  >
                    <DialogTrigger className="mt-0.5">
                      {!isDelete && (
                        <Button
                          type="button"
                          className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                          size={"icon"}
                          onClick={() => {
                            setIsEdit(false);
                            setIsDelete(true);
                          }}
                        >
                          <Icons.trash className="w-4 h-4" />
                        </Button>
                      )}
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-base">
                          Are you absolutely sure?
                        </DialogTitle>
                        <DialogDescription className="text-sm text-muted-foreground">
                          This action cannot be undone. This will permanently
                          delete this tournament format and remove all related
                          data from our servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="w-full justify-end">
                        <Button
                          type="submit"
                          size={"sm"}
                          variant={"outline"}
                          className="max-w-32"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          size={"sm"}
                          variant={"destructive"}
                          className="max-w-32"
                        >
                          Delete
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </Panelheader>
              <form className="grid gap-3 p-5">
                <div className="w-full">
                  <Label htmlFor="name" className="text-sm">
                    Format Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Pedro Duarte"
                    className="col-span-3 mt-1 text-muted-foreground"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="name" className="text-sm">
                    Format Description
                  </Label>
                  <Textarea
                    name="description"
                    placeholder="Type your message here."
                    className="col-span-3 mt-1 text-muted-foreground"
                  />
                </div>
                <div className="w-full">
                  <Label htmlFor="name" className="text-sm capitalize">
                    Speakers per debate
                  </Label>
                  <Input
                    id="name"
                    placeholder="3 speakers"
                    className="col-span-3 mt-1 text-muted-foreground"
                  />
                </div>

                {isEdit && (
                  <Button type="submit" size={"sm"} className="w-36 ml-auto">
                    Save Changes
                  </Button>
                )}
              </form>
            </SidePanel>
          </Sheet>
        </div>
      </div>
    </>
  );
}

export default FormatCard;
