import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

// Define user roles
export enum Roles {
    ADMIN = 'admin',
    SCHOOL = 'school',
    STUDENT = 'student',
    VOLUNTEER = 'volunteer',
}

export interface AuthStateUser {
    userId: number;
    token: string;
    status: 'idle' | 'signOut' | 'signIn';
    requiredPasswordReset: boolean;
    requireTwoFactor: boolean;
}

// Define user store state interface
interface AuthState {
    user: AuthStateUser | null;
    userRole: Roles | null;
    isLoading: boolean,
    login: (user: AuthStateUser, role: Roles) => void;
    logout: () => void;
    setIsLoading: (isLoading: boolean) => void;
}

// Define persist options
type UserPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

// User store
export const useUserStore = create<AuthState>(
    (persist as UserPersist)(
        (set) => ({
            user: null,
            userRole: null,
            isLoading: true,
            login: (user, role) => set({ user, userRole: role }),
            logout: () => set({ user: null, userRole: null }),
            setIsLoading: (isLoading) => set({ isLoading }),
        }),
        {
            name: 'user-store',
        }
    )
);