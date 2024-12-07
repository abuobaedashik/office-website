import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Components/Review";

const AllReview = () => {
  const reviews = useLoaderData();
  console.log(reviews.length);
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {
      reviews.map(review =><Review key={reviews._id} review={review}></Review>)
      }
   </div>
  );
};

export default AllReview;
