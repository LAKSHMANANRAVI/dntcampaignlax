// // // // // // import React from "react";
// // // // // // import {
// // // // // //   MDBBtn,
// // // // // //   MDBCard,
// // // // // //   MDBCardBody,
// // // // // //   MDBCol,
// // // // // //   MDBContainer,
// // // // // //   MDBInput,
// // // // // //   MDBRow,
// // // // // // } from "mdb-react-ui-kit";

// // // // // // export default function CreditCardForm() {
// // // // // //   return (
// // // // // //     <MDBContainer
// // // // // //       className="py-5"
// // // // // //       fluid
// // // // // //       style={{
// // // // // //         backgroundImage:
// // // // // //           "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
// // // // // //       }}
// // // // // //     >
// // // // // //       <MDBRow className=" d-flex justify-content-center">
// // // // // //         <MDBCol md="10" lg="8" xl="5">
// // // // // //           <MDBCard className="rounded-3">
// // // // // //             <MDBCardBody className="p-4">
// // // // // //               <div className="text-center mb-4">
// // // // // //                 <h3>Settings</h3>
// // // // // //                 <h6>Payment</h6>
// // // // // //               </div>
// // // // // //               <p className="fw-bold mb-4 pb-2">Saved cards:</p>
// // // // // //               <div className="d-flex flex-row align-items-center mb-4 pb-1">
// // // // // //                 <img
// // // // // //                   className="img-fluid"
// // // // // //                   src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
// // // // // //                 />
// // // // // //                 <div className="flex-fill mx-3">
// // // // // //                   <div className="form-outline">
// // // // // //                     <MDBInput
// // // // // //                       label="Card Number"
// // // // // //                       id="form1"
// // // // // //                       type="text"
// // // // // //                       size="lg"
// // // // // //                       value=" "
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <a href="#!">Remove card</a>
// // // // // //               </div>
// // // // // //               <div className="d-flex flex-row align-items-center mb-4 pb-1">
// // // // // //                 <img
// // // // // //                   className="img-fluid"
// // // // // //                   src="https://img.icons8.com/color/48/000000/visa.png"
// // // // // //                 />
// // // // // //                 <div className="flex-fill mx-3">
// // // // // //                   <div className="form-outline">
// // // // // //                     <MDBInput
// // // // // //                       label="Card Number"
// // // // // //                       id="form2"
// // // // // //                       type="text"
// // // // // //                       size="lg"
// // // // // //                       value=" "
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //                 <a href="#!">Remove card</a>
// // // // // //               </div>
// // // // // //               <p className="fw-bold mb-4">Add new card:</p>
// // // // // //               <MDBInput
// // // // // //                 label="Cardholder's Name"
// // // // // //                 id="form3"
// // // // // //                 type="text"
// // // // // //                 size="lg"
// // // // // //                 value=" "
// // // // // //               />
// // // // // //               <MDBRow className="my-4">
// // // // // //                 <MDBCol size="7">
// // // // // //                   <MDBInput
// // // // // //                     label="Card Number"
// // // // // //                     id="form4"
// // // // // //                     type="text"
// // // // // //                     size="lg"
// // // // // //                     value=" "
// // // // // //                   />
// // // // // //                 </MDBCol>
// // // // // //                 <MDBCol size="3">
// // // // // //                   <MDBInput
// // // // // //                     label="Expire"
// // // // // //                     id="form5"
// // // // // //                     type="password"
// // // // // //                     size="lg"
// // // // // //                     placeholder="MM/YYYY"
// // // // // //                   />
// // // // // //                 </MDBCol>
// // // // // //                 <MDBCol size="2">
// // // // // //                   <MDBInput
// // // // // //                     label="CVV"
// // // // // //                     id="form6"
// // // // // //                     type="password"
// // // // // //                     size="lg"
// // // // // //                     placeholder="CVV"
// // // // // //                   />
// // // // // //                 </MDBCol>
// // // // // //               </MDBRow>
// // // // // //               <MDBBtn color="success" size="lg" block>
// // // // // //                 Add card
// // // // // //               </MDBBtn>
// // // // // //             </MDBCardBody>
// // // // // //           </MDBCard>
// // // // // //         </MDBCol>
// // // // // //       </MDBRow>
// // // // // //     </MDBContainer>
// // // // // //   );
// // // // // // }
// // // // // import React, { useState, useEffect, useCallback } from "react";
// // // // // import useRazorpay from "react-razorpay"; // Importing RazorpayOptions
// // // // // import "bootstrap/dist/css/bootstrap.min.css";

