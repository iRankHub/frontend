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
} from "@/lib/grpc/proto/debate_management/debate_pb";
import {
  GetTournamentJudgeProps,
  GetTournamentRoomsProps,
} from "@/types/pairings";
import { useUserStore } from "@/stores/auth/auth.store";
import { getTournamentJudge, updateTournamentJudge } from "@/core/debates/judges";
import { useParams } from "next/navigation";
import { getTournamentRooms } from "@/core/debates/rooms";

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
  roomInfo: [number, RoomInfo.AsObject];
}

const RoomAssignmentPanel = ({ row }: { row: Judge.AsObject }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [judge, setJudge] = useState<GetJudgeResponse.AsObject>();
  const [isGettingJudge, setIsGettingJudge] = useState(false);
  const [rooms, setRooms] = useState<RoomInfo.AsObject[]>([]);
  const { user } = useUserStore((state) => state);
  const param = useParams();
  const tournament_id = param.name;

  useEffect(() => {
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
        console.error(err.message);
      })
      .finally(() => {
        setIsGettingJudge(false);
      });

    const roomsOptions: GetTournamentRoomsProps = {
      token: user.token,
      tournament_id: Number(tournament_id),
    };
    getTournamentRooms(roomsOptions)
      .then((res) => {
        setRooms(res);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [row.judgeId, user, tournament_id]);

  const RoundRooms: React.FC<RoundRoomsProps> = ({ roomInfo }) => {
    const [open, setOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<string>(roomInfo[1].roomName || "");

    const handleRoomSelect = (roomId: string) => {
      setSelectedRoom(roomId);
      setOpen(false);
      // Update the judge state with the new room selection
      setJudge(prevJudge => {
        if (!prevJudge) return prevJudge;
        const updatedJudge = { ...prevJudge };
        const roundType = roomInfo[0] <= prevJudge.preliminaryMap.length ? 'preliminaryMap' : 'eliminationMap';
        const roundIndex = roomInfo[0] - (roundType === 'eliminationMap' ? prevJudge.preliminaryMap.length : 0) - 1;
        
        updatedJudge[roundType] = updatedJudge[roundType].map((round, index) => 
          index === roundIndex ? [round[0], { ...round[1], roomName: rooms.find(r => r.roomId === Number(roomId))?.roomName || "" }] : round
        );
        
        return updatedJudge;
      });
    };

    return (
      <Popover open={open} onOpenChange={setOpen} modal>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[150px] justify-between disabled:opacity-100"
            disabled={!isEditing}
          >
            {selectedRoom || "Select room..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandList>
              <CommandEmpty>No room found.</CommandEmpty>
              <CommandGroup className="w-[150px]">
                {rooms.map((room) => (
                  <CommandItem
                    key={room.roomId}
                    value={String(room.roomId)}
                    onSelect={(currentValue) => {
                      handleRoomSelect(currentValue === selectedRoom ? "" : currentValue);
                    }}
                    className="w-full"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedRoom === String(room.roomId) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {room.roomName}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  };

  const renderRounds = (roundType: "preliminaryMap" | "eliminationMap") => {
    if (!judge) return null;
    return judge[roundType].map((round, index) => (
      <div key={index} className="flex flex-col gap-3">
        <span className="text-sm font-medium text-foreground">
          {roundType === "preliminaryMap"
            ? `Round ${index + 1}`
            : `${getEliminationRoundName(index + 1)}`}
        </span>
        <RoundRooms roomInfo={[index + 1, round[1]]} />
      </div>
    ));
  };

  const getEliminationRoundName = (index: number): string => {
    const names = ["Quarter Finals", "Semi Finals", "Finals"];
    return names[index - 1] || `Round ${index}`;
  };

  const updateJudge = async () => {
    if (!user || !judge) return;

    const preliminary: Record<string, { room_id: number }> = {};
    const elimination: Record<string, { room_id: number }> = {};

    // Populate preliminary rounds
    judge.preliminaryMap.forEach((round, index) => {
      const roomId = rooms.find(
        (room) => room.roomName === round[1].roomName
      )?.roomId;
      if (roomId) {
        preliminary[String(index + 1)] = { room_id: roomId };
      }
    });

    // Populate elimination rounds
    judge.eliminationMap.forEach((round, index) => {
      const roomId = rooms.find(
        (room) => room.roomName === round[1].roomName
      )?.roomId;
      if (roomId) {
        elimination[String(index + 1)] = { room_id: roomId };
      }
    });

    const updateData = {
      judge_id: row.judgeId,
      tournament_id: Number(tournament_id),
      preliminary,
      elimination,
      token: user.token,
    };

    try {
      console.log("updateData", updateData);

      await updateTournamentJudge(updateData as any)
        .then((res) => {
          console.log("res", res);
          refreshJudgeData();
          setIsEditing(false);
        })
        .catch((err) => {
          console.error(err.message);
        });
      
    } catch (error) {
      console.error("Error updating judge:", error);
    }
  };

  // Add this function to refresh judge data after update
  const refreshJudgeData = () => {
    if (!user) return;
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
        console.error(err.message);
      });
  };

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
              {/* <Button
                type="button"
                className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                size="icon"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Icons.pencilLine className="w-4 h-4" />
              </Button> */}
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
              {judge?.preliminaryMap &&
                Object.keys(judge.preliminaryMap).length > 0 && (
                  <>
                    <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold">
                      Preliminary
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      {renderRounds("preliminaryMap")}
                    </div>
                  </>
                )}
              {judge?.eliminationMap &&
                Object.keys(judge.eliminationMap).length > 0 && (
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
