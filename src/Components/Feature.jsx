import React from "react";
import img from "../assets/web3.jpg";
import { NavLink } from "react-router-dom";

const Feature = () => {
  const today = new Date();

  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  return (
    <div>
      <div
        className=" w-full bg-cover bg-center bg-fixed backdrop-blur-3xl pt-28  py-24 px-6 text-white "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="mt-4 mb-16 relative  text-[#ffffff]">
          <div className="md:w-4/12 mx-auto text-center mt-2 ">
            <h1 className="md:text-base text-sm font-normal text-[#d99904] mb-2 ">
              ---Check it out---
            </h1>
            <h1 className="md:text-4xl text-xl uppercase font-bold md:border-y-4 border-y-2 py-4 border-[#E8E8E8]  text-[#ffffff]">
              Featured Section
            </h1>
          </div>
        </div>
        <div className="mt-4 flex items-center z-30 justify-between mx-auto w-11/12 relative py-8 px-2 md:flex-row">
          <img
            src={img}
            className="md:w-[45%] h-[350px] w-full "
            alt="FeatureImage"
          />
          <div className="md:w-[45%] w-full ">
            <div className="text-xl  font-semibold">
              {" "}
              {month} {day}, {year}
            </div>
            <div className="mt-4 text-[#D99904] text-xl font-semibold uppercase">
              3D Cluster – Learn, Grow, Succeed!
            </div>
            <div className="mt-4 text-base mb-6">
              We provide expert-led training in [key subjects] to help you
              develop in-demand skills. Our hands-on approach ensures practical
              learning, career growth, and real-world experience. Join us today
              and build a better future!
            </div>
            <NavLink to={'/about'} className="px-4  py-2 hover:bg-[#1F2937] text-xl font-bold uppercase text-[#ffffff] rounded-lg border-b-2 mt-12 border-[#ffffff]">
              Read More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
