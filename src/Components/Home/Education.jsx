import React, { useState } from 'react';
import CardsContainer from '../CardsSection/CardsContainer';
import "./Banner.css"
import CardsContainer1 from '../CardsSection/CardsContainer1';

const Education = () => {
    let [inputValue] = useState('');

   

    return (
        <div>
            <div >
                <CardsContainer1 inputValue={inputValue}></CardsContainer1>
            </div>
        </div>
    );
};

export default Education;