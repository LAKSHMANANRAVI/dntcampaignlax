import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import backgroundImage from '../../Resources/home1.jpg';

function ResetPassword() {
    const { email } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if passwords match
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }
        // Retrieve and update user data in localStorage
        const storedUsers = JSON.parse(localStorage.getItem('userData'));
        const updatedUsers = storedUsers.map((user) => {
            if (user.email === email) {
                return { ...user, password };
            }
            return user;
        });
        localStorage.setItem('userData', JSON.stringify(updatedUsers));
        setMessage('Password reset successfully');
    };

    return (
        <Layout>
            <div style={{ 
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                minHeight: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '0px', padding: '20px', backgroundColor: 'rgb(20 15 35)' }}>
                    <h2 style={{ marginBottom: '20px', color: 'white', textAlign: 'center' }}>Reset Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password" style={{ display: 'block', color: 'white', marginBottom: '5px', fontSize: '0.875rem' }}>New Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="confirmPassword" style={{ display: 'block', color: 'white', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                style={{ backgroundColor: 'purple', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '50px' }}>
                                Reset Password
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div style={{ marginTop: '20px', color: 'white', textAlign: 'center', fontSize: '0.875rem' }}>
                            {message}
                        </div>
                    )}
                    <div style={{ marginTop: '20px', color: 'white', textAlign: 'center', fontSize: '0.875rem' }}>
                        <Link to="/login"><u>Back to Login</u></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ResetPassword;