// // // // // const CreditCardForm = () => {
// // // // //   const [Razorpay, isLoaded] = useRazorpay();
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [amount, setAmount] = useState("");
// // // // //   const [errorMessage, setErrorMessage] = useState("");

// // // // //   const createOrder = async (amount) => {
// // // // //     try {
// // // // //       const response = await fetch("YOUR_API_ENDPOINT", {
// // // // //         method: "POST",
// // // // //         headers: {
// // // // //           "Content-Type": "application/json",
// // // // //           // Add any necessary headers for authentication or other purposes
// // // // //         },
// // // // //         body: JSON.stringify({ amount }), // Send amount to server
// // // // //       });
// // // // //       if (!response.ok) {
// // // // //         throw new Error("Failed to create order");
// // // // //       }
// // // // //       return await response.json();
// // // // //     } catch (error) {
// // // // //       throw new Error("Failed to create order. Please try again later.");
// // // // //     }
// // // // //   };

// // // // //   const handlePayment = useCallback(async () => {
// // // // //     if (!amount) {
// // // // //       setErrorMessage("Please enter the amount to proceed with payment");
// // // // //       return;
// // // // //     }

// // // // //     // Clear previous error message
// // // // //     setErrorMessage("");

// // // // //     // Create an order on your server
// // // // //     try {
// // // // //       setLoading(true);
// // // // //       const order = await createOrder(amount);

// // // // //       const options = {
// // // // //         amount: amount * 100, // Convert to smallest currency unit (e.g., paise for INR)
// // // // //         currency: "INR",
// // // // //         name: "Acme Corp",
// // // // //         description: "Test Transaction",
// // // // //         image: "https://example.com/your_logo",
// // // // //         order_id: order.id,
// // // // //         handler: (response) => {
// // // // //           // Handle success callback
// // // // //           alert(`Payment successful: ${response.razorpay_payment_id}`);
// // // // //         },
// // // // //         prefill: {
// // // // //           name: "Piyush Garg",
// // // // //           email: "youremail@example.com",
// // // // //           contact: "9999999999",
// // // // //         },
// // // // //         notes: {
// // // // //           address: "Razorpay Corporate Office",
// // // // //         },
// // // // //         theme: {
// // // // //           color: "#3399cc",
// // // // //         },
// // // // //         modal: {
// // // // //           // Enable netbanking and UPI payment options
// // // // //           netbanking: true,
// // // // //           upi: true,
// // // // //         },
// // // // //       };

// // // // //       const rzpay = new Razorpay(options);
// // // // //       rzpay.open();
// // // // //     } catch (error) {
// // // // //       setErrorMessage(error.message);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }, [Razorpay, amount]);

// // // // //   useEffect(() => {
// // // // //     // Automatically initiate payment when Razorpay script is loaded
// // // // //     if (isLoaded) {
// // // // //       handlePayment();
// // // // //     }
// // // // //   }, [isLoaded, handlePayment]);

