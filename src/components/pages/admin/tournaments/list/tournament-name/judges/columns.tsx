"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Check, ChevronsUpDown, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverContentWithNoPrimitivePortal,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  GetJudgeResponse,
  Judge,
  RoomInfo,
  RoomStatus,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import {
  GetTournamentJudgeProps,
  GetTournamentRoomsProps,
} from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import {
  getTournamentJudge,
  updateTournamentJudge,
} from "@/core/debates/judges";
import { useParams } from "next/navigation";
import { getTournamentRooms } from "@/core/debates/rooms";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

export const columns: ColumnDef<Judge.AsObject>[] = [
  {
    accessorKey: "idebateId",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="iDebate ID"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("idebateId")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Names"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="max-w-[200px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminaryDebates",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-10 text-center">
          <span className="text-sm">
            {row.getValue("preliminaryDebates") === 0
              ? "None"
              : row.getValue("preliminaryDebates")}
          </span>
        </div>
      );
    },
    filterFn: (row, columnId, filterValue: string) => {
      let value = row.getValue(columnId) as string;
      if (typeof value === "number") value = String(value);
      return value?.toLowerCase().includes(filterValue);
    },
    enableHiding: false,
  },
  {
    accessorKey: "eliminationDebates",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="w-full pr-5 text-center">
          <span className="text-sm">
            {row.getValue("eliminationDebates") === 0
              ? "None"
              : row.getValue("eliminationDebates")}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "action",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Actions"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      return <RoomAssignmentPanel row={row.original} />;
    },
    enableHiding: false,
    enableSorting: false,
  },
];

interface RoundRoomsProps {
  roundType: "preliminaryMap" | "eliminationMap";
  roundIndex: number;
  currentRoom: string;
  onRoomSelect: (roomId: string) => void;
  isEditing: boolean;
  rooms: RoomStatus.AsObject[];
}

