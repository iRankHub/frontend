import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import FormatCard from "./format-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function Formats({}) {
  return (
    <div className="w-full mt-5 rounded-md overflow-hidden border border-muted">
      <div className="flex items-center justify-between flex-wrap gap-5 p-5 bg-brown">
        <form action="#" className="flex items-center gap-3">
          <Input
            type="search"
            placeholder="Search name..."
            className="w-72 h-8"
          />
          <Button
            type="submit"
            className="border border-dashed border-white gap-2 h-8 font-semibold hover:bg-white hover:text-foreground group"
          >
            <Icons.addCircle className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
            Speakers
          </Button>
        </form>
        <Dialog>
          <DialogTrigger>
            <Button
              type="button"
              className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground group"
            >
              <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
              Add New Format
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-base">
                Create Tournament Format
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-3">
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
            </div>
            <DialogFooter className="w-full">
              <Button type="submit" size={"sm"} className="w-full">Create Format</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full bg-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
          <FormatCard />
        </div>
        <Button
          type="button"
          className="ring-0 border-none outline-none text-primary mt-10 p-0 bg-primary/80 underline"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}

export default Formats;
