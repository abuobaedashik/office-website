import React, { useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EveryCourseDetails = () => {
  const course = useLoaderData();
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
    <div className=" pt-32 bg-[#F2F2F2] ">
      {/* <img src={course?.banner_image} alt="" /> */}
      <div className=" flex px-6 justify-between gap-3 flex-row-reverse w-11/12 mx-auto  shadow-sm object-cover transform transition-transform duration-100">
        <div className="p-4 md:w-[46%] w-full rounded-[60px]">
          <img
            src={banner_image}
            alt={course_name}
            className="h-[500px] w-full mb-2 rounded-[60px] "
          />
        </div>
        <div className="md:w-[50%] p-4 w-full ">
          <h2 className="text-[#131313] font-custom pb-3 text-5xl font-bold  ">
            {course_name}
          </h2>
          <h2 className="text-[#131313] pb-3 flex items-center mt-5  gap-5 text-xl font-bold ">
            <div className="flex justify-between rounded-[25px] p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Duration</p>
              <p className="text-xl  font-bold">{duration}</p>
            </div>
            <div className="flex justify-between rounded-[25px] p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Duration</p>
              <p className="text-xl  font-bold">{duration}</p>
            </div>
            <div className="flex justify-between rounded-[25px] p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Duration</p>
              <p className="text-xl  font-bold">{duration}</p>
            </div>
          </h2>
          {/* feature */}
          {/* <Link
            to={`details/${_id}`}
            className=" w-full btn bg-[#F83839] hover:bg-[#127384] text-center font-bold flex items-center justify-center text-[#ffffff]"
          >
            <button className="text-center">Book Now</button>
          </Link> */}
          <div className="mt-3 text-xl font-bold font-roboto">
            {description}
          </div>
          <div className="mt-1 text-xl  font-roboto">
            Our IT Course is designed to equip students with fundamental and
            advanced skills in information technology, covering areas such as
            programming, networking, cybersecurity, database management, and web
            development. Whether you're a beginner looking to start a career in
            IT or a professional seeking to upgrade your skills, this course
            provides hands-on training and real-world applications.
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button className="px-4 py-3 text-[#ffffff] font-roboto font-bold bg-[#F83839] rounded-2xl">
              Free Seminar
            </button>
            <button className="px-4 py-3 text-[#ffffff] font-roboto font-bold bg-[#F83839] rounded-2xl">
              Free Seminar
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 px-6 w-11/12 pb-8 mx-auto border-t-1 border-[#000000] ">
        <div className="mx-6">
          <h2 className="text-[#131313] font-custom pb-3 text-5xl font-bold  ">
            Course Module 
          </h2>
          <h2 className="mt-3">{course_module.map(module=><div className="flex items-center  gap-4 text-xl font-roboto font-bold" key={_id}>
            <FaRegHandPointRight />
            {module}
          </div>)}</h2>
        </div>
      </div>
    </div>
  );
};

export default EveryCourseDetails;
