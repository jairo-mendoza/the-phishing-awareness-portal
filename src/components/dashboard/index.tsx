import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    // Token is like a key to access the server for a specific user
    const token = localStorage.getItem("token");
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    });

    useEffect(() => {
        // Handle no JWT token existing, this would mean user is not logged in...
        if (!token) {
            // Redirect to login page if user is not logged in
            navigate("/login");
        } else {
            axios
                .get(`${process.env.REACT_APP_API_URI}/user/`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setName({
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                    });
                })
                .catch((error) => {
                    // TODO: Add proper error handling
                    console.error("Error fetching user data");
                });
        }
    }, [navigate, token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>
                Welcome {name.firstName} {name.lastName}
            </p>
        </div>
    );
};

export default Dashboard;
