import { Room, RoomStatus } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface RoomsStore {
    rooms: RoomStatus.AsObject[];
    setRooms: (rooms: RoomStatus.AsObject[]) => void;
    updateRoom: (roomId: number, newRoom: Room.AsObject) => void;
    addRoom: (room: RoomStatus.AsObject) => void;
    deleteRoom: (RoomId: number) => void;
}

export const useRoomsStore = create<RoomsStore>((set) => ({
    rooms: [],
    setRooms: (rooms: RoomStatus.AsObject[]) => set({ rooms }),
    updateRoom: (roomId: number, newRoom: Room.AsObject) => {
        set((state: RoomsStore) => {
            const newRooms = state.rooms.map((room) => {
                if (room.roomId === roomId) {
                    return {
                        ...room,
                        ...newRoom,
                    }
                }
                return room;
            });
            return { rooms: newRooms };
        });
    },
    addRoom: (room: RoomStatus.AsObject) => {
        set((state: RoomsStore) => {
            const newrooms = [...state.rooms, room];
            return { rooms: newrooms };
        });
    },
    deleteRoom: (roomID: number) => {
        set((state: RoomsStore) => {
            const newrooms = state.rooms.filter((room) => room.roomId !== roomID);
            return { rooms: newrooms };
        });
    },
}));