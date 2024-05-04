import { useUserStore } from '@/utils/userStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    // TODO: Redirect to login page if user is not logged in
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Welcome {user?.firstName} {user?.lastName}
            </p>

            <button onClick={() => navigate('/forum')}>Go to Forum</button>
        </div>
    );
};

export default Dashboard;
