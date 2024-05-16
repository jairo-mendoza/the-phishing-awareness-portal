import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@/utils/userStore';

export const PrivateRoute = () => {
    const user = useUserStore((state) => state.user);
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};
