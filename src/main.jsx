import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Donation from './Components/Donation/Donation.jsx'
import DonationDetails from './Components/DonationDetails/DonationDetails.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import CreditCardForm from './Components/Home/payment.jsx'
import './index.css'
import Food from './Components/Home/Food.jsx'
import Health from './Components/Home/Health.jsx'
import Education from './Components/Home/Education.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login.jsx'
import Cloths from './Components/Home/Clothings.jsx'
import Dd from './Components/DonationDetails/dd.jsx'
import Register from './pages/Register.jsx'
import Profile from './Components/Home/profile.jsx'
import ForgotPassword from './pages/Forgotpass.jsx'
import ResetPassword from './pages/reset.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/food",
        element: <Food></Food>,
      },
      {
        path: "/education",
        element: <Education></Education>,
      },
      {
        path: "/health",
        element: <Health></Health>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },

      {
        path: "/stats",
        element: <Statistics></Statistics>,
      },
      {
        path: "/pay",
        element: <CreditCardForm></CreditCardForm>,
      },
      {
        path: "/clothss",
        element: <Cloths></Cloths>,
      },
      {
        path: "/profil",
        element: <Profile></Profile>
      },
      {
        path: "/forgot",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/detail/:id",
        loader: () => fetch("/donationDat.json"),
        element: <Dd></Dd>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("/donationData.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/details1/:id",
        loader: () => fetch("/donationDateed.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/details2/:id",
        loader: () => fetch("/donationDatafo.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/details3/:id",
        loader: () => fetch("/donationDatacl.json"),
        element: <DonationDetails></DonationDetails>,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
