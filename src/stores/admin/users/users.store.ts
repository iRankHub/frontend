import { School, UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { create } from "zustand";

interface UsersStore {
    users: UserSummary.AsObject[];
    setUsers: (users: UserSummary.AsObject[]) => void;
    deleteUser: (userID: number) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
    users: [],
    setUsers: (users: UserSummary.AsObject[]) => set({ users }),
    createUser: (user: UserSummary.AsObject) => {
        set((state: UsersStore) => {
            return { users: [...state.users, user] };
        });
    },
    deleteUser: (userID: number) => {
        set((state: UsersStore) => {
            const newUsers = state.users.filter((user) => user.userid !== userID);
            return { users: newUsers };
        });
    },
}));