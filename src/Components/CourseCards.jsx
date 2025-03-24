// import React from "react";
// import { NavLink } from "react-router-dom";

// const CourseCards = ({ course }) => {
//   const {
//     course_name,
//     course_fee,
//     review,
//     category,
//     banner_image,
//     duration,
//     description,
//     course_module,
//     software,
//     technology,
//     fee,
//     _id,
//   } = course;
//   console.log(course);
//   return (
//     <div className="">
//       <div className="bg-white  shadow-lg rounded-2xl overflow-hidden mt-2 h-full flex flex-col">
//         <div className="text-base">
//           <img
//             src={banner_image}
//             alt={course_name}
//             className="w-full h-[250px] object-cover"
//           />
//         </div>

//         <div className="p-2 mx-3 min-h-[200px] grid grid-rows-[auto_1fr_auto] h-full">
//           <div>
//             <h2 className="text-xl font-bold text-gray-800">{course_name}</h2>
//             <p className="text-gray-600 text-sm mt-2 min-h-[60px]">
//               {description.slice(0, 140)}...
//             </p>
//             <h2 className="text-base font-bold text-gray-800">
//               Course Duration : {duration}
//             </h2>
//           </div>

//           <div className="flex justify-between items-center w-full gap-8 mt-4">
//             <NavLink to={`/course/courseDetails/${_id}`}>
//               <button className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffffff] px-8">
//                 View Details
//               </button>
//             </NavLink>
//             <div className="py-2 font-extrabold rounded-lg bg-[#0a033cec] text-[#ffff00] px-8">
//                <del className="text-[#ffffff]">{fee} BDT</del>  {course_fee} BDT  
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCards;





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
  const discountAmount  = Math.round((fee * 30) / 100);
  const finalPrice =  Math.round(fee - discountAmount);
   console.log(discountAmount,"30%")
   console.log("total final ", finalPrice)
   const discountPercentage = Math.round(((fee - finalPrice) / fee) * 100);

  return (
    <div className="relative">
      {/* Course Card Container */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden mt-2 h-full flex flex-col border border-gray-200 transition-transform transform hover:scale-[1.030] duration-300">
        
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">
            🔥 {discountPercentage}%  OFF
          </div>
        )}

        {/* Course Image */}
        <div>
          <img
            src={banner_image}
            alt={`${course_name} course banner`}
            className="w-full h-[250px] hover:scale-[1.060] overflow-hidden duration-300  object-cover"
          />
        </div>

        {/* Course Details */}
        <div className="p-4 flex flex-col justify-between min-h-[200px]">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{course_name}</h2>
            <p className="text-gray-600 text-sm mt-2">
              {description.length > 140 ? `${description.slice(0, 140)}...` : description}
            </p>
            <h2 className="text-base font-semibold text-gray-800 mt-2">
              ⏳ Duration: <span className="text-indigo-600">{duration}</span>
            </h2>
          </div>

          {/* Pricing & CTA Button */}
          <div className="flex justify-between items-center mt-4">
            <NavLink to={`/course/courseDetails/${_id}`}>
              <button className="py-2 px-6 font-bold rounded-lg bg-[#0a033cec] text-white shadow-md transition-all duration-300 hover:bg-indigo-800">
                View Details
              </button>
            </NavLink>

            <div className="text-center">
              <del className="text-gray-500 text-sm">{fee} BDT</del>
              <h3 className="text-2xl font-bold text-red-500">{finalPrice} BDT</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCards;
