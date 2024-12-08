import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../Components/Provider/Authprovider";
import ListDesign from "../Components/ListDesign";

const WishList = () => {
  const wishList = useLoaderData();
  const { user } = useContext(Authcontext);
  console.log("total get ", wishList);

  const myWishlist =
    wishList?.filter((item) => item.email === user?.email) || [];
  console.log(myWishlist);
  return (
    <div>
      {myWishlist.length === 0 ? (
        <div className="text-center text-[#23f245] text-2xl font-bold mt-16 mb-40">
          You have No Data Add to Watchlist
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between bg-[#23f245] border border-blue-300 px-3 py-2 text-[#ffffff] font-bold text-xl">
            <p>GameImage</p>
            <p>GameName</p>
            <p>Genres</p>
            <p>Year</p>
            <p>Add</p>
          </div>
           {
           myWishlist.map(listed=><ListDesign key={listed._id} listed={listed}></ListDesign>)
           }
        </div>
      )}
    </div>
  );
};

export default WishList;
