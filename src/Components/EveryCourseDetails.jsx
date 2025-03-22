import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaHome,
  FaLaptopCode,
  FaRegHandPointRight,
  FaUserGraduate,
} from "react-icons/fa";
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
    discount,
    _id,
  } = course;
  console.log(course);

  const audience = [
    {
      icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
      title: "Anyone interested to learn freelancing",
    },
    {
      icon: <FaBriefcase className="text-green-500 text-4xl" />,
      title: "Job seekers",
    },
    {
      icon: <FaUserGraduate className="text-yellow-500 text-4xl" />,
      title: "Students",
    },
    {
      icon: <FaHome className="text-pink-500 text-4xl" />,
      title: "Homemakers",
    },
  ];

  return (
    <div className=" pt-32 bg-[#F2F2F2] ">
      {/* <img src={course?.banner_image} alt="" /> */}
      <div className=" flex px-6 justify-between gap-3 flex-col md:flex-row-reverse w-11/12 mx-auto  shadow-sm object-cover transform transition-transform duration-100">
        <div className="p-4 md:w-[46%] w-full rounded-[60px]">
          <img
            src={banner_image}
            alt={course_name}
            className="md:h-[500px] h-[200px] w-full  mb-2 rounded-2xl md:rounded-[60px] "
          />
        </div>
        <div className="md:w-[50%] p-4 w-full ">
          <h2 className="text-[#131313] font-custom pb-3 text-2xl text-center md:text-5xl font-bold  ">
            {course_name}
          </h2>
          <h2 className="text-[#131313] pb-3 flex items-center mt-5 md:flex-row flex-col  gap-5 text-xl font-bold ">
            <div className="flex justify-between rounded-[25px] p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Duration</p>
              <p className="text-xl  font-bold">{duration}</p>
            </div>
            <div className="flex justify-between rounded-[25px] p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Fee</p>
              <p className="text-xl  font-bold">{course_fee}BDT</p>
            </div>
            <div className="flex justify-between rounded-[25px] px-12 p-8 bg-[#FFFFFF] flex-col items-center gap-2">
              <p className="text-base font-normal">Class</p>
              <p className="text-xl  font-bold">36+</p>
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
      <div className="mt-6 px-6 w-11/12 flex-col md:flex-row pb-8 mx-auto border-t-1 flex  justify-between gap-4">
        <div className="mt-0 w-full">
          {/* module */}
          <div className="mx-6">
            <h2 className="text-[#131313] font-custom pb-3 text-5xl font-bold  ">
              Course Module
            </h2>
            <h2 className="mt-3">
              {course_module.map((module) => (
                <div
                  className="flex items-center  gap-4 text-xl font-roboto font-bold"
                  key={_id}
                >
                  <FaRegHandPointRight />
                  {module}
                </div>
              ))}
            </h2>
          </div>
          {/* software */}
          <div className="mx-6 mt-12">
            <h2 className="text-[#131313] font-custom pb-3 text-5xl font-bold  ">
              Software
            </h2>
            <h2 className="mt-3">
              {software.map((module) => (
                <div
                  className="flex items-center  gap-4 text-xl font-roboto font-bold"
                  key={_id}
                >
                  <FaRegHandPointRight />
                  {module}
                </div>
              ))}
            </h2>
          </div>
        </div>

        {/* audience */}

        <div className="mt-2 flex  flex-col gap-3">
          <div className="w-full  rounded-lg mx-auto">
            <h2 className="text-5xl font-custom font-bold text-center mb-6 text-gray-800">
              This Course is Designed for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {audience.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  {item.icon}
                  <p className="mt-4 text-gray-700 text-center font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 px-6 py-4 bg-[#ffffff] rounded-2xl text-[#F83839] text-2xl font-bold font-roboto">
            🌙 Special Eid Offer! Enroll now and enjoy{" "}
            <span className="text-bold">{discount}</span> discount – Get the
            course for just {course_fee} BDT!
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryCourseDetails;
