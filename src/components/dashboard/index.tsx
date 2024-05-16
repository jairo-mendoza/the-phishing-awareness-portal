import { useUserStore } from '@/utils/userStore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    return (
        <div>
            <h1>The Phishing Awareness Portal</h1>
            <p>
                Welcome {user?.firstName} {user?.lastName}
            </p>

            <button onClick={() => navigate('/training')}>Go to Training</button>
            <button onClick={() => navigate('/forum')}>Go to Forum</button>
        </div>
    );
};

export default Dashboard;
