import React, { useState } from 'react';
import CardsContainer from '../CardsSection/CardsContainer';
import "./Banner.css"

const Health = () => {
    let [inputValue] = useState('');

  
    return (
        <div>
            
            <div >
                <CardsContainer inputValue={inputValue}></CardsContainer>
            </div>
        </div>
    );
};

export default Health;