// // // import React, { useState } from 'react';
// // // import CardsContainer from '../CardsSection/CardsContainer';
// // // import "./Banner.css"

// // // const Home = () => {
// // //     let [inputValue, setInputValue] = useState('');

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         let input = e.target.name.value;
// // //         setInputValue(input);
// // //     };

// // //     return (
// // //         <div>
// // //             <div className='flex h-[85vh] justify-center items-center bg'>
// // //                 <div className='space-y-10'>
// // //                     <div className="text ">
// // //                         <h1 className='font-bold text-[#0B0B0B] text-center text-4xl md:text-5xl '>I Grow By Helping People In Need</h1>
// // //                     </div>
// // //                     <div className=''>
// // //                         <form onSubmit={handleSubmit} className='w-full flex justify-center items-center'>
// // //                             <input className='w-[50%] border border-gray-300 p-3 rounded-tl-lg rounded-bl-lg placeholder:font-normal' type="text" placeholder='Search Here' name='name' />
// // //                             <button className='py-[13px] px-4 text-white font-bold bg-[#FF444A] rounded-tr-lg rounded-br-lg' type="submit">Search</button>
// // //                         </form>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //             <div >
// // //                 <CardsContainer inputValue={inputValue}></CardsContainer>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default Home;

// // import React from 'react';
// // import './DonationIntroPage.css'; // Import CSS for styling
// // // import './../../../Resources/DCVI.mp4'
// // import backgroundImage from '../../../Resources/home.jpg'
// // const Home = () => {
// //   return (
// //     <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '89.9vh', justifyContent: 'center', alignItems: 'center' }}>

// //     <div className="donation-intro-container">
// //       {/* <video autoPlay loop muted className="donation-video">
// //         <source src="./../../../Resources/DCVI.mp4" type="video/mp4" />
// //         Your browser does not support the video tag.
// //       </video> */}
// //       <div className="donation-intro-text">
// //         <h2 style={{color:'black'}}>Welcome to Our Donation Platform</h2>
// //         <p style={{color:'black'}}>
// //           Thank you for considering making a donation. Your contribution helps us continue our mission
// //           and support those in need. Together, we can make a difference!
// //         </p>
// //         <p style={{color:'black'}}>
// //           To get started, simply select a cause or project you'd like to support and follow the instructions
// //           to make your donation. Every contribution, no matter how big or small, is greatly appreciated.
// //         </p>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Home;
// import React from 'react';
// import './DonationIntroPage.css'; // Import CSS for styling
// import backgroundImage from '../../../Resources/home.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const Home = () => {
//   return (
//     <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '89.9vh', justifyContent: 'center', alignItems: 'center' }}>

//     <div className="donation-intro-container">
//       <div className="donation-intro-text">
//         <h2 className="text-dark">Welcome to Our Donation Platform</h2>
//         <p className="text-dark">
//           Thank you for considering making a donation. Your contribution helps us continue our mission
//           and support those in need. Together, we can make a difference!
//         </p>
//         <p className="text-dark">
//           To get started, simply select a cause or project you'd like to support and follow the instructions
//           to make your donation. Every contribution, no matter how big or small, is greatly appreciated.
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home5.jpg"
import Particle from "./Practicle"
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <div style={{marginTop:'12vh'}} >
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                DONATION
                <strong className="main-name"> CAMPAIGN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
    </div>
  );
}

export default Home;