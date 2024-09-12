import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { createTeamSchema } from "@/lib/validations/admin/tournaments/create-team.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useUserStore } from "@/stores/auth/auth.store";
import { GetSchoolsType } from "@/types/user_management/schools";
import { getAllUsers, getStudents } from "@/core/users/users";
import { Student } from "@/lib/grpc/proto/user_management/users_pb";
import { CreateTeamType, UpdateTeamType } from "@/types/tournaments/teams";
import {
  createTournamentTeam,
  updateTournamentTeam,
} from "@/core/tournament/teams";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";

interface TeamUserProps {
  team: Team.AsObject;
}

type TeamInput = z.infer<typeof createTeamSchema>;

const ViewTeamForm = ({ team }: TeamUserProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const [open, setOpen] = useState<boolean>(false);

  const form = useForm<TeamInput>({
    resolver: zodResolver(createTeamSchema),
    defaultValues: {
      name: team.name,
      speaker_1: team.speakersList[0].name,
      speaker_2: team.speakersList[1].name,
      speaker_3: team.speakersList[2].name,
    },
  });

  const renderSpeakerField = (
    fieldName: "speaker_1" | "speaker_2" | "speaker_3",
    label: string
  ) => (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel className="font-medium text-foreground">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder="student"
              className="disabled:opacity-100"
              {...field}
              disabled
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="mr-3">
        <Button
          type="button"
          variant={"secondary"}
          size={"icon"}
          className="w-full bg-transparent hover:bg-transparent m-0"
        >
          <Icons.view className="w-5 h-5 text-info" />
        </Button>
      </SheetTrigger>
      <SidePanel>
        <Panelheader>
          <div className="flex items-center gap-1">
            <h3 className="text-sm font-bold capitalize">{team.name}</h3>
          </div>
        </Panelheader>
        <Form {...form}>
          <form className="p-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-darkBlue">
                    Team Name
                    <b className="text-primary font-light"> *</b>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Dreamers teams"
                      className="disabled:opacity-100"
                      {...field}
                      disabled
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full mb-5">
              <h3 className="text-sm text-muted-foreground font-medium my-3">
                Team Members
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {renderSpeakerField("speaker_1", "1st Speaker")}
                {renderSpeakerField("speaker_2", "2nd Speaker")}
                {renderSpeakerField("speaker_3", "3rd Speaker")}
              </div>
            </div>
          </form>
        </Form>
      </SidePanel>
    </Sheet>
  );
};

export default ViewTeamForm;
