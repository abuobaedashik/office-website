import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({review}) => {
    const { image, gamename, description, rating, year, genre, email, name,_id } =
    review;
    return (
        <div className="card bg-base-100 w-96 shadow-xl ">
        <figure className='h-[200px]'>
          <img src={image} alt={gamename} />
        </figure>
        <div className="card-body">
          <div className="title flex items-center justify-between">
            <h2 className=" text-xl font-bold ">{gamename}</h2>
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
              <p>{rating}</p>
            </h2>
          </div>
          <p>{description.slice(1,200)}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{genre}</div>
            <Link to={`/allreview/${_id}`} className="badge badge-outline">Explore Details</Link>
          </div>
        </div>
      </div>
    );
};

export default Review;