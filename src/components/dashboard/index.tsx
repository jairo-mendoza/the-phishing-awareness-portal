import { useUserStore } from '@/utils/userStore';
import { useNavigate } from 'react-router-dom';

import Stack from 'react-bootstrap/Stack';
import { styled } from 'styled-components';

const NavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    min-width: 200px;
    min-height: 75px;
    text-align: center;
`;

const Dashboard = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    return (
        <div>
            <h1>The Phishing Awareness Portal</h1>
            <p>
                Welcome {user?.firstName} {user?.lastName}
            </p>

            <Stack
                direction="vertical"
                gap={3}
                style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
                <NavButton onClick={() => navigate('/training')}>
                    <span style={{ fontSize: '40px' }}>⚔️</span> TRAIN
                </NavButton>

                <NavButton onClick={() => navigate('/forum')}>
                    <span style={{ fontSize: '40px' }}>🗣️</span> FORUM
                </NavButton>
            </Stack>
        </div>
    );
};

export default Dashboard;
