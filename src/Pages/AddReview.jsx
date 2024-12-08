import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Authcontext } from "../Components/Provider/Authprovider";

const AddReview = () => {
  const { user } = useContext(Authcontext);
   const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const gamename = form.gamename.value;
    const description = form.description.value;
    const ratingInt = form.rating.value;
    const rating =parseFloat(ratingInt);
    const year = form.year.value;
    const genre = form.genre.value;
    const email = form.email.value;
    const name = form.name.value;
    const newReviews = {image,gamename,description,rating,year,genre,email, name};
    console.log(newReviews);
    fetch('https://game-review-server-mauve.vercel.app/reviews',{
        method:'POST',
        headers:{
          'content-type':'application/json'},
        body:JSON.stringify(newReviews)
      })
      .then(res=>res.json())
     .then(data=>{
       if (data.insertedId) {
        Swal.fire({
            title: "Thanks",
            text: "Your Review Added !",
            icon: "success"
          });
       }
     })
   }
  
    return (
    <div>
      <div className="py-6 ">
        <form onSubmit={handleSubmit} className="p-5 ">
          <div className="flex items-center flex-col mx-auto px-6 py-3 w-8/12  bg-[#F4F3F0] ">
            <div className="text-xl font-semibold mt-3 mb-5">Add Review</div>
            {/* image and game name*/}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1 ">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Game Cover Image</span>
                <input
                  type="text"
                  placeholder="Enter Game name"
                  name="image"
                  className="  input-accent px-5 py-1 rounded-md "
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Game Name</span>
                <div className="w-full">
                  <input
                    type="text"
                    name="gamename"
                    placeholder="Game Name"
                    className="w-full input-accent px-5 py-1 rounded-md "
                  />
                </div>
              </div>
            </div>
            {/* description and rating*/}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Review Description</span>
                <input
                  type="text"
                  name="description"
                  placeholder="Enter Review Description"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Rating</span>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  placeholder="Enter Rating"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div>
            {/* year and genre */}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Publishing Year</span>
                <input
                  type="text"
                  name="year"
                  placeholder="publishing year"
                  className="w-full input-accent px-5 py-1 rounded-md "
                />
              </div>
              {/* dropdown input */}
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Genres</span>
                <select name="genre" className="w-full input-accent px-5 py-1 rounded-md ">
                  <option disabled selected>
                     Genres
                  </option>
                  <option>Action</option>
                  <option>Animation</option>
                  <option>RPG</option>
                  <option>Adventure</option>
                </select>
              </div>
            </div>
            {/* <div className=" grid grid-cols-1 items-center gap-2 w-full">
              <div className="flex  flex-col gap-1">
                <span className="my-2 ">Photo URL</span>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Photo url"
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div> */}
            {/* email and user name */}
            <div className=" grid md:grid-cols-2 grid-cols-1 items-center gap-4 w-full">
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold ">Email</span>
                <input
                  type="email"
                  name="email"
                  value={user?.email}
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
              <div className="flex  flex-col gap-1">
                <span className="ml-2 mt-2 mb-1 text-base font-semibold">User Name</span>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  className="w-full input-accent px-5 py-1 rounded-md"
                />
              </div>
            </div>


            {/* button */}
            <div className=" grid grid-cols-1 items-center gap-2 w-full">
              <button className=" bg-[#D2B48C] w-full input-accent px-5 py-1 rounded-md text-[#ffffff] my-4 mt-5">
                Add Review
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
