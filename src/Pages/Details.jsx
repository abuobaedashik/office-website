import React from "react";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const everyReview = useLoaderData();
  const {
    image,
    gamename,
    description,
    rating,
    year,
    genre,
    email,
    name,
    _id,
  } = everyReview;
  return (
    <div>
      {/* <img src={image} alt="" className='w-[full] h-[400px]'/> */}
      <div className="flex justify-center mt-5 mb-10 flex-col sm:flex-row gap-[5%]">
        <div className="image-sec w-[45%]">
          <img src={image} alt="" className="w-[full] h-[600px]" />
        </div>
        {/* right side */}
        <div className="text-sec w-[45%]  flex flex-col items-start gap-1">
          <div className="mt-4 text-3xl font-bold flex items-center">{gamename} <span className="text-2xl font-medium ml-3 mt-1">({year})</span></div>
          <h2 className="text-sm font-medium">Revier {name}</h2>
          <h2 className="text-sm font-medium">Revier Email {email}</h2>
          <h2 className="flex items-center gap-2 text-base font-normal ">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 w-3 h-3 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 w-3 h-3 bg-yellow-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 w-3 h-3 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 w-3 h-3 bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 w-3 h-3 bg-yellow-400"
              />
            </div>
            <p>({rating}/10)</p>
          </h2>
          <h2 className="text-base mt-5 pr-4  text-justify">
          <div className="font-bold mr-2">{gamename} Review</div> {description.slice(0,250)}
            <p>
            {gamename} is a highly engaging and action-packed shooting game that delivers a {genre} for fans of the genre. With its cinematic graphics, intense gameplay, and offline mode, it stands out as one of the best mobile shooting games available.
            </p>
          </h2>
          <h2 className="text-base mt-3 pr-4  text-justify">
           <div className="font-bold mr-2">Gameplay</div>The gameplay is fast-paced and mission-oriented, where players take on roles of elite soldiers to complete diverse objectives. The controls are smooth and intuitive, ensuring precision in every move. Each mission offers unique challenges, from sniper tasks to all-out assaults, keeping the game exciting throughout.
          </h2>

        <div className="flex items-center justify-start gap-4">
         <h2 className="text-base px-4 py-1 rounded-lg font-semibold bg-[#2edc14d4] mt-3">
            {genre}
          </h2>
          <h2 className="text-base px-2 py-2 rounded-lg font-semibold bg-[#2edc14d4] mt-3">
            <MdFavorite />
          </h2>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Details;
