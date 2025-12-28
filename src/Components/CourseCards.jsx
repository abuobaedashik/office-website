import React from "react";
import { NavLink } from "react-router-dom";

const CourseCards = ({ course }) => {
  const {
    course_name,
    course_fee,
    review,
    category,
    banner_image,
    duration,
    description,
    fee,
    _id,
  } = course;

  // Calculate Discount Percentage
  const discountAmount = Math.round((fee * 30) / 100);
  const finalPrice = Math.round(fee - discountAmount);
  console.log(discountAmount, "30%")
  console.log("total final ", finalPrice)
  const discountPercentage = Math.round(((fee - finalPrice) / fee) * 100);

  return (
    <div className="relative">
      {/* Course Card Container */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden mt-2 h-full flex flex-col border border-gray-200 transition-transform transform hover:scale-[1.030] duration-300">

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
            {discountPercentage}%  OFF
          </div>
        )}

        {/* Course Image */}
        <div>
          <img
            src={banner_image}
            alt={`${course_name} course banner`}
            className="w-full h-[250px] hover:scale-[1.060]  duration-300  object-cover"
          />
        </div>

        {/* Course Details */}
        <div className="p-4 flex flex-col justify-between min-h-[200px]">
          <div>
            <h2 className="text-xl font-roboto font-bold text-gray-900">{course_name}</h2>
            <p className="text-gray-600 font-roboto text-sm mt-2">
              {description.length > 140 ? `${description.slice(0, 140)}...` : description}
            </p>
            <h2 className="text-base  font-robotofont-semibold text-gray-800 mt-2">
               Duration: <span className="text-indigo-600">{duration}</span>
            </h2>
          </div>

          {/* Pricing & CTA Button */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-center flex gap-2 items-center justify-center font-roboto">
              <h3 className="text-2xl font-bold text-red-500">{finalPrice} BDT</h3>
              <del className="text-gray-500 text-sm">{fee} BDT</del>
            </div>
            <NavLink to={`/course/courseDetails/${_id}`}>
              <button className="px-4 py-2 rounded-2xl font-bold bg-[#FF2E2E] hover:bg-[#1F2937] text-white font-BBH">
                Enroll
              </button>
            </NavLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseCards;
