// // // import React, { useState, useEffect } from 'react';

// // // const Profile = () => {
// // //   // State to store user data
// // //   const [userData, setUserData] = useState(null);

// // //   useEffect(() => {
// // //     // Function to retrieve user data from local storage
// // //     const user = () => {
// // //       const userDataFromStorage = localStorage.getItem('userData');
// // //       if (userDataFromStorage) {
// // //         setUserData(JSON.parse(userDataFromStorage));
// // //       }
// // //     };

// // //     user();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <h2>User Profile</h2>
// // //       {userData ? (
// // //         <div>
// // //           <p>Name: {userData.name}</p>
// // //           <p>Email: {userData.email}</p>
// // //           <p>Phone Number: {userData.phoneNumber}</p>
// // //           <p>Address: {userData.address}</p>
// // //           <p>City: {userData.city}</p>
// // //           <p>State: {userData.state}</p>
// // //           <p>Region: {userData.region}</p>
// // //         </div>
// // //       ) : (
// // //         <p>No user data found</p>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Profile;
// // // import React, { useState, useEffect } from 'react';

// // // const Profile = ({ email }) => {
// // //   const [userData, setUserData] = useState(null);

// // //   useEffect(() => {
// // //     console.log('Email prop:', email);
// // //     const getRegisteredDetails = () => {
// // //       const users = JSON.parse(localStorage.getItem('userData')) || [];
// // //       console.log('Users from localStorage:', users);
// // //       const user = users.find(user => user.email === email);
// // //       console.log('User found:', user);
// // //       if (user) {
// // //         setUserData(user);
// // //       }
// // //     };
  
// // //     getRegisteredDetails();
// // //   }, [email]);
  

// // //   return (
// // //     <div>
// // //       <h2>User Profile</h2>
// // //       {userData && (
// // //         <div>
// // //           <p>Name: {userData.name}</p>
// // //           <p>Email: {userData.email}</p>
// // //           <p>Phone Number: {userData.phone_number}</p>
// // //           <p>Address: {userData.address}</p>
// // //           <p>City: {userData.city}</p>
// // //           <p>State: {userData.state}</p>
// // //           <p>Region: {userData.region}</p>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Profile;
// // import React, { useState, useEffect } from 'react';

// // const Profile = ({ email }) => {
// //   const [userData, setUserData] = useState(null);

// //   useEffect(() => {
// //     const getRegisteredDetails = () => {
// //       const users = JSON.parse(localStorage.getItem('userData')) || [];
// //       const user = users.find(user => user.email === email);
// //       if (user) {
// //         setUserData(user);
// //       }
// //     };
  
// //     getRegisteredDetails();
// //   }, [email]);
  

// //   return (
// //     <div>
// //       <h2>User Profile</h2>
// //       {userData && (
// //         <div>
// //           <p>Name: {userData.name}</p>
// //           <p>Email: {userData.email}</p>
// //           <p>Phone Number: {userData.phone_number}</p>
// //           <p>Address: {userData.address}</p>
// //           <p>City: {userData.city}</p>
// //           <p>State: {userData.state}</p>
// //           <p>Region: {userData.region}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useState, useEffect } from 'react';

// const Profile = ({ email }) => {
//   const [userData, setUserData] = useState(null);

//   const getRegisteredDetails = () => {
//     const users = JSON.parse(localStorage.getItem('userData')) || [];
//     console.log('Users from localStorage:', users);
//     const user = users.find(user => user.email === email);
//     console.log('User found:', user);
//     if (user) {
//       setUserData(user);
//     }
//   };
  
  
//     getRegisteredDetails();
//   }, [email]);
  

//   return (
//     <div>
//       <h2>User Profile</h2>
//       {userData && (
//         <div>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           <p>Phone Number: {userData.phone_number}</p>
//           <p>Address: {userData.address}</p>
//           <p>City: {userData.city}</p>
//           <p>State: {userData.state}</p>
//           <p>Region: {userData.region}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from 'react';

const Profile = ({ email }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getRegisteredDetails = () => {
      const users = JSON.parse(localStorage.getItem('userData')) || [];
      console.log('Users from localStorage:', users);
      const user = users.find(user => user.email === email);
      console.log('User found:', user);
      if (user) {
        setUserData(user);
      }
    };

    getRegisteredDetails();
  }, [email]);

  return (
    <div>
      <h2>User Profile</h2>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone Number: {userData.phone_number}</p>
          <p>Address: {userData.address}</p>
          <p>City: {userData.city}</p>
          <p>State: {userData.state}</p>
          <p>Region: {userData.region}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

