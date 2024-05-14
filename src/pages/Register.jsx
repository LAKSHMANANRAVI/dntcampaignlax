// // // import React,{ useState, useEffect } from 'react'
// // // import axios from 'axios'
// // // import { Link, useNavigate } from "react-router-dom"
// // // import Layout from '../components/Layout';
  
// // // function Register() {
// // //     const navigate = useNavigate();
// // //     const [name, setName] = useState("")
// // //     const [email, setEmail] = useState("")
// // //     const [password, setPassword] = useState("")
// // //     const [confirmPassword, setConfirmPassword] = useState("")
// // //     const [validationErrors, setValidationErrors] = useState({});
// // //     const [isSubmitting, setIsSubmitting] = useState(false);
 
// // //     useEffect(()=>{
// // //         if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
// // //         }
// // //     },[])
 
// // //     const registerAction = (e) => {
// // //         e.preventDefault();
// // //         setIsSubmitting(true)
// // //         let payload = {
// // //             name: name,
// // //             email:email,
// // //             password:password,
// // //             password_confirmation:confirmPassword
// // //         }
// // //         axios.post('/api/register', payload)
// // //         .then((r) => {
// // //             setIsSubmitting(false)
// // //             localStorage.setItem('token', r.data.token)
// // //         })
// // //         .catch((e) => {
// // //             setIsSubmitting(false)
// // //             if (e.response.data.errors != undefined) {
// // //                 setValidationErrors(e.response.data.errors);
// // //             }
// // //         });
// // //     }
     
// // //     return (
// // //         <Layout>
// // //             <div className="row justify-content-md-center mt-5">
// // //                     <div className="card">
// // //                         <div className="card-body">
// // //                             <h5 className="card-title mb-4">Register</h5>
// // //                             <form onSubmit={(e)=>registerAction(e)}>
// // //                                     <label 
// // //                                         htmlFor="name"
// // //                                         className="form-label">Name
// // //                                     </label>
// // //                                     <input 
// // //                                         type="text"
// // //                                         className="form-control"
// // //                                         id="name"
// // //                                         name="name"
// // //                                         value={name}
// // //                                         onChange={(e)=>{setName(e.target.value)}}
// // //                                     />
// // //                                     {validationErrors.name != undefined &&
// // //                                         <div className="flex flex-col">
// // //                                             <small  className="text-danger">
// // //                                             {validationErrors.name[0]}
// // //                                             </small >
// // //                                         </div>
// // //                                     }
                                     
// // //                                     <label 
// // //                                         htmlFor="email"
// // //                                         className="form-label">Email address
// // //                                     </label>
// // //                                     <input 
// // //                                         type="email"
// // //                                         className="form-control"
// // //                                         id="email"
// // //                                         name="email"
// // //                                         value={email}
// // //                                         onChange={(e)=>{setEmail(e.target.value)}}
// // //                                     />
// // //                                     {validationErrors.email != undefined &&
// // //                                         <div className="flex flex-col">
// // //                                             <small  className="text-danger">
// // //                                             {validationErrors.email[0]}
// // //                                             </small >
// // //                                         </div>
// // //                                     }
                                     
