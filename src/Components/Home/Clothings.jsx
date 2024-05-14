import React, { useState } from 'react';
import CardsContainer from '../CardsSection/CardsContainer';
import "./Banner.css"
import CardsContainer3 from '../CardsSection/CardsContainer3';

const Cloths = () => {
    let [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.name.value;
        setInputValue(input);
    };

    return (
        <div>
            
            <div >
                <CardsContainer3 inputValue={inputValue}></CardsContainer3>
            </div>
        </div>
    );
};

export default Cloths;