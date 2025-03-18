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
    course_module,
    software,
    technology,
    _id,
  } = course;
  console.log(course);
  return (
    <div className="">
      <div className="bg-white border border-blue-500 shadow-lg rounded-2xl overflow-hidden mt-2 h-full flex flex-col">
        <div className="text-base">
          <img
            src={banner_image}
            alt={course_name}
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="p-2 mx-3 min-h-[200px] grid grid-rows-[auto_1fr_auto] h-full">
          <div>
            <h2 className="text-xl font-bold text-gray-800">{course_name}</h2>
            <p className="text-gray-600 text-sm mt-2 min-h-[60px]">
              {description.slice(0, 140)}...
            </p>
            <h2 className="text-base font-bold text-gray-800">
              Course Duration : {duration}
            </h2>
          </div>

          <div className="flex justify-between items-center w-full gap-8 mt-4">
            <NavLink to={`/course/courseDetails/${_id}`}>
              <button className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffffff] px-8">
                View Details
              </button>
            </NavLink>
            <button className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffff00] px-8">
              {course_fee} BDT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