// // //                                     <label 
// // //                                         htmlFor="password"
// // //                                         className="form-label">Password
// // //                                     </label>
// // //                                     <input 
// // //                                         type="password"
// // //                                         className="form-control"
// // //                                         id="password"
// // //                                         name="password"
// // //                                         value={password}
// // //                                         onChange={(e)=>setPassword(e.target.value)}
// // //                                     />
// // //                                     {validationErrors.password != undefined &&
// // //                                         <div className="flex flex-col">
// // //                                             <small  className="text-danger">
// // //                                             {validationErrors.password[0]}
// // //                                             </small >
// // //                                         </div>
// // //                                     }
// // //                                     <label 
// // //                                         htmlFor="confirm_password"
// // //                                         className="form-label">Confirm Password
// // //                                     </label>
// // //                                     <input 
// // //                                         type="password"
// // //                                         className="form-control"
// // //                                         id="confirm_password"
// // //                                         name="confirm_password"
// // //                                         value={confirmPassword}
// // //                                         onChange={(e)=>setConfirmPassword(e.target.value)}
// // //                                     />
// // //                                 <Link to="/">
// // //                                     <button 
// // //                                         disabled={isSubmitting}
// // //                                         type="submit"
// // //                                         className="btn btn-primary btn-block">Register Now
// // //                                     </button>
// // //                                     </Link>
// // //                                     <p 
// // //                                         className="text-center">Have already an account <Link to="/">Login here</Link>
// // //                                     </p>
// // //                             </form>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </Layout>
// // //     );
// // // }
   
// // // export default Register;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import Layout from '../components/Layout';
// // import backgroundImage from '../Components/imagedc.jpg';

