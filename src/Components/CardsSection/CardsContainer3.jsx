import React, { useEffect, useState } from 'react';
import Cards3 from './Cards3';
import backgroundImage from '../../../Resources/donati.jpg';

// import './../../../Resources/DCVI.mp4'
const CardsContainer3 = ({ inputValue }) => {
    let [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("/donationDatacl.json")
            .then(res => res.json())
            .then(data => setCardData(data));
    }, []);

    let filteredCardData = cardData;
    if (inputValue !== '') {
        filteredCardData = cardData.filter((cardData) => {
            return cardData.category.toLowerCase() === inputValue.toLowerCase();
        });
    }

    return (
        
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',marginTop:'12vh', backgroundPosition: 'center', minHeight: '86vh', justifyContent: 'center', alignItems: 'center',overflowY:'scroll' }}>

        <div
        style={{
          display: 'flex',
        //   alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
        }}
      >
          <div className='w-[80%] mx-auto space-y-6 mb-12'>
          <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' style={{marginTop:'5vh'}}>

                        {filteredCardData.map(cardData => <Cards3 key={cardData.id} cardData={cardData}></Cards3>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsContainer3;
