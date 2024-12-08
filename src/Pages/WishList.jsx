import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Components/Provider/Authprovider';
import ListDesign from '../Components/ListDesign';

const WishList = () => {
    const wishList = useLoaderData()
    const { user } = useContext(Authcontext);
      console.log("total get ",wishList);

      const myWishlist = wishList?.filter(item => item.email === user?.email) || [];
      console.log(myWishlist);
    return (
        <div>
            {
          myWishlist.length === 0 ? (<div className="text-center text-[#23f245] text-2xl font-bold mt-16 mb-40">You have No Data Add to Watchlist</div>):(
          
          <ListDesign mywishList={myWishlist}></ListDesign>)

        }
        <div className="flex items-center"></div>
        </div>
    );
};

export default WishList;