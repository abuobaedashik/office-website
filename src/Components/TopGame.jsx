import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TopGame = ({ topsix }) => {
  // eslint-disable-next-line react/prop-types
  const { image, gamename, description,genre, rating, name, _id } = topsix;

  return (
    <div className="">
      <div
        className="card bg-[#3C3D37]
       text-neutral-content shadow-xl"
      >
        <figure>
          <img
            src={image}
            alt={gamename}
            className="w-full h-40 object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <div className="name-riview flex items-center justify-between">
            <div className="name">
              <h2 className="card-title text-lg font-semibold">{gamename}</h2>
              <p className="text-sm text-left  text-gray-400">{name}</p>
            </div>
            <div className="review flex items-center gap-2">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <p className="text-base font-medium ">({rating}/10)</p>
            </div>
          </div>
          <div className="card-actions justify-between mt-3">
            <button className="btn btn-primary btn-sm">{genre}</button>
            <Link
              to={`/allreview/${_id}`}
              className="btn btn-secondary btn-sm flex items-center gap-1"
            >
              <AiOutlineInfoCircle size={18} />
              Explore Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopGame;
