import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useUserStore } from "@/stores/auth/auth.store";
import { useToast } from "../ui/use-toast";
import { DeleteTournamentType } from "@/types/tournaments/tournament";
import { deleteTournament } from "@/core/tournament/list";
import { Tournament } from "@/lib/grpc/proto/tournament_management/tournament_pb";
import { ToastAction } from "../ui/toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import React from "react";

interface FeedbackCardProps {
  row: any;
  getColumnValue: (row: any, columnId: string) => string;
  setTournaments: React.Dispatch<React.SetStateAction<Tournament.AsObject[]>>;
}

const FeedbackCard = ({
  row,
  getColumnValue,
  setTournaments,
}: FeedbackCardProps) => {
  const { user, userRole } = useUserStore((state) => state);
  const [deleteLoading, setDeleteLoading] = React.useState(false);
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleDeleteTournament = async (tournamentId: string) => {
    if (!user) return;

    const options: DeleteTournamentType = {
      tournament_id: Number(tournamentId),
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
              (tourn) => tourn.tournamentId === Number(tournamentId)
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

  const linkRole = () => {
    switch (userRole) {
      case "school":
        return "/schools/tournaments";
      case "student":
        return "/students/tournaments";
      default:
        return "/volunteers/tournaments";
    }
  };

  // format date from 2024-09-05 12:00 to 09/05
  const formatDate = (date: string) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${month}/${day}`;
  };

  return (
    <Link
      className="no-underline"
      href={`${linkRole()}/${getColumnValue(row, "tournamentId")}/feedback/${getColumnValue(row, "tournamentId")}`}
    >
      <Card key={row.id} className="p-3">
        <div className="flex items-center gap-3">
          <Button
            size={"sm"}
            className="bg-[#FFD19A] w-8 h-8 text-sm cursor-default hover:bg-[#FFD19A]"
          >
            <div className="bg-primary rounded p-0.5 m-0 leading-3 text-white text-xs">
              IC
            </div>
          </Button>
          <h3 className="text-sm font-medium">{getColumnValue(row, "name")}</h3>
        </div>
        <div className="w-full my-3">
          <div className="flex items-center gap-4 justify-between mb-3">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-text">Venue</span>
              <small className="text-secondary-foreground text-xs font-medium">
                {getColumnValue(row, "location")}
              </small>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-muted-text">Date</span>
              <small className="text-secondary-foreground text-xs font-medium">
                {formatDate(getColumnValue(row, "startDate"))} -{" "}
                {formatDate(getColumnValue(row, "endDate"))}
              </small>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-4 justify-between mt-3">
            <div className="flex gap-10 items-center">
              <div className="flex flex-col">
                <span className="text-xs font-medium text-primary">
                  {getColumnValue(row, "numberOfSchools")}
                </span>
                <small className="text-secondary-foreground text-xs font-medium">
                  Schools
                </small>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-primary">
                  {getColumnValue(row, "numberOfTeams")}
                </span>
                <small className="text-secondary-foreground text-xs font-medium">
                  Teams
                </small>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-primary">
                {getColumnValue(row, "coordinatorName")}
              </span>
              <small className="text-secondary-foreground text-xs font-medium">
                coordinator
              </small>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FeedbackCard;
