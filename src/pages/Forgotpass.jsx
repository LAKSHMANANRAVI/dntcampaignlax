// // // Create a new component named ForgotPassword.js

// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // function ForgotPassword() {
// //     const [email, setEmail] = useState('');

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // Implement logic to send password reset email
// //         // You can use a library like Nodemailer to send emails from your backend
// //         // After sending the email, you may redirect the user to a confirmation page
// //     };

// //     return (
// //         <div>
// //             <h2>Forgot Password</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div>
// //                     <label htmlFor="email">Email address:</label>
// //                     <input
// //                         type="email"
// //                         id="email"
// //                         value={email}
// //                         onChange={(e) => setEmail(e.target.value)}
// //                         required
// //                     />
// //                 </div>
// //                 <button type="submit">Submit</button>
// //             </form>
// //             <div style={{ marginTop: '20px' }}>
// //                 <Link to="/login">Back to Login</Link>
// //             </div>
// //         </div>
// //     );
// // }

// // export default ForgotPassword;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Layout from '../components/Layout';
// import backgroundImage from '../../Resources/home1.jpg';

// function ForgotPassword() {
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Implement logic to send password reset email
//         // You can use a library like Nodemailer to send emails from your backend
//         // After sending the email, you may redirect the user to a confirmation page
//     };

//     return (
//         <Layout>
//             <div style={{ 
//                 backgroundImage: `url(${backgroundImage})`, 
//                 backgroundSize: 'cover', 
//                 backgroundPosition: 'center', 
//                 minHeight: '100vh', 
//                 display: 'flex', 
//                 justifyContent: 'center', 
//                 alignItems: 'center' 
//             }}>
//                 <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '0px', padding: '20px', backgroundColor: 'rgb(20 15 35)' }}>
//                     <h2 style={{ marginBottom: '20px', color: 'white', textAlign: 'center' }}>Forgot Password</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="email" style={{ display: 'block', color: 'white', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                         </div>
//                         <div style={{ textAlign: 'center' }}>
//                             <button
//                                 type="submit"
//                                 style={{ backgroundColor: 'purple', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '50px' }}>
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                     <div style={{ marginTop: '20px', color: 'white', textAlign: 'center', fontSize: '0.875rem' }}>
//                         <Link to="/login"><u>Back to Login</u></Link>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default ForgotPassword;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import backgroundImage from '../../Resources/home1.jpg';
import { useNavigate } from 'react-router-dom';


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if the email exists in localStorage
        const storedUsers = JSON.parse(localStorage.getItem('userData'));
        const user = storedUsers.find((user) => user.email === email);

        if (user) {
            // Implement logic to send password reset email
            // You can use a library like Nodemailer to send emails from your backend
            // For the sake of this example, we'll simulate sending an email
            setMessage(`Password reset email sent to ${email}`);
        } else {
            setMessage(`No user found with email ${email}`);
        }
        navigate('/reset');

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
                    <h2 style={{ marginBottom: '20px', color: 'white', textAlign: 'center' }}>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', color: 'white', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type="submit"
                                style={{ backgroundColor: 'purple', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '50px' }}>
                                Submit
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

export default ForgotPassword;