// // function Register() {
// //     const navigate = useNavigate();
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');
// //     const [validationErrors, setValidationErrors] = useState({});
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     const registerAction = (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setValidationErrors({}); // Clear previous validation errors

// //         if (!name || !email || !phoneNumber || !password || !confirmPassword) {
// //             // Handle empty fields
// //             toast.error('Please fill in all fields.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         if (password !== confirmPassword) {
// //             // Handle password mismatch
// //             toast.error('Passwords do not match.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         // If all fields are filled and passwords match, proceed with registration
// //         const payload = {
// //             name: name,
// //             email: email,
// //             phone_number: phoneNumber,
// //             password: password,
// //             password_confirmation: confirmPassword,
// //         };

// //         axios
// //             .post('/api/register', payload)
// //             .then((response) => {
// //                 setIsSubmitting(false);
// //                 localStorage.setItem('token', response.data.token);
// //                 // Redirect to desired page after successful registration
// //                 navigate('/home');
// //             })
// //             .catch((error) => {
// //                 setIsSubmitting(false);
// //                 if (error.response && error.response.data && error.response.data.errors) {
// //                     setValidationErrors(error.response.data.errors);
// //                 } else {
// //                     toast.error('An error occurred while registering. Please try again.');
// //                 }
// //             });
// //     };

// //     return (
// //         <Layout>
// //             <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //                 <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
// //                     <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
// //                         Register
// //                     </div>
// //                     <form onSubmit={registerAction}>
// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Name</label>
// //                             <input
// //                                 type="text"
// //                                 id="name"
// //                                 name="name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.name && (
// //                                 <small className="text-danger">{validationErrors.name[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
// //                             <input
// //                                 type="email"
// //                                 id="email"
// //                                 name="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.email && (
// //                                 <small className="text-danger">{validationErrors.email[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Phone Number</label>
// //                             <input
// //                                 type="text"
// //                                 id="phone_number"
// //                                 name="phone_number"
// //                                 value={phoneNumber}
// //                                 onChange={(e) => setPhoneNumber(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.phone_number && (
// //                                 <small className="text-danger">{validationErrors.phone_number[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
// //                             <input
// //                                 type="password"
// //                                 id="password"
// //                                 name="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.password && (
// //                                 <small className="text-danger">{validationErrors.password[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="confirm_password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
// //                             <input
// //                                 type="password"
// //                                 id="confirm_password"
// //                                 name="confirm_password"
// //                                 value={confirmPassword}
// //                                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                         </div>

// //                         {Object.keys(validationErrors).length !== 0 && (
// //                             <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Registration failed. Please check your information.</p>
// //                         )}

// //                         <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px', width: '100%' }}>
// //                             Register
// //                         </button>
// //                     </form>

// //                     <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem' }}>
// //                         Already have an account? <Link to="/login"><u>Login here</u></Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </Layout>
// //     );
// // }

// // export default Register;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import Layout from '../components/Layout';
// // import backgroundImage from '../Components/imagedc.jpg';

// // function Register() {
// //     const navigate = useNavigate();
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [address, setAddress] = useState('');
// //     const [city, setCity] = useState('');
// //     const [state, setState] = useState('');
// //     const [region, setRegion] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');
// //     const [validationErrors, setValidationErrors] = useState({});
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     const registerAction = (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setValidationErrors({}); // Clear previous validation errors

// //         if (!name || !email || !phoneNumber || !address || !city || !state || !region || !password || !confirmPassword) {
// //             // Handle empty fields
// //             toast.error('Please fill in all fields.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         if (password !== confirmPassword) {
// //             // Handle password mismatch
// //             toast.error('Passwords do not match.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         // If all fields are filled and passwords match, proceed with registration
// //         const payload = {
// //             name,
// //             email,
// //             phone_number: phoneNumber,
// //             address,
// //             city,
// //             state,
// //             region,
// //             password,
// //             password_confirmation: confirmPassword,
// //         };

// //         axios
// //             .post('/api/register', payload)
// //             .then((response) => {
// //                 setIsSubmitting(false);
// //                 localStorage.setItem('token', response.data.token);
// //                 // Redirect to desired page after successful registration
// //                 navigate('/home');
// //             })
// //             .catch((error) => {
// //                 setIsSubmitting(false);
// //                 if (error.response && error.response.data && error.response.data.errors) {
// //                     setValidationErrors(error.response.data.errors);
// //                 } else {
// //                     toast.error('An error occurred while registering. Please try again.');
// //                 }
// //             });
// //     };

// //     return (
// //         <Layout>
// //             <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //                 <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
// //                     <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
// //                         Register
// //                     </div>
// //                     <form onSubmit={registerAction}>
// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Name</label>
// //                             <input
// //                                 type="text"
// //                                 id="name"
// //                                 name="name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.name && (
// //                                 <small className="text-danger">{validationErrors.name[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
// //                             <input
// //                                 type="email"
// //                                 id="email"
// //                                 name="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.email && (
// //                                 <small className="text-danger">{validationErrors.email[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Phone Number</label>
// //                             <input
// //                                 type="text"
// //                                 id="phone_number"
// //                                 name="phone_number"
// //                                 value={phoneNumber}
// //                                 onChange={(e) => setPhoneNumber(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.phone_number && (
// //                                 <small className="text-danger">{validationErrors.phone_number[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Address</label>
// //                             <input
// //                                 type="text"
// //                                 id="address"
// //                                 name="address"
// //                                 value={address}
// //                                 onChange={(e) => setAddress(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.address && (
// //                                 <small className="text-danger">{validationErrors.address[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>City</label>
// //                             <input
// //                                 type="text"
// //                                 id="city"
// //                                 name="city"
// //                                 value={city}
// //                                 onChange={(e) => setCity(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.city && (
// //                                 <small className="text-danger">{validationErrors.city[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="state" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>State</label>
// //                             <input
// //                                 type="text"
// //                                 id="state"
// //                                 name="state"
// //                                 value={state}
// //                                 onChange={(e) => setState(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.state && (
// //                                 <small className="text-danger">{validationErrors.state[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="region" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Region</label>
// //                             <input
// //                                 type="text"
// //                                 id="region"
// //                                 name="region"
// //                                 value={region}
// //                                 onChange={(e) => setRegion(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// // //                             />
// // //                             {validationErrors.region && (
// // //                                 <small className="text-danger">{validationErrors.region[0]}</small>
// // //                             )}
// // //                         </div>

// // //                         <div style={{ marginBottom: '15px' }}>
// // //                             <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
// // //                             <input
// // //                                 type="password"
// // //                                 id="password"
// // //                                 name="password"
// // //                                 value={password}
// // //                                 onChange={(e) => setPassword(e.target.value)}
// // //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// // //                                 required
// // //                             />
// // //                             {validationErrors.password && (
// // //                                 <small className="text-danger">{validationErrors.password[0]}</small>
// // //                             )}
// // //                         </div>

// // //                         <div style={{ marginBottom: '15px' }}>
// // //                             <label htmlFor="confirm_password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
// // //                             <input
// // //                                 type="password"
// // //                                 id="confirm_password"
// // //                                 name="confirm_password"
// // //                                 value={confirmPassword}
// // //                                 onChange={(e) => setConfirmPassword(e.target.value)}
// // //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// // //                                 required
// // //                             />
// // //                         </div>

// // //                         {Object.keys(validationErrors).length !== 0 && (
// // //                             <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Registration failed. Please check your information.</p>
// // //                         )}

// // //                         <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px', width: '100%' }}>
// // //                             Register
// // //                         </button>
// // //                     </form>

// // //                     <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem' }}>
// // //                         Already have an account? <Link to="/"><u>Login here</u></Link>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </Layout>
// // //     );
// // // }

// // // export default Register;


// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import Layout from '../components/Layout';
// // import backgroundImage from '../Components/imagedc.jpg';

// // function Register() {
// //     const navigate = useNavigate();
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [phoneNumber, setPhoneNumber] = useState('');
// //     const [address, setAddress] = useState('');
// //     const [city, setCity] = useState('');
// //     const [state, setState] = useState('');
// //     const [region, setRegion] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [confirmPassword, setConfirmPassword] = useState('');
// //     const [validationErrors, setValidationErrors] = useState({});
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     const registerAction = (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setValidationErrors({}); // Clear previous validation errors

// //         if (!name || !email || !phoneNumber || !address || !city || !state || !region || !password || !confirmPassword) {
// //             // Handle empty fields
// //             toast.error('Please fill in all fields.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         if (password !== confirmPassword) {
// //             // Handle password mismatch
// //             toast.error('Passwords do not match.');
// //             setIsSubmitting(false);
// //             return;
// //         }

// //         // If all fields are filled and passwords match, proceed with registration
// //         const payload = {
// //             name,
// //             email,
// //             phone_number: phoneNumber,
// //             address,
// //             city,
// //             state,
// //             region,
// //             password,
// //             password_confirmation: confirmPassword,
// //         };

       
// //     return (
// //         <Layout>
// //             <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
// //                 <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
// //                     <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
// //                         Register
// //                     </div>
// //                     <form onSubmit={registerAction}>
// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Name</label>
// //                             <input
// //                                 type="text"
// //                                 id="name"
// //                                 name="name"
// //                                 value={name}
// //                                 onChange={(e) => setName(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.name && (
// //                                 <small className="text-danger">{validationErrors.name[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
// //                             <input
// //                                 type="email"
// //                                 id="email"
// //                                 name="email"
// //                                 value={email}
// //                                 onChange={(e) => setEmail(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.email && (
// //                                 <small className="text-danger">{validationErrors.email[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Phone Number</label>
// //                             <input
// //                                 type="text"
// //                                 id="phone_number"
// //                                 name="phone_number"
// //                                 value={phoneNumber}
// //                                 onChange={(e) => setPhoneNumber(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.phone_number && (
// //                                 <small className="text-danger">{validationErrors.phone_number[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Address</label>
// //                             <input
// //                                 type="text"
// //                                 id="address"
// //                                 name="address"
// //                                 value={address}
// //                                 onChange={(e) => setAddress(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.address && (
// //                                 <small className="text-danger">{validationErrors.address[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>City</label>
// //                             <input
// //                                 type="text"
// //                                 id="city"
// //                                 name="city"
// //                                 value={city}
// //                                 onChange={(e) => setCity(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.city && (
// //                                 <small className="text-danger">{validationErrors.city[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="state" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>State</label>
// //                             <input
// //                                 type="text"
// //                                 id="state"
// //                                 name="state"
// //                                 value={state}
// //                                 onChange={(e) => setState(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.state && (
// //                                 <small className="text-danger">{validationErrors.state[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="region" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Region</label>
// //                             <input
// //                                 type="text"
// //                                 id="region"
// //                                 name="region"
// //                                 value={region}
// //                                 onChange={(e) => setRegion(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.region && (
// //                                 <small className="text-danger">{validationErrors.region[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
// //                             <input
// //                                 type="password"
// //                                 id="password"
// //                                 name="password"
// //                                 value={password}
// //                                 onChange={(e) => setPassword(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                             {validationErrors.password && (
// //                                 <small className="text-danger">{validationErrors.password[0]}</small>
// //                             )}
// //                         </div>

// //                         <div style={{ marginBottom: '15px' }}>
// //                             <label htmlFor="confirm_password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
// //                             <input
// //                                 type="password"
// //                                 id="confirm_password"
// //                                 name="confirm_password"
// //                                 value={confirmPassword}
// //                                 onChange={(e) => setConfirmPassword(e.target.value)}
// //                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
// //                                 required
// //                             />
// //                         </div>

// //                         {Object.keys(validationErrors).length !== 0 && (
// //                             <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Registration failed. Please check your information.</p>
// //                         )}

// //                         <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px', width: '100%' }}>
// //                             Register
// //                         </button>
// //                     </form>

// //                     <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem' }}>
// //                         Already have an account? <Link to="/"><u>Login here</u></Link>
// //                     </div>
// //                 </div>
// //             </div>
// //         </Layout>
// //     );
// // }

// // export default Register;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Layout from '../components/Layout';
// import backgroundImage from '../Components/imagedc.jpg';

// function Register() {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [region, setRegion] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const registerAction = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setValidationErrors({}); // Clear previous validation errors

//         if (!name || !email || !phoneNumber || !address || !city || !state || !region || !password || !confirmPassword) {
//             // Handle empty fields
//             toast.error('Please fill in all fields.');
//             setIsSubmitting(false);
//             return;
//         }

//         if (password !== confirmPassword) {
//             // Handle password mismatch
//             toast.error('Passwords do not match.');
//             setIsSubmitting(false);
//             return;
//         }

//         // If all fields are filled and passwords match, proceed with registration
//         const payload = {
//             name,
//             email,
//             phone_number: phoneNumber,
//             address,
//             city,
//             state,
//             region,
//             password,
//             password_confirmation: confirmPassword,
//         };

//         // Store user data in localStorage
//         localStorage.setItem('userData', JSON.stringify(payload));

//         // Redirect to desired page after successful registration
//         navigate('/');
//         toast.stringify('Registration success')
//     };

//     return (
//         <Layout>
//             <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <div style={{ width: '500px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                     <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem' }}>
//                         Register
//                     </div>
                    
//                         <form onSubmit={registerAction}>
//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.name && (
//                                 <small className="text-danger">{validationErrors.name[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Email address</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.email && (
//                                 <small className="text-danger">{validationErrors.email[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Phone Number</label>
//                             <input
//                                 type="text"
//                                 id="phone_number"
//                                 name="phone_number"
//                                 value={phoneNumber}
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.phone_number && (
//                                 <small className="text-danger">{validationErrors.phone_number[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="address" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Address</label>
//                             <input
//                                 type="text"
//                                 id="address"
//                                 name="address"
//                                 value={address}
//                                 onChange={(e) => setAddress(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.address && (
//                                 <small className="text-danger">{validationErrors.address[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="city" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>City</label>
//                             <input
//                                 type="text"
//                                 id="city"
//                                 name="city"
//                                 value={city}
//                                 onChange={(e) => setCity(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.city && (
//                                 <small className="text-danger">{validationErrors.city[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="state" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>State</label>
//                             <input
//                                 type="text"
//                                 id="state"
//                                 name="state"
//                                 value={state}
//                                 onChange={(e) => setState(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.state && (
//                                 <small className="text-danger">{validationErrors.state[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="region" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Region</label>
//                             <input
//                                 type="text"
//                                 id="region"
//                                 name="region"
//                                 value={region}
//                                 onChange={(e) => setRegion(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.region && (
//                                 <small className="text-danger">{validationErrors.region[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                             {validationErrors.password && (
//                                 <small className="text-danger">{validationErrors.password[0]}</small>
//                             )}
//                         </div>

//                         <div style={{ marginBottom: '15px' }}>
//                             <label htmlFor="confirm_password" style={{ display: 'block', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
//                             <input
//                                 type="password"
//                                 id="confirm_password"
//                                 name="confirm_password"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
//                                 required
//                             />
//                         </div>

//                         {Object.keys(validationErrors).length !== 0 && (
//                             <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Registration failed. Please check your information.</p>
//                         )}

//                         <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px', width: '100%' }}>
//                             Register
//                         </button>
//                     </form>
                      

//                     <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem' }}>
//                         Already have an account? <Link to="/"><u>Login here</u></Link>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default Register;
// import React, { useState } from 'react';

// import { Link ,useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import Layout from '../components/Layout';
// // import backgroundImage from '../Components/imagedc.jpg';
// import backgroundImage from '../../Resources/home1.jpg'
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
// import { VscEye } from "react-icons/vsc";
// import { VscEyeClosed } from "react-icons/vsc";


// function Register() {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [state, setState] = useState('');
//     const [region, setRegion] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [validationErrors, setValidationErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const navigate = useNavigate();
//     const [showSuccess, setShowSuccess] = useState(false); 
//     const [showPassword, setShowPassword] = useState(false); // State to track password visibility
// const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };
//     const registerAction = (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);
//         setValidationErrors({}); // Clear previous validation errors

//         if (!name || !email || !phoneNumber || !address || !city || !state || !region || !password || !confirmPassword) {
//             // Handle empty fields
//             alert('Please fill in all fields.');
//             setIsSubmitting(false);
//             return;
//         }

//         if (password !== confirmPassword) {
//             // Handle password mismatch
//             alert('Passwords do not match.');
//             setIsSubmitting(false);
//             return;
//         }

//         // If all fields are filled and passwords match, proceed with registration
//         const userDetails = {
//             name,
//             email,
//             phone_number: phoneNumber,
//             address,
//             city,
//             state,
//             region,
//             password,
//             password_confirmation: confirmPassword,
//         };

//         let users = JSON.parse(localStorage.getItem('userData')) || [];
//         users.push(userDetails);
//         localStorage.setItem('userData', JSON.stringify(users));
//         setTimeout(() => {
//         setShowSuccess(true);
//         alert('Successfully registered!');
//                 navigate('/');
//     }, 3000);
//         // After successful registration, you may redirect the user to another page if needed.
//     };
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Layout from '../components/Layout';
import backgroundImage from '../../Resources/donati.jpg';
import logo from '../../Resources/DClogo.png';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [region, setRegion] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const registerAction = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setValidationErrors({});

        if (!name || !email || !phoneNumber || !address || !city || !state || !region || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            setIsSubmitting(false);
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            setIsSubmitting(false);
            return;
        }

        // Check if email already exists in local storage
        const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
        const emailExists = existingUsers.some(user => user.email === email);

        if (emailExists) {
            alert('Email already exists. Please use a different email address.');
            setIsSubmitting(false);
            return;
        }

        // Proceed with registration if email is unique
        const userDetails = {
            name,
            email,
            phone_number: phoneNumber,
            address,
            city,
            state,
            region,
            password,
            password_confirmation: confirmPassword,
        };

        // Save user details to local storage
        const updatedUsers = [...existingUsers, userDetails];
        localStorage.setItem('userData', JSON.stringify(updatedUsers));

        // Set success message and navigate after a delay
        setShowSuccess(true);
        setTimeout(() => {
            alert('Successfully registered!');
            navigate('/');
        }, 3000);
    };

    return (
        <Layout>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '140vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* Logo image */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src={logo} alt="" style={{ width: '180px', height: 'auto', marginRight: '10Px' }} />
                    <h1 style={{ marginBottom: '20px', color: 'white', fontSize: '2.5rem' }}>Donation Campaign</h1>
                </div>
                <div style={{ width: '90%', maxWidth: '500px', border: '1px solid', borderRadius: '8px', padding: '20px', background: 'radial-gradient(circle, rgba(83,74,112,1) 0%, rgba(27,20,41,1) 99%)' }}>
                    <div style={{ marginBottom: '20px', color:'#800080', textAlign: 'center', fontSize: '1.5rem' }}>
                        <b>Register</b> 
                    </div>

                    <form onSubmit={registerAction} style={{ marginBottom: '20px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ width: '100%',cursor:'black', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.name && (
                                <small className="text-danger">{validationErrors.name[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block',color:'white', marginBottom: '15px', fontSize: '0.975rem' }}>Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.email && (
                                <small className="text-danger">{validationErrors.email[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="phone_number" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Phone Number</label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.phone_number && (
                                <small className="text-danger">{validationErrors.phone_number[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="address" style={{ display: 'block', marginBottom: '5px',color:'white', fontSize: '0.875rem' }}>Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.address && (
                                <small className="text-danger">{validationErrors.address[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="city" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.city && (
                                <small className="text-danger">{validationErrors.city[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="state" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.state && (
                                <small className="text-danger">{validationErrors.state[0]}</small>
                            )}
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="region" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Region</label>
                            <input
                                type="text"
                                id="region"
                                name="region"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {validationErrors.region && (
                                <small className="text-danger">{validationErrors.region[0]}</small>
                            )}
                        </div>

                      {/* Password input */}
                      <div style={{ marginBottom: '15px', position: 'relative' }}>
                            <label htmlFor="password" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {/* Eye icon to toggle password visibility */}
                            {showPassword ? (
                                <VscEye onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '2px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                            ) : (
                                <VscEyeClosed onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                            )}
                            {validationErrors.password && (
                                <small className="text-danger">{validationErrors.password[0]}</small>
                            )}
                        </div>

                        {/* Confirm Password input */}
                        <div style={{ marginBottom: '15px', position: 'relative' }}>
                            <label htmlFor="confirm_password" style={{ display: 'block',color:'white', marginBottom: '5px', fontSize: '0.875rem' }}>Confirm Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="confirm_password"
                                name="confirm_password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{ width: '100%', padding: '8px',color:'#140f23', borderRadius: '4px', border: '1px solid',backgroundcolor: 'rgba(255,255,255,0.5) ' }}
                                required
                            />
                            {/* Eye icon to toggle password visibility */}
                            {showPassword ? (
                                <VscEye onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                            ) : (
                                <VscEyeClosed onClick={togglePasswordVisibility} style={{ position: 'absolute', right: '20px', top: '70%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                            )}
                        </div>

                        {showSuccess && (
                        <div style={{ marginTop: '20px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', padding: '10px', borderRadius: '4px', fontSize: '0.875rem' }}>
                            Registered successful ↺
                        </div>
                    )}

                        {Object.keys(validationErrors).length !== 0 && (
                            <p style={{ textAlign: 'center', color: 'red', fontSize: '0.875rem' }}>Registration failed. Please check your information.</p>
                        )}

                        <button type="submit" disabled={isSubmitting} style={{ backgroundColor: '#800080', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '20px', width: '100%' }}>
                            Register
                        </button>
                    </form>

                    <div style={{ marginTop: '20px',color:'white', textAlign: 'center', fontSize: '0.875rem' }}>
                        Already have an account? <Link to="/"><u>Login here</u></Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
