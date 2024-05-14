import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Cards2 from './Cards2';
import backgroundImage from '../../../Resources/donati.jpg';


const CardsContainer2 = ({ inputValue }) => {
    let [cardData, setCardData] = useState([]);

    console.log("cardData",cardData);
    useEffect(() => {
        fetch("/donationDatafo.json")
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
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center',marginTop:'12vh', minHeight: '86vh', justifyContent: 'center', alignItems: 'center',overflowY:'scroll' }}>

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
  
              {
                  filteredCardData.map(cardData => <Cards2 key={cardData.id} cardData={cardData}></Cards2>)
              }
  
          </div>
          </div>
          </div>
          </div>
    );
};

export default CardsContainer2;
