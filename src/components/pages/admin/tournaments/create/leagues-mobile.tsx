'use client'

import React from "react";
import { LeagueCard } from "./Leagues";
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
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Command, CommandInput } from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { League } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { v4 as uuidv4 } from "uuid";

type Props = {
  leagues: League.AsObject[];
  selectedLeague: League.AsObject | null;
  setSelectedLeague: React.Dispatch<
    React.SetStateAction<League.AsObject | null>
  >;
};

function LeaguesMobile({
  leagues,
  selectedLeague,
  setSelectedLeague,
}: Props) {
  const [provinces, setProvinces] = React.useState<string[]>([]);
  const [districts, setDistricts] = React.useState<string[]>([]);
  return (
    <SidePanel>
      <Panelheader>
        <div className="w-full h-12 flex flex-row items-center justify-between px-3 pb-2">
          <h3 className="text-sm font-bold">Leagues</h3>
        </div>
      </Panelheader>
      <div className="w-full p-5">
        <div className="flex items-center gap-3 mt-2 h-auto">
          <Command className="rounded-md w-full border">
            <CommandInput
              placeholder="Search leagues..."
              className="ring-0 h-8"
            />
          </Command>
          <Dialog>
            <DialogTrigger>
              <Button
                type="button"
                size={"icon"}
                className="h-8 w-8 rounded-sm hover:bg-primary"
              >
                <Icons.add className="text-white w-3.5 h-3.5" />
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
                      <SelectItem value="international">
                        International
                      </SelectItem>
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
                      <MultiSelectorInput
                        placeholder="Select your province"
                        className="placeholder:text-muted-text"
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
                      <MultiSelectorInput
                        placeholder="Select your district"
                        className="placeholder:text-muted-text"
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
              </div>
              <DialogFooter className="w-full">
                <Button type="submit" size={"sm"} className="w-full">
                  Create League
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="w-full mt-1">
          <p className="text-muted-foreground text-xs italic font-medium">
            20 records found
          </p>
          <ScrollArea className="w-full h-[calc(100vh_-_150px_-_56px)]">
            <div className="px-2">
            {leagues.map((league) => (
              <div key={uuidv4()} onClick={() => setSelectedLeague(league)}>
                <LeagueCard league={league} selectedLeague={selectedLeague} />
              </div>
            ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </SidePanel>
  );
}

export default LeaguesMobile;
