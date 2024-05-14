import React from 'react';
import backgroundImage from '../../../Resources/do1.jpg'
const Dds = ({ detail }) => {
    const { picture, title, description } = detail;

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '89.9vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='w-[80%] mx-auto space-y-3 mb-12' style={{marginTop:"20vh"}}>
                <div className='w-full relative'>
                    <img className='w-full h-[60vh] object-cover rounded-lg' src={picture} alt="" />
                </div>
                <h2 className='text-[#0B0B0B] font-bold text-4xl'>{title}</h2>
                <p className='text-[#0b0b0bb3]'>{description}</p>
            </div>
        </div>
    );
};

export default Dds;
