import React, { useEffect, useState } from 'react';
import DonatedCards from './DonatedCards';
import backgroundImage from '../../../Resources/donat.jpg'
const Donation = () => {
    let [donations, setDonations] = useState([]);
    let [noDonations, setNoDonations] = useState(false);
    let [showAll, setShowAll] = useState(false);
    useEffect(() => {
        const donated = JSON.parse(localStorage.getItem("donationCards"));

        if (donated) {
            setDonations(donated);
        }
        else {
            setNoDonations("No Donations Found");
        }
    }, [])



    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'12vh', minHeight: '86vh', display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY:'scroll' }}>

        <div>
            {noDonations ? (
                <h1 className='text-4xl text-[#0B0B0B] font bold h-[70vh] flex justify-center items-center'>{noDonations}</h1>
            ) : (
                <div>
<div className='w-[80%] mx-auto space-y-6 mb-12'>
          <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>                        {showAll ? (
                            donations.map((cardData) => (
                                <DonatedCards key={cardData.id} cardData={cardData} />
                            ))
                        ) : (
                            donations.slice(0, 6).map((cardData) => (
                                <DonatedCards key={cardData.id} cardData={cardData} />
                            ))
                        )}
                    </div>
                    </div>
                    <div className={`mt-5 flex justify-center ${showAll ? "hidden" : ""}`}>
                        {donations.length > 6 && (
                            <button
                                className='px-5 py-3 bg-[#009444] text-white font-semibold rounded-lg'
                                onClick={() => setShowAll(!showAll)}
                            >
                                See All
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Donation;

// import React, { useEffect, useState } from 'react';
// import DonatedCards from './DonatedCards';

// const Donation = () => {
//     const [donationCard, setDonationCard] = useState(null);

//     useEffect(() => {
//         // Retrieve card details from local storage
//         const storedCard = localStorage.getItem('donationCards');
//         if (storedCard) {
//             setDonationCard(JSON.parse(storedCard));
//         }
//     }, []);

//     console.log(donationCard, "donationCard");
//     return (
//         <div>
//             {donationCard ? (
//                 <div>
                    
//                     {/* Display other card details */}
//                     {/* Insert the provided code snippet here */}
//                     <div>
//                         <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-[90%] mx-auto mb-10'>
//                             <DonatedCards key={donationCard.id} cardData={donationCard} />
//                         </div>
//                         <div className='mt-5 flex justify-center'>
//                             {/* This button is not needed in this context */}
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <h1 className='text-4xl text-[#0B0B0B] font bold h-[70vh] flex justify-center items-center'>
//                     No Donation Card Found
//                 </h1>
//             )}
//         </div>
//     );
// };

// export default Donation;
