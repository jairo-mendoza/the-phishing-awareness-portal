import { useUser } from '@/lib/auth';

const Dashboard = () => {
    const user = useUser();

    if (user.isSuccess) {
        console.log('User data cuhz:', user);
    }

    if (user.isLoading) {
        return <div>Loading...</div>;
    }

    if (user.isError) {
        console.error('Error fetching user data:', user.error);
        return <div>Error fetching user data</div>;
    }

    if (!user.data) {
        return <div>No user data</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Welcome {user.data.data.firstName} {user.data.data.lastName}
            </p>
        </div>
    );
};

export default Dashboard;
