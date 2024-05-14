// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Layout from '../components/Layout';
// import backgroundImage from '../Components/imagedc.jpg';

// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false); 

//     useEffect(() => {
//         if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
//             navigate('/home');
//         }
//     }, [navigate]);

//     const loginAction = (e) => {
//         e.preventDefault();
//         setValidationErrors({});
//         setIsSubmitting(true);

//         if (!email || !password) {
//             toast.error('Please fill in all fields.');
//             setIsSubmitting(false);
//             return;
//         }

//         const dummyToken = 'dummyToken';
//         localStorage.setItem('token', dummyToken);
//         setShowSuccess(true); 
//         setIsSubmitting(false); 
//         setTimeout(() => {
//             navigate('/home');
//             toast.success('Login successful.');
//         }, 1000);
//     };

//     return (
//         <Layout>
//             <h1></h1>
//             <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                     <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
//                         Sign In
//                     </div>
//                     <form onSubmit={(e) => { loginAction(e) }}>
//                         {Object.keys(validationErrors).length !== 0 && (
//                             <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Incorrect Email or Password</p>
//                         )}

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => { setEmail(e.target.value) }}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                         </div>
//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={(e) => { setPassword(e.target.value) }}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                         </div>
//                         <div style={{ textAlign: 'center' }}>
//                             <button
//                                 type="submit"
//                                 style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px' }}>
//                                 Login
//                             </button>
//                         </div>
//                     </form>
//                     {showSuccess && (
//                         <div style={{ marginTop: '20px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', padding: '10px', borderRadius: '4px', fontSize: '0.875rem' }}>
//                             Login successful ↺
//                         </div>
//                     )}
//                     <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem' }}>
//                         Don't have an account? <Link to="/register"><u>Register here</u></Link>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default Login;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';
import ForgotPassword from './Forgotpass';
// import backgroundImage from '../Components/imagedc.jpg';
import backgroundImage from '../../Resources/donati.jpg'
import logo from '../../Resources/DClogo.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false); 

    useEffect(() => {
        if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
            navigate('/home');
        }
    }, [navigate]);

    const loginAction = (e) => {
        e.preventDefault();
    
        // Retrieve registration data from localStorage
        const storedUsers = JSON.parse(localStorage.getItem('userData'));
    
        if (!storedUsers || storedUsers.length === 0) {
            // Show error message if no users are registered
            setValidationErrors({ noUsersRegistered: true });
            return;
        }
    
        // Find user with matching email and password
        const user = storedUsers.find((user) => user.email === email && user.password === password);
    
        if (user) {
            // Set token to indicate successful login (mocking token here)
            localStorage.setItem('token', 'mockedToken');
    
            // Show success message
            setShowSuccess(true);
    
            // Redirect to home page
            navigate('/home');
            toast.success('Login successful');
        } else {
            // Show error message for incorrect credentials
            setValidationErrors({ incorrectCredentials: true });
        }
    };

    return (
        <Layout>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* Logo image */}
                <div style={{ display: 'flex', alignItems: 'center',marginTop:'5px', marginBottom: '5px' }}>
                    <img src={logo} alt="" style={{ width: '180px', height: 'auto', marginRight: '1Px' }} />
                    <h1 style={{ marginBottom: '20px', color: 'white', fontSize: '2.5rem' }}>Donation Campaign</h1>
                </div>
                <div style={{ width: '90%', maxWidth: '300px', border: '1px solid', borderRadius: '8px', padding: '20px', background: 'radial-gradient(circle, rgba(83,74,112,1) 0%, rgba(27,20,41,1) 99%)' }}>
                    <div style={{ marginBottom: '20px',color:'white', textAlign: 'center', fontSize: '1.5rem' }}>
                        Sign In
                    </div>
                    <form onSubmit={loginAction}>
                        {validationErrors.incorrectCredentials && (
                            <p style={{ textAlign: 'center', color: 'purple', fontSize: '0.875rem' }}>Incorrect Email or Password</p>
                        )}

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                style={{ backgroundColor: 'purple', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '50px' }}>
                                Login
                            </button>
                        </div>
                    </form>
                    {showSuccess && (
                        <div style={{ marginTop: '20px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', padding: '10px', borderRadius: '4px', fontSize: '0.875rem' }}>
                            Login successful ↺
                        </div>
                    )}
                    <div style={{ marginTop: '20px', color: 'white', textAlign: 'center', fontSize: '0.875rem' }}>
    {/* <Link to="/forgot"><u>Forgot Password?</u></Link> */}
</div>
                    <div style={{ marginTop: '20px',color:'white', textAlign: 'center', fontSize: '0.875rem' }}>
                        Don't have an account? <Link to="/register"><u>Register here</u></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
