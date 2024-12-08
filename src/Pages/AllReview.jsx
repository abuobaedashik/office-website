import React, { useState } from "react";
import { data, useLoaderData } from "react-router-dom";
import Review from "../Components/Review";

const AllReview = () => {
  const reviews = useLoaderData();
  const [assending,setassending]=useState([]);
  const [desending,setdesending]=useState([]);
  const [currentView, setCurrentView] = useState("default");
  
  console.log(reviews.length);
  console.log({assending,desending});
  
  const handleAssending=()=>{
     console.log("assend");
     fetch('https://game-review-server-mauve.vercel.app/reviews-asen')
     .then(res=>res.json())
     .then(data=>{
      console.log("assending",data)
      setassending(data)
      setCurrentView("ascending");
     })
  }
  const handleDessending =()=>{
    console.log("dessen");
    fetch('https://game-review-server-mauve.vercel.app/reviews-dsen')
    .then(res=>res.json())
    .then(data=>{
      console.log("desending",data)
      setdesending(data)
      setCurrentView("descending");
    })

  }
 

  return (
    <div className="mx-0 w-full mb-6  overflow-hidden">
      <div className="mt-5 mb-3">
          <div className="text-2xl text-center font-bold mb-4">All Review</div>
          <div className="text-base text-[#23f245] text-] text-center">The reviews highlight a diverse range of user opinions on popular games, emphasizing immersive gameplay, stunning graphics, and intuitive controls. Many users praised the action-packed missions and engaging storylines, particularly in shooter and adventure genres. Offline mode and multiplayer options were noted as standout features, though some suggested improvements in mission variety and reduced loading times. Reviewers also appreciated detailed environments and customization options, adding to the games replay value. Overall, the reviews provide valuable insights into the strengths and areas for improvement in modern gaming experiences.</div>
      </div>
      <div className="sortandfilter flex items-center justify-between pt-2 pb-8 w-full  font-medium ">
        <div className="sort">
          {/* sort */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="rounded-xl px-3 py-1 m-1 bg-[#23f245] text-[#ffff]">
             Sort By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={handleAssending}>Assending</a>
              </li>
              <li>
                <a onClick={handleDessending}>Desending</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="filter">
          {/* filter */}
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="rounded-xl px-3 py-1 m-1 bg-[#23f245] text-[#ffff]">
              Filter By
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        {/* {reviews.map((review) => (
          <Review key={reviews._id} review={review}></Review>
        ))} */}

        {currentView === "default" ? (
        reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))
      ) : currentView === "ascending" ? (
        assending.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))
      ) : (
        desending.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))
      )}

      </div>
    </div>
  );
};

export default AllReview;