const RoomAssignmentPanel = ({ row }: { row: Judge.AsObject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [judge, setJudge] = useState<GetJudgeResponse.AsObject | null>(null);
  const [isGettingJudge, setIsGettingJudge] = useState(false);
  const [rooms, setRooms] = useState<RoomStatus.AsObject[]>([]);
  // const [, ] = useState<RoomStatus.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const param = useParams();
  const tournament_id = param.name;
  const { toast } = useToast();

  useEffect(() => {
    if (!user) return;
    fetchJudgeData();
    fetchRoomsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row.judgeId, user, tournament_id]);

  const fetchJudgeData = () => {
    if (!user) return;
    setIsGettingJudge(true);
    const options: GetTournamentJudgeProps = {
      token: user.token,
      judge_id: row.judgeId,
      tournament_id: Number(tournament_id),
    };
    getTournamentJudge(options)
      .then((res) => {
        setJudge(res);
      })
      .catch((err) => {
        console.error("Error fetching judge data:", err.message);
        setJudge(null);
      })
      .finally(() => {
        setIsGettingJudge(false);
      });
  };

  const fetchRoomsData = () => {
    if (!user) return;
    const roomsOptions: GetTournamentRoomsProps = {
      token: user.token,
      tournament_id: Number(tournament_id),
    };
    getTournamentRooms(roomsOptions)
      .then((res) => {
        setRooms(res);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err.message);
        setRooms([]);
      });
  };

  const RoundRooms: React.FC<RoundRoomsProps> = ({
    roundType,
    roundIndex,
    currentRoom,
    onRoomSelect,
    isEditing,
    rooms,
  }) => {
    const [open, setOpen] = useState(false);

    const handleRoomSelect = (roomId: string) => {
      onRoomSelect(roomId);
      setOpen(false);
    };

    // console.log("RoundRooms props:", {
    //   roundType,
    //   roundIndex,
    //   currentRoom,
    //   isEditing,
    //   rooms,
    // });

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[150px] justify-between"
            disabled={!isEditing}
          >
            {currentRoom || "Select room..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContentWithNoPrimitivePortal className="w-[200px] p-0">
          <Command>
            {Array.isArray(rooms) && rooms.length > 0 ? (
              <CommandList>
                <CommandGroup>
                  {rooms.map((room) => (
                    <CommandItem
                      key={room.roomId}
                      value={String(room.roomId)}
                      onSelect={() => handleRoomSelect(String(room.roomId))}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          currentRoom === room.roomName
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {room.roomName}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            ) : (
              <CommandEmpty>No room found.</CommandEmpty>
            )}
          </Command>
        </PopoverContentWithNoPrimitivePortal>
      </Popover>
    );
  };

  const renderRounds = (roundType: "preliminaryMap" | "eliminationMap") => {
    if (!judge || !Array.isArray(judge[roundType])) {
      console.log(`No ${roundType} data available`);
      return null;
    }

    return judge[roundType]
      .map((round, index) => {
        if (!Array.isArray(round) || round.length < 2 || !round[1]) {
          console.log(`Invalid round data at index ${index}:`, round);
          return null;
        }

        // console.log(`Rendering ${roundType} round ${index + 1}:`, round);

        return (
          <div key={index} className="flex flex-col gap-3">
            <span className="text-sm font-medium text-foreground">
              {roundType === "preliminaryMap"
                ? `Round ${index + 1}`
                : `${getEliminationRoundName(index + 1)}`}
            </span>
            <RoundRooms
              roundType={roundType}
              roundIndex={index}
              currentRoom={round[1].roomName || ""}
              onRoomSelect={(roomId) =>
                handleRoomSelect(roundType, index, roomId)
              }
              isEditing={isEditing}
              rooms={rooms}
            />
          </div>
        );
      })
      .filter(Boolean);
  };

  const handleRoomSelect = (
    roundType: "preliminaryMap" | "eliminationMap",
    roundIndex: number,
    roomId: string
  ) => {
    setJudge((prevJudge) => {
      if (!prevJudge || !Array.isArray(prevJudge[roundType])) return prevJudge;
      const updatedJudge = { ...prevJudge };
      const selectedRoom = rooms.find((r) => r.roomId === Number(roomId));
      if (Array.isArray(updatedJudge[roundType])) {
        updatedJudge[roundType] = updatedJudge[roundType].map((round, index) =>
          index === roundIndex && Array.isArray(round) && round.length >= 2
            ? [
                round[0],
                { ...round[1], roomName: selectedRoom?.roomName || "" },
              ]
            : round
        );
      }
      return updatedJudge;
    });
  };

  const getEliminationRoundName = (index: number): string => {
    const names = ["Quarter Finals", "Semi Finals", "Finals"];
    return names[index - 1] || `Round ${index}`;
  };

  const updateJudge = async () => {
    if (!user || !judge) return;

    const preliminary: Record<string, { roomId: number; roomName: string }> =
      {};
    const elimination: Record<string, { roomId: number; roomName: string }> =
      {};

    const updateRounds = (roundType: "preliminaryMap" | "eliminationMap") => {
      if (Array.isArray(judge[roundType])) {
        judge[roundType].forEach((round, index) => {
          if (Array.isArray(round) && round.length >= 2 && round[1]) {
            const roomId = rooms.find(
              (room) => room.roomName === round[1].roomName
            )?.roomId;
            const roomName = rooms.find(
              (room) => room.roomName === round[1].roomName
            )?.roomName;
            if (roomId) {
              (roundType === "preliminaryMap" ? preliminary : elimination)[
                String(index + 1)
              ] = { roomId: roomId, roomName: roomName ?? "" };
            }
          }
        });
      }
    };

    updateRounds("preliminaryMap");
    updateRounds("eliminationMap");

    const updateData = {
      judge_id: row.judgeId,
      tournament_id: Number(tournament_id),
      preliminary,
      elimination,
      token: user.token,
    };

    // console.log("updateData", updateData);
    await updateTournamentJudge(updateData as any)
      .then((res) => {
        fetchJudgeData();
        toast({
          variant: "success",
          title: "Success",
          description:
            "Your account is pending approval. You will be notified once your account is approved.",
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
        setIsEditing(false);
      })
      .catch((err) => {
        console.error("Error updating judge:", err);
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message,
          action: (
            <ToastAction altText="Close" className="bg-primary text-white">
              Close
            </ToastAction>
          ),
        });
      });
  };

  if (isGettingJudge) {
    return <div>Loading judge data...</div>;
  }

  if (!judge) {
    return <div>No judge data available.</div>;
  }

  return (
    <div className="w-full text-center">
      <Sheet>
        <SheetTrigger>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="bg-transparent w-6 h-6 p-1 m-0"
          >
            <Icons.pencilLine className="w-4 h-4 text-primary" />
          </Button>
        </SheetTrigger>
        <SidePanel>
          <Panelheader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">{row.name}</h3>
              <Button
                type="button"
                className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Icons.pencilLine className="w-4 h-4" />
              </Button>
            </div>
          </Panelheader>
          <div className="w-full h-[calc(100%_-_70px)] p-5 flex flex-col">
            <div className="w-full flex-1">
              <div className="w-full mb-3">
                <span className="text-sm text-foreground font-medium">
                  Name
                </span>
                <Input
                  placeholder="room name"
                  value={row.name}
                  className="text-foreground placeholder:text-muted-foreground disabled:opacity-100 disabled:cursor-default"
                  disabled={true}
                />
              </div>
              {judge.preliminaryMap && judge.preliminaryMap.length > 0 && (
                <>
                  <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold">
                    Preliminary
                  </h3>
                  <div className="flex items-center gap-4 flex-wrap">
                    {renderRounds("preliminaryMap")}
                  </div>
                </>
              )}
              {judge.eliminationMap && judge.eliminationMap.length > 0 && (
                <>
                  <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold mt-5">
                    Elimination
                  </h3>
                  <div className="flex items-center justify-between gap-3">
                    {renderRounds("eliminationMap")}
                  </div>
                </>
              )}
            </div>
            {isEditing && (
              <div className="flex items-center justify-end ga-3">
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-primary"
                  onClick={updateJudge}
                >
                  Save Changes
                  <span className="sr-only">Save Changes</span>
                </Button>
              </div>
            )}
          </div>
        </SidePanel>
      </Sheet>
    </div>
  );
};
