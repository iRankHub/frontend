"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import LeagueCard from "./league-card";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

function Leagues({}) {
  const [provinces, setProvinces] = useState<string[]>([]);
  const [districts, setDistricts] = useState<string[]>([]);
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
            League Type
          </Button>
        </form>
        <Dialog>
          <DialogTrigger>
            <Button
              type="button"
              className="text-white gap-2 text-sm font-semibold h-8 hover:bg-white hover:text-foreground group"
            >
              <Icons.add className="text-white w-3.5 h-3.5 group-hover:text-foreground" />
              Add New League
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-base">Create League</DialogTitle>
            </DialogHeader>
            <div className="grid gap-3">
              <div className="w-full flex items-center gap-3">
                <Label htmlFor="name" className="text-sm min-w-[80px]">
                  League Name
                </Label>
                <Input
                  id="name"
                  placeholder="E.g: Kigali Debate League"
                  className="flex-1 mt-1 h-9 placeholder:text-muted-text"
                />
              </div>
              <div className="w-full flex items-center gap-3">
                <Label htmlFor="type" className="text-sm min-w-[80px]">
                  League Type
                </Label>
                <Select name="type">
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="choose type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full flex items-center gap-3">
                <Label htmlFor="type" className="text-sm min-w-[80px]">
                  Province(s)
                </Label>
                <MultiSelector
                  values={provinces}
                  onValuesChange={setProvinces}
                  loop
                  className="flex-1"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select your province" className="placeholder:text-muted-text" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"South"}>
                        South
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"East"}>East</MultiSelectorItem>
                      <MultiSelectorItem value={"Kigali"}>Kigali City</MultiSelectorItem>
                      <MultiSelectorItem value={"West"}>
                        West
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </div>
              <div className="w-full flex items-center gap-3">
                <Label htmlFor="type" className="text-sm min-w-[80px]">
                  District(s)
                </Label>
                <MultiSelector
                  values={districts}
                  onValuesChange={setDistricts}
                  loop
                  className="flex-1"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput placeholder="Select your district" className="placeholder:text-muted-text" />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      <MultiSelectorItem value={"Rulindo"}>
                        Rulindo
                      </MultiSelectorItem>
                      <MultiSelectorItem value={"Nyanza"}>Nyanza</MultiSelectorItem>
                      <MultiSelectorItem value={"Kicukiro"}>
                        Kicukiro
                      </MultiSelectorItem>
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </div>
            </div>
            <DialogFooter className="w-full">
              <Button type="submit" size={"sm"} className="w-full">
                Create League
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full bg-background p-8 grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
          <LeagueCard />
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

export default Leagues;
