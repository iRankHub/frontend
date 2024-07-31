"use client";

import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Badge } from "@/components/ui/badge";
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
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { DialogDescription } from "@radix-ui/react-dialog";
import React from "react";

type Props = {};

function LeagueCard({}: Props) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [provinces, setProvinces] = React.useState<string[]>([]);
  const [districts, setDistricts] = React.useState<string[]>([]);
  return (
    <>
      <div className="w-full border rounded-md border-gray-200 p-3 flex flex-col gap-4 cursor-pointer hover:shadow-lg">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-sm text-muted-foreground">Design Review</h3>
          <Badge variant="outline" className="rounded-md bg-primary text-white">
            International
          </Badge>
        </div>
        <div className="flex items-end gap-4 justify-between">
          <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 justify-end">
              <span className="text-muted-text text-sm">21</span>
              <p className="text-sm">Province(s)</p>
            </div>
            <div className="flex flex-col gap-1 justify-end">
              <span className="text-muted-text text-sm">21</span>
              <p className="text-sm">District(s)</p>
            </div>
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
                  <h3 className="text-sm font-bold">Kigali Debate League</h3>
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
                <div className="w-full flex items-center gap-3">
                  <Label
                    htmlFor="name"
                    className="text-sm min-w-[80px] text-right"
                  >
                    League Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="E.g: Kigali Debate League"
                    className="flex-1 mt-1 h-9 placeholder:text-muted-text"
                    disabled={!isEdit}
                  />
                </div>
                <div className="w-full flex items-center gap-3">
                  <Label
                    htmlFor="type"
                    className="text-sm min-w-[80px] text-right"
                  >
                    League Type
                  </Label>
                  <Select name="type" disabled={!isEdit}>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="choose type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">Local</SelectItem>
                      <SelectItem value="international">
                        International
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex items-center gap-3">
                  <Label
                    htmlFor="type"
                    className="text-sm min-w-[80px] text-right"
                  >
                    Province(s)
                  </Label>
                  <MultiSelector
                    values={provinces}
                    onValuesChange={setProvinces}
                    loop
                    className="flex-1"
                  >
                    <MultiSelectorTrigger className={cn(
                      "border-gray-300 rounded-md",
                      !isEdit && "cursor-not-allowed"
                    )}>
                      <MultiSelectorInput
                        placeholder="Select your province"
                        className="placeholder:text-muted-text disabled:cursor-not-allowed"
                        disabled={!isEdit}
                      />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"South"}>
                          South
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"East"}>
                          East
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Kigali"}>
                          Kigali City
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"West"}>
                          West
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
                </div>
                <div className="w-full flex items-center gap-3">
                  <Label
                    htmlFor="type"
                    className="text-sm min-w-[80px] text-right"
                  >
                    District(s)
                  </Label>
                  <MultiSelector
                    values={districts}
                    onValuesChange={setDistricts}
                    loop
                    className="flex-1"
                  >
                    <MultiSelectorTrigger className={cn(
                      "border-gray-300 rounded-md",
                      !isEdit && "cursor-not-allowed"
                    )}>
                      <MultiSelectorInput
                        placeholder="Select your district"
                        className="placeholder:text-muted-text disabled:cursor-not-allowed"
                        disabled={!isEdit}
                      />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                      <MultiSelectorList>
                        <MultiSelectorItem value={"Rulindo"}>
                          Rulindo
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Nyanza"}>
                          Nyanza
                        </MultiSelectorItem>
                        <MultiSelectorItem value={"Kicukiro"}>
                          Kicukiro
                        </MultiSelectorItem>
                      </MultiSelectorList>
                    </MultiSelectorContent>
                  </MultiSelector>
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

export default LeagueCard;
