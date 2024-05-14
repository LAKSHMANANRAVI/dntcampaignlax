// // import React from 'react';
// // import Swal from 'sweetalert2'

// // let DonationDetailsDisplay = ({ details }) => {
// //     if (!details) {
// //         // Handle the case when details is undefined
// //         return <div>Loading...</div>;
// //     }

// //     let { id, picture, title, description, price, txt_btn_bg, pay_link } = details;

// //     let btnColor = {
// //         backgroundColor: `${txt_btn_bg}`
// //     }

// //     let handleAddToDonation = () => {
// //         localStorage.setItem('donationCard', JSON.stringify(details));
// //         // Navigate to the payment link
// //         window.location.href = "/pay";

// //         // You may still want to execute some code here if needed, but
// //         // the navigation to the payment link will happen regardless.
// //     }

// //     return (
// //         <div>
// //             <div className='w-[90%] mx-auto space-y-6 mb-12'>
// //                 <div className='w-full relative'>
// //                     <img className='w-full h-[57vh] object-cover rounded-lg' src={picture} alt="" />
                    
// //                     <div className='bg-black w-full py-2 md:py-6 lg:py-10 px-3 md:px-6 bg-opacity-50 absolute bottom-0'>
// //                         <button style={btnColor} onClick={handleAddToDonation} className='px-3 md:px-4 py-2 md:py-3 rounded-lg text-white'>Payment </button>
// //                     </div>
// //                 </div>

// //                 <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
// //                 <p className='text-[#0b0b0bb3]'>{description}</p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default DonationDetailsDisplay;
// // import React, { useState, useEffect, useCallback } from "react";
// // import useRazorpay from "react-razorpay"; // Importing RazorpayOptions
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import Swal from 'sweetalert2';

// // const DonationDetailsDisplay = ({ details }) => {
// //   const [Razorpay, isLoaded] = useRazorpay();
// //   const [loading, setLoading] = useState(false);
// //   const [amount, setAmount] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");

// //   const { id, picture, title, description, price, txt_btn_bg } = details;

// //   const btnColor = {
// //     backgroundColor: `${txt_btn_bg}`
// //   };

// //   const handlePaymentAndDonation = useCallback(async () => {
// //     if (!amount) {
// //       setErrorMessage("Please enter the amount to proceed with payment");
// //       return;
// //     }

// //     // Clear previous error message
// //     setErrorMessage("");

// //     // Create an order on your server
// //     try {
// //       setLoading(true);

// //       // Simulating the behavior of the Razorpay createOrder API
// //       await new Promise((resolve) => setTimeout(resolve, 1000));

// //       // Donation logic
// //       let donationArr = [];
// //       let donatedData = JSON.parse(localStorage.getItem("donation"));

// //       if (!donatedData) {
// //         donationArr.push(details);
// //         localStorage.setItem("donation", JSON.stringify(donationArr));
// //         Swal.fire('You have Succesfully Donated!', 'Good Job!', 'success');
// //       } else {
// //         let donationExists = donatedData.find((detail) => detail.id === id);
// //         if (!donationExists) {
// //           donationArr.push(...donatedData, details);
// //           localStorage.setItem("donation", JSON.stringify(donationArr));
// //           Swal.fire('You have Succesfully Donated!', 'Good Job!', 'success');
// //         } else {
// //           Swal.fire({
// //             icon: 'error',
// //             title: 'Donation Already Added...',
// //             text: 'Please Select other Donation Section!'
// //           });
// //         }
// //       }

// //       // Payment logic
// //       const options = {
// //         key: "rzp_test_jCElT5imQChGnd", // Replace with your actual key
// //         amount: amount * 100, // Convert to smallest currency unit (e.g., paise for INR)
// //         currency: "INR",
// //         name: "Acme Corp",
// //         description: "Test Transaction",
// //         image: "https://example.com/your_logo",
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
// //           qr: true, // Enable QR code for UPI
// //         },
// //       };

// //       const rzpay = new Razorpay(options);
// //       rzpay.open();
// //     } catch (error) {
// //       setErrorMessage(error.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [Razorpay, amount, details, id]);

// //   useEffect(() => {
// //     // Automatically initiate payment when Razorpay script is loaded
// //     if (isLoaded) {
// //       handlePaymentAndDonation();
// //     }
// //   }, [isLoaded, handlePaymentAndDonation]);

