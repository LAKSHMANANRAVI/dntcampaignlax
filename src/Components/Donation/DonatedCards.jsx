import React from 'react';
import { Link } from 'react-router-dom';

const DonatedCards = ({ cardData }) => {
    let { id, picture, category, title, card_bg, category_bg, txt_btn_bg, price } = cardData;

    let bgStyle = {
        backgroundColor: `${card_bg}`
    }
    let categoryBg = {
        backgroundColor: `${category_bg}`
    }
    let textColor = {
        color: `${txt_btn_bg}`
    }
    let btnColor = {
        backgroundColor: `${txt_btn_bg}`
    }
    let combinedStyle = {
        ...categoryBg,
        ...textColor,
    }


    return (


        <div className={`rounded-lg flex gap-2`}  style={bgStyle}>
            <div>
                <img className='h-[150px] object-cover w-[200px] rounded-tl-lg rounded-bl-lg' src={picture} alt="" />
            </div>
            <div className='py-2 px-3 space-y-1'>
                <div>
                    <h3 style={combinedStyle} className={`inline-block text-sm rounded-lg py-1 px-2 mt-2`}>{category}</h3>
                </div>
                <h3 className={`text-base md:text-xl font-semibold`}>{title}</h3>
                <h4 className='font-semibold text-sm' style={textColor}></h4>
                <Link to={`/detail/${id}`}>
                    <button style={btnColor} className='py-1 text-sm md:text-base md:py-2 px-3 mt-3 text-white font-semibold rounded-lg'>View Details</button>
                </Link>
            </div>
        </div >
    );
};

export default DonatedCards;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DonatedCards = ({ cardData }) => {
//     const { id, picture, category, title, card_bg, category_bg, txt_btn_bg, price } = cardData;

//     const bgStyle = {
//         backgroundColor: card_bg
//     };

//     const categoryBg = {
//         backgroundColor: category_bg
//     };

//     const textColor = {
//         color: txt_btn_bg
//     };

//     const btnColor = {
//         backgroundColor: txt_btn_bg
//     };

//     const combinedStyle = {
//         ...categoryBg,
//         ...textColor,
//     };

//     // Array of paths for the details
//     const detailPaths = [`/details/${id}`];

//     // State to store the current index of the detail path
//     const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

//     // State to store the current details
//     const [currentDetails, setCurrentDetails] = useState(null);

//     // Function to fetch details based on the current path
//     const fetchDetails = () => {
//         const currentPath = detailPaths[currentDetailIndex];
//         console.log("Fetching details for:", currentPath);
//         // Here you would fetch the details associated with the currentPath and update currentDetails state
//         // For demonstration, let's set a mock detail value
//         setCurrentDetails(`Details for path ${currentPath}`);
//     };

//     // Function to handle button click
//     const handleViewDetails = () => {
//         fetchDetails();
//         setCurrentDetailIndex((currentDetailIndex + 1) % detailPaths.length); // Move to the next detail path
//     };

//     return (
//         <div className="rounded-lg flex gap-2" style={bgStyle}>
//             <div>
//                 <img className="h-[170px] object-cover w-[200px] rounded-tl-lg rounded-bl-lg" src={picture} alt="" />
//             </div>
//             <div className="py-2 px-3 space-y-1">
//                 <div>
//                     <h3 style={combinedStyle} className="inline-block text-sm rounded-lg py-1 px-2 mt-2">{category}</h3>
//                 </div>
//                 <h3 className="text-base md:text-xl font-semibold">{title}</h3>
//                 <h4 className="font-semibold text-sm" style={textColor}></h4>
//                 <div>
//                     {/* Render a single button */}
//                     <button
//                         style={btnColor}
//                         className="py-1 text-sm md:text-base md:py-2 px-3 mt-3 text-white font-semibold rounded-lg"
//                         onClick={handleViewDetails}
//                     >
//                         View Details
//                     </button>
//                 </div>
//                 {/* Display current details */}
//                 {currentDetails && <p>{currentDetails}</p>}
//             </div>
//         </div>
//     );
// };

// export default DonatedCards;
