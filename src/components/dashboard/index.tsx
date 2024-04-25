import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '@/lib/auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from '@/features/user-auth/components/Layout';

const Dashboard = () => {
    const user = useUser();
    console.log(user);

    if (user.isLoading) {
        return <div>Loading...</div>;
    }

    if (user.isError) {
        console.error('Error fetching user data:', user.error);
        return <div>Error fetching user data</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Welcome {user.data?.firstName} {user.data?.lastName}
            </p>
        </div>
    );
};

export default Dashboard;
