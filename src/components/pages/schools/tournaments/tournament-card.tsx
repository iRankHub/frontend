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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { deleteTournament } from "@/core/tournament/list";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/stores/auth/auth.store";
import { DeleteTournamentType } from "@/types/tournaments/tournament";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

interface TournamentCardProps {
  tournament: Tournament.AsObject;
  setTournaments: React.Dispatch<React.SetStateAction<Tournament.AsObject[]>>;
}

function TournamentCard({ setTournaments, tournament }: TournamentCardProps) {
  const { user } = useUserStore((state) => state);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const { toast } = useToast();

  const handleDeleteTournament = async () => {
    if (!user) return;

    const options: DeleteTournamentType = {
      tournament_id: tournament.tournamentId,
      token: user.token,
    };

    setDeleteLoading(true);
    await deleteTournament({
      ...options,
    })
      .then((res) => {
        if (res.success) {
          setTournaments((prev) => {
            const index = prev.findIndex(
              (tourn) => tourn.tournamentId === tournament.tournamentId
            );

            if (index === -1) return prev;
            prev.splice(index, 1);
            return [...prev];
          });
          setDialogOpen(false);
          toast({
            variant: "success",
            title: "Success",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error",
            description: res.message,
            action: (
              <ToastAction altText="Close" className="bg-primary text-white">
                Close
              </ToastAction>
            ),
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        setDeleteLoading(false);
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  };
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
            {tournament.name}
          </h3>
        </div>
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
                <Link
                  className="no-underline"
                  href={`/students/tournaments/${tournament.tournamentId}`}
                >
                  Go To Tournament
                </Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
              {tournament.startDate} - {tournament.endDate}
            </small>
          </div>
        </div>
        <Separator />
        <div className="flex items-center gap-4 justify-between mt-3">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-primary">
              RWF {tournament.tournamentFee}
            </span>
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
