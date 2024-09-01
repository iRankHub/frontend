import { Icons } from "@/components/icons";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/components/ui/use-toast";
import { deleteTournamentTeam } from "@/core/tournament/teams";
import { Team } from "@/lib/grpc/proto/debate_management/debate_pb";
import { cn } from "@/lib/utils";
import { useTeamsStore } from "@/stores/admin/debate/teams.store";
import { useUserStore } from "@/stores/auth/auth.store";
import { Inter } from "next/font/google";
import React from "react";

type Props = {
  team: Team.AsObject;
};

const inter = Inter({
  weight: "600",
  subsets: ["latin"],
});

function DeleteTeam({ team }: Props) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { user } = useUserStore((state) => state);
  const { deleteTeam } = useTeamsStore((state) => state);
  const { toast } = useToast();

  const handleDeleteTournament = async () => {
    if (!user) return;
    setLoading(true);

    await deleteTournamentTeam({
      team_id: team.teamId,
      token: user.token,
    })
      .then((res) => {
        deleteTeam(team.teamId);
        setOpen(false);
        toast({
          title: "Team Deleted",
          description: "The team has been successfully deleted.",
          variant: "success",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Error",
          description: "An error occurred while deleting the team.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="bg-transparent w-5 h-5 m-0 p-0 mb-2">
        <Icons.trash2 className="w-full h-full text-destructive" />
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete Team</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this team? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter className="flex items-center justify-end gap-3">
          <Button
            type="button"
            variant={"outline"}
            size={"sm"}
            className="btn btn-secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
            <span className="sr-only">Cancel</span>
          </Button>
          <Button
            type="button"
            variant={"destructive"}
            size={"sm"}
            onClick={handleDeleteTournament}
          >
            Delete
            {loading && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteTeam;
