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
    name: string;
    token: string;
    status: 'idle' | 'signOut' | 'signIn';
    requiredPasswordReset: boolean;
    requireTwoFactor: boolean;
}

// Define user store state interface
interface AuthState {
    user: AuthStateUser | null;
    userRole: Roles | null;
    isLoading: boolean;
    login: (user: AuthStateUser, role: Roles) => void;
    logout: () => void;
    setIsLoading: (isLoading: boolean) => void;
    updateUser: (updatedUser: Partial<AuthStateUser>) => void; 
    updateUsername: (name: string) => void;
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
            logout: () => {
                set({ user: null, userRole: null });
                localStorage.setItem('theme', 'light');
            },
            setIsLoading: (isLoading) => set({ isLoading }),
            updateUser: (updatedUser) => set((state) => ({
                user: state.user ? { ...state.user, ...updatedUser } : null
            })),
            updateUsername: (name) => set((state) => ({
                user: state.user ? {...state.user, name} : null,
            }))
        }),
        {
            name: 'user-store',
        }
    )
);