import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

function TournamentCard() {
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <Button
            size={"sm"}
            className="bg-[#FFD19A] w-8 h-8 text-sm cursor-default hover:bg-[#FFD19A]"
          >
            <div className="bg-primary rounded p-0.5 m-0 leading-3 text-white text-xs">
              IC
            </div>
          </Button>
          <h3 className={cn("text-sm font-medium", inter.className)}>
            Name of Tournament
          </h3>
        </div>
        <Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                type="button"
                size={"sm"}
                className="gap-2 text-sm font-semibold p-0 w-6 h-6 bg-transparent hover:bg-transparent hover:text-foreground group"
              >
                <Icons.ellipsisVertical className="text-muted-foreground w-34 h-4 group-hover:text-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="p-0">
                <Button
                  type="button"
                  size={"sm"}
                  variant={"link"}
                  className="w-full justify-start text-foreground hover:no-underline"
                >
                  <Link className="no-underline" href={"#"}>
                    Go To Tournament
                  </Link>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DialogTrigger className="mt-0.5 w-full">
                <DropdownMenuItem className="p-0">
                  <Button
                    type="button"
                    size={"sm"}
                    variant={"ghost"}
                    className="w-full justify-start"
                  >
                    Delete
                  </Button>
                </DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-base">
                Are you absolutely sure?
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                This action cannot be undone. This will permanently delete this
                tournament format and remove all related data from our servers.
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
      <div className="w-full my-3">
        <div className="flex items-center gap-4 justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted-text">Venue</span>
            <small className="text-secondary-foreground text-xs font-medium">
              Glory Academy
            </small>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-muted-text">Date</span>
            <small className="text-secondary-foreground text-xs font-medium">
              12/12/2022 - 13/12/2002
            </small>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4 justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary">RWF 10000</span>
            <small className="text-secondary-foreground text-xs font-medium">
              Tournament Fees
            </small>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary">Hakidu</span>
            <small className="text-secondary-foreground text-xs font-medium">
              coordinator
            </small>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default TournamentCard;
