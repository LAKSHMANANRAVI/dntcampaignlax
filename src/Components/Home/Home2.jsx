// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import myImg from "./DClogo.png";
// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="home-about-section" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="home-about-description">
//             <h1 style={{ fontSize: "2.6em" }}>
//                <span className="purple"> DONATION </span> CAMPAIGN
//             </h1>
//             <p className="home-about-body">
//             Thank you for considering making a donation. Your contribution helps us continue our mission
//            and support those in need.
//               <br/>
//               <br/>
//             To get started, simply select a cause you'd like to support and follow the instructions
//           to make your donation.
//               <br />
//               <br />Every contribution, 
//               <i>
//                 <b className="purple">no matter how big or small, is greatly appreciated.</b>
//               </i>
//               <br />
//               <br />

//               <i>
//                 <b className="purple"> Together, we can make a difference! </b> 
                
//               </i>
//               <br />
//               <br />
//               Support our donation campaign aimed at providing essential resources for education, healthcare, food, and clothing. Every contribution matters in ensuring that children and families in need have access to quality education, medical care, nutritious meals, and warm clothing. <b className="purple"> Your generosity will directly impact lives, empowering individuals to thrive and build a brighter future. Together, we can make a significant difference and create a world where everyone has the opportunity to live healthy, educated, and fulfilled lives. Join us in this meaningful endeavor and be a part of positive change in our communities.</b> and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern Javascript Library and Frameworks
//                 </b>
//               </i>
//               &nbsp; like
//               <i>
//                 <b className="purple"> React.js and Next.js</b>
//               </i>
//             </p>
//           </Col>
//           <Col md={4} className="myAvtar">
//             <Tilt>
//               <img src={myImg} className="img-fluid" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
        
//       </Container>
//     </Container>
//   );
// }
// export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "./DClogo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> DONATION </span> CAMPAIGN
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
             
              <br />
              Support our donation campaign aimed at providing essential resources for education, healthcare, food, and clothing. Every contribution matters in ensuring that children and families in need have access to quality education, medical care, nutritious meals, and warm clothing.{" "}
              <b className="purple">Your generosity will directly impact lives, empowering individuals to thrive and build a brighter future. Together, we can make a significant difference and create a world where everyone has the opportunity to live healthy, educated, and fulfilled lives. Join us in this meaningful endeavor and be a part of positive change in our communities.</b>{" "}
              and{" "}
              Thank you for considering making a donation. Your contribution helps us continue our mission and support those in need.
              <br/>
              
        
              <br />
              To get started, simply select a cause you'd like to support and follow the instructions to make your donation. Every contribution,{" "}
              <i>
                <b className="purple">no matter how big or small, is greatly appreciated. Together, we can make a difference!</b>
              </i>
              <br />
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
