import { useNavigate } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <Layout title="Login">
            {/* On successful login, forward to dashboard */}
            <LoginForm onSuccess={() => navigate('/')} />
        </Layout>
    );
};
