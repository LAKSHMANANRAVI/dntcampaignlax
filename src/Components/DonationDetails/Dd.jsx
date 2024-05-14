import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Dds from './dds';
const Dd = () => {
    let detailedData = useLoaderData();
    let { id } = useParams();
    let idInt = parseInt(id);
    let detail = detailedData.find(detail => detail.id === idInt);

    return (
        <div>
            <Dds detail={detail}></Dds>
        </div>
    );
};

export default Dd;