// // // // //   return (
// // // // //     <div className="container">
// // // // //       <div className="row justify-content-center">
// // // // //         <div className="col-md-6">
// // // // //           <div className="card mt-5">
// // // // //             <div className="card-body">
// // // // //               <h1 className="card-title">Razorpay Payment Gateway Integration</h1>
// // // // //               <div className="form-group">
// // // // //                 <input
// // // // //                   type="number"
// // // // //                   className="form-control"
// // // // //                   placeholder="Enter amount"
// // // // //                   value={amount}
// // // // //                   onChange={(e) => setAmount(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <button
// // // // //                 className="btn btn-primary"
// // // // //                 onClick={handlePayment}
// // // // //                 disabled={loading}
// // // // //               >
// // // // //                 {loading ? "Processing..." : "Pay Now"}
// // // // //               </button>
// // // // //               {errorMessage && (
// // // // //                 <p className="text-danger mt-3">{errorMessage}</p>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CreditCardForm;
// // import React, { useState, useEffect, useCallback } from "react";
// // import useRazorpay from "react-razorpay"; // Importing RazorpayOptions
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { json } from "react-router-dom";
// // import imdc from "../../../Resources/DClogo.png"

// // const CreditCardForm = () => {
// //   const [Razorpay, isLoaded] = useRazorpay();
// //   const [loading, setLoading] = useState(false);
// //   const [amount, setAmount] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");


// //   const createOrder = async (amount) => {
    
// //     await new Promise(resolve => setTimeout(resolve, 1000));
// //     return {};
// //   };

// //   const handlePayment = useCallback(async () => {
// //     if (!amount) {
// //       setErrorMessage("Please enter the amount to proceed with payment");
// //       return;
// //     }

// //     setErrorMessage("");
// //     localStorage.setItem("amount",JSON.stringify(amount) )

// //     try {
// //       setLoading(true);
// //       const order = await createOrder(amount);

// //       const options = {
// //         key: "rzp_test_jCElT5imQChGnd", 
// //         amount: amount * 100, 
// //         currency: "INR",
// //         name: "Donation Campaign",
// //         description: "Test Transaction",
// //         image: "../../../Resources/DClogo.png",
// //         handler: (response) => {
// //           alert(`Payment successful: ${response.razorpay_payment_id}`);
// //         },
// //         prefill: {
// //           name: "Piyush Garg",
// //           email: "lakshmanan251277@gmail.com",
// //           contact: "9994116723",
// //         },
// //         notes: {
// //           address: "Razorpay Corporate Office",
// //         },
// //         theme: {
// //           color: "#3399cc",
// //         },
// //         modal: {
// //           netbanking: true,
// //           upi: true,
// //         },
// //       };

// //       const rzpay = new Razorpay(options);
// //       rzpay.open();
// //     } catch (error) {
// //       setErrorMessage(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [Razorpay, amount]);

  

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card mt-5">
// //             <div className="card-body">
// //               <h1 className="card-title">Razorpay Payment Gateway Integration</h1>
// //               <div className="form-group">
// //                 <input
// //                   type="number"
// //                   className="form-control"
// //                   placeholder="Enter amount"
// //                   value={amount}
// //                   onChange={(e) => setAmount(e.target.value)}
// //                   style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}

// //                 />
// //               </div>
// //               <div style={{ textAlign: 'center' }}>

// //               <button
// //                 className="btn btn-primary"
// //                 onClick={handlePayment}
// //                 disabled={loading}
// //                 style={{ backgroundColor: '#cd3555', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', fontSize: '0.875rem', borderRadius: '0px' }}

// //               >
                
// //                 {loading ? "Processing..." : "Pay Now"}
// //               </button>
// //               </div>
// //               {errorMessage && (
// //                 <p className="text-danger mt-3">{errorMessage}</p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreditCardForm;
// // import React, { useState, useEffect, useCallback } from "react";
// // import useRazorpay from "react-razorpay"; // Importing RazorpayOptions
// // import "bootstrap/dist/css/bootstrap.min.css";

// // const CreditCardForm = () => {
// //   const [Razorpay, isLoaded] = useRazorpay();
// //   const [loading, setLoading] = useState(false);
// //   const [amount, setAmount] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");

