/* State management for user */
import { AuthUser } from '@/features/user-auth';
import create from 'zustand';

interface UserState {
    user: AuthUser | null;
    setUser: (user: AuthUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
