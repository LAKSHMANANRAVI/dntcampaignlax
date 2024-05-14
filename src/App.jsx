// import { Outlet, useLocation } from 'react-router-dom';
// import './App.css';
// import Navbar from './Components/Navbar/Navbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//     const location = useLocation();
//     console.log(location, "location");

//     return (
//         <>
//             {location.pathname === "/register" ? (
//                 <Outlet />
//             ) : (
//                 <>
//                     <div>
//                         <ToastContainer />
//                         <Navbar />
//                     </div>
//                     <Outlet />
//                 </>
//             )}
//         </>
//     );
// }

// export default App;
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Navbar/Footer';
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    const location = useLocation();
    console.log(location, "location");

    return (
        <>
            {location.pathname === "/" ? (
                <Outlet />
            ) : location.pathname === "/register" ? (
                // Render different component for the "/login" path
                <Register/>
            ) : (
                <>
                    <div>
                        <ToastContainer />
                        <Navbar />
                    </div>
                    <Outlet />
                    <Footer/>
                </>
            )}
        </>
    );
}

export default App;