// //   // Simulating the behavior of the Razorpay createOrder API
// //   const createOrder = async (amount) => {
// //     // Simulate the delay of API request
// //     await new Promise((resolve) => setTimeout(resolve, 1000));

// //     // Return an empty object
// //     return {};
// //   };

// //   const handlePayment = useCallback(async () => {
// //     if (!amount) {
// //       setErrorMessage("Please enter the amount to proceed with payment");
// //       return;
// //     }

// //     // Clear previous error message
// //     setErrorMessage("");

// //     // Create an order on your server
// //     try {
// //       setLoading(true);
// //       const order = await createOrder(amount);

// //       const options = {
// //         key: "rzp_test_jCElT5imQChGnd", // Replace with your actual key
// //         amount: amount * 100, // Convert to smallest currency unit (e.g., paise for INR)
// //         currency: "INR",
// //         name: "Acme Corp",
// //         description: "Test Transaction",
// //         image: "https://example.com/your_logo",
// //         // Remove order_id from options
// //         handler: (response) => {
// //           // Handle success callback
// //           alert(`Payment successful: ${response.razorpay_payment_id}`);
// //         },
// //         prefill: {
// //           name: "Piyush Garg",
// //           email: "youremail@example.com",
// //           contact: "9999999999",
// //         },
// //         notes: {
// //           address: "Razorpay Corporate Office",
// //         },
// //         theme: {
// //           color: "#3399cc",
// //         },
// //         modal: {
// //           // Enable netbanking and UPI payment options
// //           netbanking: true,
// //           upi: true,
// //           // Enable QR code for UPI
// //           qr: true,
// //         },
// //       };

// //       const rzpay = new Razorpay(options);
// //       rzpay.open();
// //     } catch (error) {
// //       setErrorMessage(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [Razorpay, amount]);

// //   useEffect(() => {
// //     // Automatically initiate payment when Razorpay script is loaded
// //     if (isLoaded) {
// //       handlePayment();
// //     }
// //   }, [isLoaded, handlePayment]);

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card mt-5">
// //             <div className="card-body">
// //               <h1 className="card-title">Razorpay Payment Gateway Integration</h1>
// //               <div className="form-group">
// //                 <input
// //                   type="number"
// //                   className="form-control"
// //                   placeholder="Enter amount"
// //                   value={amount}
// //                   onChange={(e) => setAmount(e.target.value)}
// //                 />
// //               </div>
// //               <button
// //                 className="btn btn-primary"
// //                 onClick={handlePayment}
// //                 disabled={loading}
// //               >
// //                 {loading ? "Processing..." : "Pay Now"}
// //               </button>
// //               {errorMessage && (
// //                 <p className="text-danger mt-3">{errorMessage}</p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreditCardForm;
// import React, { useState, useEffect, useCallback } from "react";
// import useRazorpay from "react-razorpay"; // Importing RazorpayOptions
// import "bootstrap/dist/css/bootstrap.min.css";
// import { json } from "react-router-dom";
// import imdc from "../../../Resources/DClogo.png";

// const CreditCardForm = () => {
//   const [Razorpay, isLoaded] = useRazorpay();
//   const [loading, setLoading] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const calculateAdjustedAmount = (originalAmount) => {
//     // Perform your 80C tax deduction calculation here
//     // For example, deduct 10% of the original amount
//     const taxDeductedAmount = originalAmount * 0.10;
//     return originalAmount - taxDeductedAmount;
//   };

//   const createOrder = async (amount) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return {};
//   };

//   const handlePayment = useCallback(async () => {
//     if (!amount) {
//       setErrorMessage("Please enter the amount to proceed with payment");
//       return;
//     }

//     setErrorMessage("");
//     localStorage.setItem("amount", JSON.stringify(amount));

//     try {
//       setLoading(true);
//       const adjustedAmount = calculateAdjustedAmount(amount);
//       const order = await createOrder(adjustedAmount);

