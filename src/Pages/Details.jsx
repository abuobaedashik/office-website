import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
   const everyReview =useLoaderData()
   const { image, gamename, description, rating, year, genre, email, name,_id } =
   everyReview;
    return (
        <div>
            details
            {gamename}
            <img src={image} alt="" className='w-[full] h-[400px]'/>
        </div>
    );
};

export default Details;