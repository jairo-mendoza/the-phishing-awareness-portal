import { useNavigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { RegisterForm } from '../components/RegisterForm';

export const Register = () => {
    const navigate = useNavigate();

    return (
        <Layout title="Register">
            {/* On successful registration, forward to dashboard */}
            <RegisterForm onSuccess={() => navigate('/')} />
        </Layout>
    );
};