//       const options = {
//         key: "rzp_test_jCElT5imQChGnd",
//         amount: adjustedAmount * 100,
//         currency: "INR",
//         name: "Donation Campaign",
//         description: "Test Transaction",
//         image: "../../../Resources/DClogo.png",
//         handler: (response) => {
//           alert(`Payment successful: ${response.razorpay_payment_id}`);
//         },
//         prefill: {
//           name: "Piyush Garg",
//           email: "lakshmanan251277@gmail.com",
//           contact: "9994116723",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//         modal: {
//           netbanking: true,
//           upi: true,
//         },
//       };

//       const rzpay = new Razorpay(options);
//       rzpay.open();
//     } catch (error) {
//       setErrorMessage(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, [Razorpay, amount]);

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card mt-5">
//             <div className="card-body">
//               <h1 className="card-title">
//                 Razorpay Payment Gateway Integration
//               </h1>
//               <div className="form-group">
//                 <input
//                   type="number"
//                   className="form-control"
//                   placeholder="Enter amount"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   style={{
//                     width: "100%",
//                     padding: "8px",
//                     borderRadius: "4px",
//                     border: "1px solid #ccc",
//                   }}
//                 />
//               </div>
//               <div style={{ textAlign: "center" }}>
//                 <button
//                   className="btn btn-primary"
//                   onClick={handlePayment}
//                   disabled={loading}
//                   style={{
//                     backgroundColor: "#cd3555",
//                     color: "#fff",
//                     border: "none",
//                     padding: "10px 20px",
//                     cursor: "pointer",
//                     fontSize: "0.875rem",
//                     borderRadius: "0px",
//                   }}
//                 >
//                   {loading ? "Processing..." : "Pay Now"}
//                 </button>
//               </div>
//               {errorMessage && (
//                 <p className="text-danger mt-3">{errorMessage}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreditCardForm;
// import React from "react";

// const CreditCardForm = () => {
//   return (
//     <div>
//       <iframe
//         title="Razorpay Payment Form"
//         src="https://pages.razorpay.com/pl_NtHDX9rtFmKRjm/view"
//         frameBorder="0"
//         scrolling="no"
//         style={{ width: "100%", height: "800px" }}
//       ></iframe>
//     </div>
//   );
// };

// export default CreditCardForm;
import React, { useEffect } from "react";

const CreditCardForm = () => {
  useEffect(() => {
    // Function to modify the content inside the iframe
    const modifyIframeContent = () => {
      const iframe = document.querySelector("iframe");
      if (iframe) {
        // Wait for the iframe to load
        iframe.onload = () => {
          // Access the content window of the iframe
          const iframeWindow = iframe.contentWindow;
          if (iframeWindow) {
            // Access the document inside the iframe
            const iframeDocument = iframeWindow.document;
            if (iframeDocument) {
              // Modify the title and any other content
              const titleElement = iframeDocument.querySelector(".title");
              if (titleElement) {
                titleElement.textContent = "Donation campaign";
              }
              // You can similarly modify other elements here
            }
          }
        };
      }
    };

    modifyIframeContent();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        // Select the element by its class
        const titleElement = document.querySelector('.title');

        // Check if the element is found
        if (titleElement) {
            // Log the content of the element to the console
            console.log(titleElement.textContent);
        } else {
            console.log('Element not found');
        }
    }, 5000); // Check every 5 seconds (5000 milliseconds)

    // Clean up interval on component unmount
    return () => clearInterval(interval);
}, [])

  return (
    <div style={{marginTop:'12vh'}}>
      <iframe
        title="Razorpay Payment Form"
        src="https://rzp.io/l/lL3PqOY"
        frameBorder="0"
        scrolling="no"
        style={{ width: "100%", height: "800px" }}
      ></iframe>
    </div>
  );
};

export default CreditCardForm;
