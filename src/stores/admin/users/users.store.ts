import { UserSummary } from "@/lib/grpc/proto/user_management/users_pb";
import { create } from "zustand";

interface PaginationState {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}

interface UsersStore {
  users: UserSummary.AsObject[];
  pagination: PaginationState;
  setUsers: (users: UserSummary.AsObject[]) => void;
  createUser: (user: UserSummary.AsObject) => void;
  addUser: (user: UserSummary.AsObject) => void;
  updateUserStatus: (userId: number, new_status: string) => void;
  deleteUser: (userID: number) => void;
  setPagination: (pagination: Partial<PaginationState>) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  users: [],
  pagination: {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 0,
  },
  setUsers: (users: UserSummary.AsObject[]) => set({ users }),
  createUser: (user: UserSummary.AsObject) => {
    set((state: UsersStore) => {
      return { users: [...state.users, user] };
    });
  },
  addUser: (user: UserSummary.AsObject) => {
    set((state: UsersStore) => {
      return { users: [...state.users, user] };
    });
  },
  updateUserStatus: (userId: number, status: string) => {
    set((state: UsersStore) => {
      const newUsers = state.users.map((u) => {
        if (u.userid === userId) {
          return { ...u, status };
        }
        return u;
      });
      return { users: newUsers };
    });
  },
  deleteUser: (userID: number) => {
    set((state: UsersStore) => {
      const newUsers = state.users.filter((user) => user.userid !== userID);
      return { users: newUsers };
    });
  },
  setPagination: (pagination: Partial<PaginationState>) => {
    set((state) => ({
      pagination: { ...state.pagination, ...pagination },
    }));
  },
}));