// //   return (
// //     <div className="container">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card mt-5">
// //             <div className="card-body">
// //               <h1 className="card-title">Payment and Donation Form</h1>
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
// //                 onClick={handlePaymentAndDonation}
// //                 disabled={loading}
// //               >
// //                 {loading ? "Processing..." : "Donate and Pay Now"}
// //               </button>
// //               {errorMessage && (
// //                 <p className="text-danger mt-3">{errorMessage}</p>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div>
// //         <div className='w-[90%] mx-auto space-y-6 mb-12'>
// //           <div className='w-full relative'>
// //             <img className='w-full h-[80vh] object-cover rounded-lg' src={picture} alt="" />
// //             <div className='bg-black w-full py-2 md:py-6 lg:py-10 px-3 md:px-6 bg-opacity-50 absolute bottom-0'>
// //               <button style={btnColor} onClick={handlePaymentAndDonation} className='px-3 md:px-4 py-2 md:py-3 rounded-lg text-white'>Donate ${price}</button>
// //             </div>
// //           </div>

// //           <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
// //           <p className='text-[#0b0b0bb3]'>{description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DonationDetailsDisplay;
// import React from 'react';

// let DonationDetailsDisplay = ({ details }) => {
//     if (!details) {
//         // Handle the case when details is undefined
//         return <div>Loading...</div>;
//     }

//     let { id, picture, title, description, price, txt_btn_bg, pay_link } = details;

//     let btnColor = {
//         backgroundColor: `${txt_btn_bg}`
//     }

//     let handleAddToDonation = () => {
//         // Store all the details in local storage
//               // Retrieve existing donation cards from local storage or initialize an empty array
//               let donationCards = JSON.parse(localStorage.getItem('donationCards')) || [];

//               // Push the current details into the array
//               donationCards.push(details);
      
//               // Save the updated array back to local storage
//               localStorage.setItem('donationCards', JSON.stringify(donationCards));
//         // Navigate to the payment link
//         window.location.href = "/pay";

//         // You may still want to execute some code here if needed, but
//         // the navigation to the payment link will happen regardless.
//     }

//     return (
//         <div>
//             <div className='w-[90%] mx-auto space-y-6 mb-12'>
//                 <div className='w-full relative'>
//                     <img className='w-full h-[57vh] object-cover rounded-lg' src={picture} alt="" />
                    
//                     <div className='bg-black w-full py-2 md:py-6 lg:py-10 px-3 md:px-6 bg-opacity-50 absolute bottom-0'>
//                         <button style={btnColor} onClick={()=>handleAddToDonation()} className='px-3 md:px-4 py-2 md:py-3 rounded-lg text-white'>Payment </button>
//                     </div>
//                 </div>

//                 <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
//                 <p className='text-[#0b0b0bb3]'>{description}</p>
//             </div>
//         </div>
//     );
// };

// export default DonationDetailsDisplay;
import React, { useEffect, useState } from 'react';
import backgroundImage from '../../../Resources/donati.jpg';

const DonationDetailsDisplay = ({ details }) => {
    const [isCardAdded, setIsCardAdded] = useState(false);

    useEffect(() => {
        // Check if the card is already in local storage
        const donationCards = JSON.parse(localStorage.getItem('donationCards')) || [];
        const cardExists = donationCards.some(card => card.id === details.id);
        setIsCardAdded(cardExists);
    }, [details]);

    const handleAddToDonation = () => {
        // Store the details in local storage
        let donationCards = JSON.parse(localStorage.getItem('donationCards')) || [];
        donationCards.push(details);
        localStorage.setItem('donationCards', JSON.stringify(donationCards));
        
        // Navigate to the payment link
        window.location.href = "/pay";
        history.push('/donation');
    };

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'12.5vh', minHeight: '86vh', justifyContent: 'center', alignItems: 'center',overflowY:'scroll' }}>
            <div className='w-[90%] mx-auto space-y-6 mb-12'>
                <div className='w-full relative'>
                    <img className='w-full h-[57vh] object-cover rounded-lg' style={{marginTop:'3vh'}} src={details.picture} alt="" />
                    
                    <div className='bg-black w-full py-2 md:py-6 lg:py-10 px-3 md:px-6 bg-opacity-50 absolute bottom-0'>
                        <button
                            onClick={handleAddToDonation}
                            disabled={isCardAdded}
                            className={`px-3 md:px-4 py-2 md:py-3 rounded-lg bg-black text-white ${isCardAdded ? 'opacity-100 cursor-not-allowed' : ''}`}
                        >
                            {isCardAdded ? 'Already Added' : 'Payment'}
                        </button>
                    </div>
                </div>

                <h2 className='text-[#fff] font-bold text-4xl'>{details.title}</h2>
                <p className='text-[#fff]'>{details.description}</p>
            </div>
        </div>
    );
};

export default DonationDetailsDisplay;
