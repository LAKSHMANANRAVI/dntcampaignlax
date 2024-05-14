// import React from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../../../Resources/DClogo.png';
// import './Navbar.css';
// import './../../../Resources/DCVI.mp4';

// const CustomNavbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     console.log('called');
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   return (
//     <div className="navbar-wrapper">
//       {/* <div className="navbar navbar-dark bg-dark"> */}
//         {/* <video autoPlay loop muted className="navbar-video">
//           <source src="./../../../Resources/DCVI.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video> */}
//       {/* </div> */}
//       <Navbar expand="lg" className="justify-content-between" style={{ backgroundColor: '#336699', padding: '10px 50px', height: '80px' }}>
//         <Navbar.Brand as={Link} to="/home">
//           <img src={logo} alt="" width="100" height="10" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Button as={NavLink} to="/home" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '', color: '' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/home";
//             }}>
//               Home
//             </Button>
//             <Button as={NavLink} to="/health" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/health";
//             }}>
//               Health
//             </Button>
//             <Button as={NavLink} to="/education" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/education";
//             }}>
//               Education
//             </Button>
//             <Button as={NavLink} to="/clothss" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/clothss";
//             }}>
//               Clothing
//             </Button>
//             <Button as={NavLink} to="/food" variant="dark" className="nav-button"  style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/food";
//             }}>
//               Food
//             </Button>
//             <Button as={NavLink} to="/donation" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/donation";
//             }}>
//               Donated List
//             </Button>
//             <Button as={NavLink} to="/stats" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/stats";
//             }}>
//               Statistics
//             </Button>
//           </Nav>
//           <Button variant="outline-light" onClick={() => handleLogout()}>
//             Logout
//           </Button>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default CustomNavbar;
// import React, { useState } from 'react';
// import { Navbar, Nav, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import { useNavigate, useLocation } from 'react-router-dom';
// import logo from '../../../Resources/DClogo.png';
// import './Navbar.css';
// import './../../../Resources/DCVI.mp4';

// const CustomNavbar = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [isBlurred, setIsBlurred] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     console.log('called');
//     localStorage.removeItem('token');
//     navigate('/');
//   };

//   const handleToggle = () => {
//     setExpanded(!expanded);
 
//   };

//   const handleClose = () => {
//     setExpanded(false);
//   };
//   // const goBack = () => {
//   //   history.goBack();
//   // };

//   return (
//     <div className={`navbar-wrapper ${isBlurred ? 'blur-background' : ''}`}>
      
//       <Navbar expand="lg" className="justify-content-between" style={{ backgroundColor: '#336699', padding: '10px 50px', height: '110px' }} expanded={expanded}>
//       {/* <Button variant="link" className="nav-link" onClick={goBack}>
//               <i className="bi bi-arrow-left"></i> Back
//             </Button> */}
//         <Navbar.Brand as={Link} to="/home">
//           <img src={logo} alt="" width="100" height="10" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Button as={NavLink} to="/home" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '', color: '' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/home";
//             }} onClick={handleClose}>
//               Home
//             </Button>
//             <Button as={NavLink} to="/health" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/health";
//             }}onClick={handleClose}>
//               Health
//             </Button>
//             <Button as={NavLink} to="/education" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/education";
//             }}onClick={handleClose}>
//               Education
//             </Button>
//             <Button as={NavLink} to="/clothss" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/clothss";
//             }}onClick={handleClose}>
//               Clothing
//             </Button>
//             <Button as={NavLink} to="/food" variant="dark" className="nav-button"  style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/food";
//             }}onClick={handleClose}>
//               Food
//             </Button>
//             <Button as={NavLink} to="/donation" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/donation";
//             }}onClick={handleClose}>
//               Donated List
//             </Button>
//             <Button as={NavLink} to="/stats" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/stats";
//             }}onClick={handleClose}>
//               Statistics
//             </Button>
//             {/* <Button as={NavLink} to="/profil" variant="dark" className="nav-button" style={{ borderRadius: '5px' }} activeStyle={{ backgroundColor: '#333', color: '#fff' }} isActive={(match, location) => {
//               if (!match) {
//                 return false;
//               }
//               const { pathname } = location;
//               return pathname === "/profil";
//             }}onClick={handleClose}>
//               User Profile
//             </Button> */}
//           </Nav>
//           <Button variant="outline-light" onClick={() => handleLogout()}>
//             Logout
//           </Button>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default CustomNavbar;
// import React, { useState } from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import logo from './../../../Resources/DClogo.png';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
// import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
// import { CgFileDocument } from 'react-icons/cg';
// import { HiAcademicCap } from "react-icons/hi";
// import { ImAidKit } from "react-icons/im";
// import { FaBowlFood } from "react-icons/fa6";
// import { GiClothes } from "react-icons/gi";

// function CustomNavbar() {
//   const [expanded, setExpanded] = useState(false);
//   const [navColour, setNavColour] = useState(false);

//   const scrollHandler = () => {
//     if (window.scrollY >= 20) {
//       setNavColour(true);
//     } else {
//       setNavColour(false);
//     }
//   };
//   const handleLogout = () => {
//         console.log('called');
//         localStorage.removeItem('token');
//         navigate('/');
//       };

//   window.addEventListener('scroll', scrollHandler);

//   return (
//     <Navbar expanded={expanded ? 'expanded' : expanded} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="d-flex">
//           <img src={logo} className="img-fluid logo" alt="brand" />
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             setExpanded(expanded ? false : true);
//           }}
//         />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/education" onClick={() => setExpanded(false)}>
//                 <HiAcademicCap style={{ marginBottom: '2px' }} /> Education
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/health" onClick={() => setExpanded(false)}>
//                 <ImAidKit style={{ marginBottom: '2px' }} /> Health
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/food" onClick={() => setExpanded(false)}>
//                 <FaBowlFood style={{ marginBottom: '2px' }} /> Food
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/clothss" onClick={() => setExpanded(false)}>
//                 <GiClothes style={{ marginBottom: '2px' }} /> Clothings
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/donation" onClick={() => setExpanded(false)}>
//                 <CgFileDocument style={{ marginBottom: '2px' }} /> Donation List
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//   <Nav.Link onClick={handleLogout}>
//     <CgFileDocument style={{ marginBottom: '2px' }} /> Logout
//   </Nav.Link>
// </Nav.Item>

//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './../../../Resources/DClogo.png';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { HiAcademicCap } from "react-icons/hi";
import { ImAidKit } from "react-icons/im";
import { FaBowlFood } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const navigate = useNavigate(); // Add this line to access navigation functionality

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  const handleLogout = () => {
    console.log('called');
    localStorage.removeItem('token');
    navigate('/');
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expanded ? 'expanded' : expanded} fixed="top" expand="md" className={navColour ? 'sticky' : 'navbar'}>
      <Container>
        <Navbar.Brand as={Link} to="/home" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpanded(expanded ? false : true);
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => setExpanded(false)}>
                <IoMdHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/education" onClick={() => setExpanded(false)}>
                <HiAcademicCap style={{ marginBottom: '2px' }} /> Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/health" onClick={() => setExpanded(false)}>
                <ImAidKit style={{ marginBottom: '2px' }} /> Health
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/food" onClick={() => setExpanded(false)}>
                <FaBowlFood style={{ marginBottom: '2px' }} /> Food
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/clothss" onClick={() => setExpanded(false)}>
                <GiClothes style={{ marginBottom: '2px' }} /> Clothings
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/donation" onClick={() => setExpanded(false)}>
                <IoMdListBox style={{ marginBottom: '2px' }} /> Donation List
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={handleLogout}>
                <IoLogOut style={{ marginBottom: '2px' }} /> Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
