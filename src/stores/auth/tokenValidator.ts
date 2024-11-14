import { useUserStore } from './auth.store';

export const validateToken = (): boolean => {
    const { user, isTokenValid } = useUserStore.getState();
    return !!user && isTokenValid();
};

export const handleInvalidToken = () => {
    const { deleteToken, logout } = useUserStore.getState();
    deleteToken();
    logout();
    
    window.location.href = '/auth/select';
};