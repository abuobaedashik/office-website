import React from 'react';
import { MdOutlineBookmark } from 'react-icons/md';

const ListDesign = ({listed}) => {
   console.log(listed);
   const {image,gamename,description,rating,year,genre,email, name}=listed;
    return (
        <div>
         <div className="  font-medium  bg-[#51cd65] text-base flex items-center justify-between border border-blue-300 px-5 py-2">
            <p><img src={image} alt="" className="w-20 h-20" /></p>
            <p>{gamename}</p>
            <p>{genre}</p>
            <p>{year}</p>
            <p><MdOutlineBookmark></MdOutlineBookmark></p>
          </div>
        </div>
    );
};

export default ListDesign;