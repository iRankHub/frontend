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
    picture: string | undefined;
    token: string;
    status: 'idle' | 'signOut' | 'signIn';
    requiredPasswordReset: boolean;
    requireTwoFactor: boolean;
}

// Internal interface that includes tokenExpiresAt
interface InternalAuthStateUser extends AuthStateUser {
    tokenExpiresAt: number;
}

// Define user store state interface
interface AuthState {
    user: InternalAuthStateUser | null;
    userRole: Roles | null;
    isLoading: boolean;
    login: (user: AuthStateUser, role: Roles) => void;
    logout: () => void;
    setIsLoading: (isLoading: boolean) => void;
    updateUser: (updatedUser: Partial<AuthStateUser>) => void; 
    updateProfilePicture: (newPicture: string | undefined) => void; 
    updateUsername: (name: string) => void;
    deleteToken: () => void;
    isTokenValid: () => boolean;
}

// Define persist options
type UserPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

// Helper function to calculate token expiration
const calculateTokenExpiration = () => Math.floor(Date.now() / 1000) + 5 * 24 * 3600; // 5 days in seconds
// User store
export const useUserStore = create<AuthState>(
    (persist as UserPersist)(
        (set, get) => ({
            user: null,
            userRole: null,
            isLoading: true,
            login: (user, role) => set({ 
                user: { 
                    ...user, 
                    tokenExpiresAt: calculateTokenExpiration()
                }, 
                userRole: role 
            }),
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
            })),
            updateProfilePicture: (newPicture) => set((state) => ({
                user: state.user && state.user.picture !== null && newPicture ? {...state.user, picture: newPicture} : null,
            })),
            deleteToken: () => set((state) => ({
                user: state.user ? { ...state.user, token: '', tokenExpiresAt: 0 } : null
            })),
            isTokenValid: () => {
                const { user } = get();
                if (!user) return false;
                return Math.floor(Date.now() / 1000) < user.tokenExpiresAt;
            },
        }),
        {
            name: 'user-store',
        }
    )
);