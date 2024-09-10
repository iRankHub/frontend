"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SidePanel, {
  Panelheader,
} from "@/components/layout/admin-panel/side-panel";
import { Input } from "@/components/ui/input";
import { DataTableColumnHeader } from "@/components/tables/data-table-column-header";
import {
  GetRoomResponse,
  Room,
  RoomStatus,
} from "@/lib/grpc/proto/debate_management/debate_pb";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/auth/auth.store";
import { getRoom, updateTournamentRoom } from "@/core/debates/rooms";
import { GetTournamentRoomProps, UpdateRoomProps } from "@/types/pairings";
import { useParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useRoomsStore } from "@/stores/admin/debate/rooms.store";

export const columns: ColumnDef<RoomStatus.AsObject>[] = [
  // {
  //   accessorKey: "roomId",
  //   header: () => null,
  //   cell: () => null,
  //   enableHiding: false,
  //   enableSorting: false,
  // },
  {
    accessorKey: "roomName",
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
            {row.getValue("roomName")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "preliminary",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preliminary"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue("preliminary");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
          <Badge
            variant="default"
            className={cn(
              `bg-green-200 hover:bg-green-200 text-success capitalize rounded-md`,
              variant
            )}
          >
            {row.getValue("preliminary")}
          </Badge>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
  {
    accessorKey: "elimination",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Elimination"
        className="justify-center"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue("elimination");
      const variant =
        value === "occupied"
          ? "bg-green-200 text-success"
          : "bg-secondary text-foreground hover:bg-secondary";
      return (
        <div className="w-full pr-5 text-center">
          <Badge variant="default" className={cn("rounded-md", variant)}>
            {row.getValue("elimination")}
          </Badge>
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
      return (
        <div className="w-full text-center">
          <Sheet modal>
            <SheetTrigger>
              <Button
                type="button"
                variant={"secondary"}
                size={"icon"}
                className="bg-transparent w-6 h-6 p-1 m-0"
              >
                <Icons.view className="w-4 h-4 text-info" />
              </Button>
            </SheetTrigger>
            <UpdateAndViewRoom
              roomId={Number(row.original.roomId)}
              isView={true}
            />
          </Sheet>
          <Sheet>
            <SheetTrigger>
              <Button
                type="button"
                variant={"secondary"}
                size={"icon"}
                className="bg-transparent w-6 h-6 p-1 m-0"
              >
                <Icons.pencilLine className="w-4 h-4 text-primary" />
              </Button>
            </SheetTrigger>
            <UpdateAndViewRoom
              roomId={Number(row.getValue("roomId"))}
              isView={false}
            />
          </Sheet>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
];

const UpdateAndViewRoom = ({
  roomId,
  isView,
}: {
  roomId: number;
  isView: boolean;
}) => {
  const [room, setRoom] = useState<GetRoomResponse.AsObject>();
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useUserStore((state) => state);
  const [roomName, setRoomName] = useState<string>("");
  const params = useParams<{ name: string }>();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const { toast } = useToast();
  const { updateRoom: updateTournRoom } = useRoomsStore((state) => state);

  useEffect(() => {
    if (!roomId || !user) return;
    // fetch room details
    const tourn_id = Number(params.name);
    const options: GetTournamentRoomProps = {
      token: user.token,
      tournament_id: tourn_id,
      room_id: roomId,
    };
    getRoom(options)
      .then((res) => {
        setRoom(res);
        setRoomName(res.name);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [roomId, user, params.name]);

  const updateRoom = () => {
    // update room details
    if (!user) return;
    if (roomName === "") {
      toast({
        title: "Error",
        description: "Room name cannot be empty",
        variant: "destructive",
      });
      return;
    }

    if (roomName === room?.name) {
      toast({
        title: "Error",
        description: "No changes made",
        variant: "destructive",
      });
      return;
    }

    const options: UpdateRoomProps = {
      token: user.token,
      name: roomName,
      room_id: roomId,
    };

    setIsUpdate(true);
    updateTournamentRoom(options)
      .then((res) => {
        if (!room) return;
        updateTournRoom(room.roomId, res.room as Room.AsObject);
        toast({
          title: "Success",
          description: "Room updated successfully",
          variant: "success",
        });
      })
      .catch((err) => {
        console.error(err.message);
        toast({
          title: "Error",
          description: "Failed to update room",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsUpdate(false);
      });
  };
  return (
    <SidePanel>
      {!loading && room && (
        <>
          <Panelheader>
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold capitalize">{room.name}</h3>
              {!isView && (
                <Button
                  type="button"
                  className="rounded-full m-0 p-0 w-6 h-6 hover:bg-primary"
                  size={"icon"}
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <Icons.pencilLine className="w-4 h-4" />
                </Button>
              )}
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
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-100"
                  disabled={!isEdit || isView === true}
                />
              </div>
              <h3 className="uppercase text-xs my-5 text-muted-foreground font-semibold">
                preliminary
              </h3>
              <div className="flex items-center gap-8 flex-wrap">
                {room.preliminaryList.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      Round {item.round}
                    </span>
                    <Badge
                      className={cn(
                        "bg-secondary text-foreground hover:bg-secondary rounded-md text-xs",
                        item.status === "occupied"
                          ? "bg-green-200 text-success"
                          : ""
                      )}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <h3 className="uppercase text-xs mb-2 text-muted-foreground font-semibold mt-5">
                Elimination
              </h3>
              <div className="flex items-center gap-8 flex-wrap">
                {room.eliminationList.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      Round {item.round}
                    </span>
                    <Badge
                      className={cn(
                        "bg-secondary text-foreground hover:bg-secondary rounded-md text-xs",
                        item.status === "occupied"
                          ? "bg-green-200 text-success"
                          : ""
                      )}
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            {isEdit && isView === false && (
              <div className="flex items-center justify-end ga-3">
                <Button
                  variant={"default"}
                  size={"sm"}
                  className="hover:bg-primary"
                  onClick={updateRoom}
                >
                  Save Changes
                  {isUpdate && (
                    <Icons.spinner
                      className="ml-2 h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                  )}
                  <span className="sr-only">Save Changes</span>
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </SidePanel>
  );
};
