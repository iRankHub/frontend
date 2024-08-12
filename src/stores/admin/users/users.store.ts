import { School } from "@/lib/grpc/proto/user_management/users_pb";
import { create } from "zustand";

interface UsersStore {
    users: School.AsObject[];
    setUsers: (users: School.AsObject[]) => void;
    deleteUser: (userID: number) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
    users: [],
    setUsers: (users: School.AsObject[]) => set({ users }),
    createUser: (user: School.AsObject) => {
        set((state: UsersStore) => {
            return { users: [...state.users, user] };
        });
    },
    deleteUser: (userID: number) => {
        set((state: UsersStore) => {
            const newUsers = state.users.filter((user) => user.schoolid !== userID);
            return { users: newUsers };
        });
    },
}));