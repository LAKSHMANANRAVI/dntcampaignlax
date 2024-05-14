import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        toast.success("Logged out successfully"); 
    };

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
