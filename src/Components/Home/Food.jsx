import React, { useState } from 'react';
import CardsContainer from '../CardsSection/CardsContainer';
import "./Banner.css"
import CardsContainer2 from '../CardsSection/CardsContainer2';

const Food = () => {
    let [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = e.target.name.value;
        setInputValue(input);
    };

    return (
        <div>
            
            <div >
                <CardsContainer2 inputValue={inputValue}></CardsContainer2>
            </div>
        </div>
    );
};

export default Food;