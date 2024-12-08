import React from "react";
import { MdFavorite } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const everyReview = useLoaderData();
  const { image, gamename, description, rating, year, genre, email, name } = everyReview;

  const handleFavorite = (review) => {
    fetch(`http://localhost:5000/watchlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add to watchlist");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Added to watchlist!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to add to watchlist");
      });
  };

  return (
    <div className="flex justify-center mt-5 mb-10 flex-col sm:flex-row gap-[5%]">
      {/* Left Side */}
      <div className="image-sec w-[45%]">
        <img src={image} alt={gamename} className="w-full h-[600px] object-cover" />
      </div>

      {/* Right Side */}
      <div className="text-sec w-[45%] flex flex-col items-start gap-2">
        <h1 className="text-3xl font-bold">
          {gamename} <span className="text-2xl font-medium ml-3">({year})</span>
        </h1>
        <h2 className="text-sm font-medium">Reviewer: {name}</h2>
        <h2 className="text-sm font-medium">Reviewer Email: {email}</h2>
        
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <div className="rating flex">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name="rating"
                className={`mask mask-star-2 w-3 h-3 ${i < rating ? "bg-yellow-400" : "bg-gray-300"}`}
                disabled
              />
            ))}
          </div>
          <p className="text-base font-semibold">({rating}/10)</p>
        </div>

        {/* Genre */}
        <span className="text-base px-4 py-1 font-semibold border-2 rounded-md border-[#2edc14d4]">
          {genre}
        </span>

        {/* Description */}
        <p className="mt-4 text-justify">
          <strong>{gamename} Review:</strong> {description.slice(0, 250)}
        </p>

        <p className="mt-2 text-justify">
          <strong>Gameplay:</strong> The gameplay is fast-paced and mission-oriented, where players take on roles of elite soldiers to complete diverse objectives. The controls are smooth and intuitive, ensuring precision in every move. Each mission offers unique challenges, from sniper tasks to all-out assaults, keeping the game exciting throughout.
        </p>

        {/* Watchlist Button */}
        <button
          onClick={() => handleFavorite(everyReview)}
          className="text-base px-4 py-2 flex items-center gap-2 rounded-lg font-semibold bg-[#2edc14d4] mt-3"
        >
          <MdFavorite /> My Watchlist
        </button>
      </div>
    </div>
  );
};

export default Details;
