import { Room } from "@/lib/grpc/proto/debate_management/debate_pb";
import { create } from "zustand";

interface RoomsStore {
    rooms: Room.AsObject[];
    setRooms: (rooms: Room.AsObject[]) => void;
    updateRoomStatus: (roomID: number, newStatus: string) => void;
    deleteRoom: (roomID: number) => void;
}

export const useRoomsStore = create<RoomsStore>((set) => ({
    rooms: [],
    setRooms: (rooms: Room.AsObject[]) => set({ rooms }),
    updateRoomStatus: (roomID: number, newStatus: string) => {
        set((state: RoomsStore) => {
            const newRooms = state.rooms.map((room) => {
                if (room.roomId === roomID) {
                    return { ...room, status: newStatus };
                }
                return room;
            });
            return { rooms: newRooms };
        });
    },
    deleteRoom: (roomID: number) => {
        set((state: RoomsStore) => {
            const newRooms = state.rooms.filter((room) => room.roomId !== roomID);
            return { rooms: newRooms };
        });
    },
}));