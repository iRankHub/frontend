import React from "react";
import Image from "next/image";
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
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TournamentCardProps {
  row: any;
  getColumnValue: (row: any, columnId: string) => string;
  setTournaments: React.Dispatch<React.SetStateAction<Tournament.AsObject[]>>;
}

const TournamentCard = ({
  row,
  getColumnValue,
  setTournaments,
}: TournamentCardProps) => {
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
      case "admin":
        return "/admin/tournaments/list";
      case "school":
        return "/schools/tournaments";
      case "student":
        return "/students/tournaments";
      default:
        return "/volunteers/tournaments";
    }
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${month}/${day}`;
  };

  const tournament = row.original as Tournament.AsObject;
  return (
    <Card key={row.id} className="p-3">
      <div className="flex justify-between items-start">
        <div className="flex-1 flex flex-col md:flex-row gap-2">
          {tournament.imageUrl ? (
            <div className="relative w-full md:w-20 h-24 md:h-16 rounded overflow-hidden">
              <Image
                src={tournament.imageUrl}
                alt={tournament.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative md:w-20 h-24 md:h-16 rounded overflow-hidden">
              <Image
                src="/static/images/mic-speech.jpg"
                alt="placeholder image"
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="line-clamp-1 text-sm font-medium mb-1 text-start">
                    {getColumnValue(row, "name")}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{getColumnValue(row, "name")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="text-xs">
                <div className="text-muted-foreground">Venue</div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="line-clamp-1 text-secondary-foreground text-xs font-medium text-start">
                      {getColumnValue(row, "location")}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{getColumnValue(row, "location")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="hidden mt-1">
                  <div className="text-muted-foreground">Date</div>
                  <div className="text-secondary-foreground font-medium">
                    {formatDate(getColumnValue(row, "startDate"))} -{" "}
                    {formatDate(getColumnValue(row, "endDate"))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <DropdownMenu>
                <DropdownMenuTrigger className="md:hidden">
                  <Button
                    type="button"
                    size="sm"
                    className="gap-2 text-sm font-semibold p-0 w-6 h-6 bg-transparent hover:bg-transparent hover:text-foreground group"
                  >
                    <Icons.ellipsisVertical className="text-muted-foreground w-4 h-4 group-hover:text-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="p-0">
                    <Button
                      type="button"
                      size="sm"
                      variant="link"
                      className="w-full justify-start text-foreground hover:no-underline"
                    >
                      <Link
                        className="no-underline"
                        href={`${linkRole()}/${getColumnValue(
                          row,
                          "tournamentId"
                        )}`}
                      >
                        Go To Tournament
                      </Link>
                    </Button>
                  </DropdownMenuItem>
                  {userRole === "admin" && (
                    <DropdownMenuItem className="p-0">
                      <Button
                        type="button"
                        size="sm"
                        variant="link"
                        className="w-full justify-start text-foreground hover:no-underline"
                      >
                        <Link
                          className="no-underline"
                          href={`${linkRole()}/${getColumnValue(
                            row,
                            "tournamentId"
                          )}/logistics/billings`}
                        >
                          Billings
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                  )}
                  {(userRole === "student" || userRole === "volunteer") && (
                    <DropdownMenuItem className="p-0">
                      <Button
                        type="button"
                        size="sm"
                        variant="link"
                        className="w-full justify-start text-foreground hover:no-underline"
                      >
                        <Link
                          className="no-underline"
                          href={`${linkRole()}/${getColumnValue(
                            row,
                            "tournamentId"
                          )}/feedback`}
                        >
                          Feedback
                        </Link>
                      </Button>
                    </DropdownMenuItem>
                  )}
                  {userRole === "admin" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onSelect={() => setDialogOpen(true)}
                        className="text-destructive focus:text-destructive"
                      >
                        Delete
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="md:hidden">
                <div className="text-muted-foreground text-end text-xs">Date</div>
                <div className="text-secondary-foreground font-medium text-xs">
                  {formatDate(getColumnValue(row, "startDate"))} -{" "}
                  {formatDate(getColumnValue(row, "endDate"))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden md:block">
              <Button
                type="button"
                size="sm"
                className="gap-2 text-sm font-semibold p-0 w-6 h-6 bg-transparent hover:bg-transparent hover:text-foreground group"
              >
                <Icons.ellipsisVertical className="text-muted-foreground w-4 h-4 group-hover:text-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="p-0">
                <Button
                  type="button"
                  size="sm"
                  variant="link"
                  className="w-full justify-start text-foreground hover:no-underline"
                >
                  <Link
                    className="no-underline"
                    href={`${linkRole()}/${getColumnValue(
                      row,
                      "tournamentId"
                    )}`}
                  >
                    Go To Tournament
                  </Link>
                </Button>
              </DropdownMenuItem>
              {userRole === "admin" && (
                <DropdownMenuItem className="p-0">
                  <Button
                    type="button"
                    size="sm"
                    variant="link"
                    className="w-full justify-start text-foreground hover:no-underline"
                  >
                    <Link
                      className="no-underline"
                      href={`${linkRole()}/${getColumnValue(
                        row,
                        "tournamentId"
                      )}/logistics/billings`}
                    >
                      Billings
                    </Link>
                  </Button>
                </DropdownMenuItem>
              )}
              {(userRole === "student" || userRole === "volunteer") && (
                <DropdownMenuItem className="p-0">
                  <Button
                    type="button"
                    size="sm"
                    variant="link"
                    className="w-full justify-start text-foreground hover:no-underline"
                  >
                    <Link
                      className="no-underline"
                      href={`${linkRole()}/${getColumnValue(
                        row,
                        "tournamentId"
                      )}/feedback`}
                    >
                      Feedback
                    </Link>
                  </Button>
                </DropdownMenuItem>
              )}
              {userRole === "admin" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={() => setDialogOpen(true)}
                    className="text-destructive focus:text-destructive"
                  >
                    Delete
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:block text-xs w-full">
            <div className="text-muted-foreground">Date</div>
            <div className="text-secondary-foreground font-medium">
              {formatDate(getColumnValue(row, "startDate"))} -{" "}
              {formatDate(getColumnValue(row, "endDate"))}
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-3" />
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
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
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium text-primary">
            {getColumnValue(row, "coordinatorName")}
          </span>
          <small className="text-secondary-foreground text-xs font-medium">
            Coordinator
          </small>
        </div>
      </div>
      {userRole === "admin" && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen} modal>
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
                type="button"
                size="sm"
                variant="outline"
                className="max-w-32"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="destructive"
                className="max-w-32"
                onClick={() =>
                  handleDeleteTournament(getColumnValue(row, "tournamentId"))
                }
              >
                Delete
                {deleteLoading && (
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
      )}
    </Card>
  );
};

export default TournamentCard;
