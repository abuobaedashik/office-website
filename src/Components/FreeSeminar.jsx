import React from "react";
import { BiChalkboard } from "react-icons/bi"; // React Icon
import seminarImage from "../../src/assets/seminere-image.jpeg";
import { useTypewriter } from "react-simple-typewriter";

const FreeSeminar = () => {
  const [text] = useTypewriter({
    words: [
      "Discover, Learn & Grow with Our Seminar!",
      "Unlock New Insights: Join Our Exclusive Seminar!",
      "Learn, Grow & Shine in the Tech Industry",
      "Explore, Learn & Become a Tech Expert",
      "From Zero to Hero Your Tech Journey Awaits",
    ],
    loop: 0,
  });
  return (
    <div className="max-w-[1290px]   mx-6 bg-gradient-to-r from-[#FDEAED] to-[#FFFFFF] py-4 md:py-12 rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 gap-10">
        {/* Left Content */}
        <div className="md:w-[50%] w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3 ">
            <BiChalkboard className="text-[#d99904] text-6xl font-roboto" />
            Join Our <span className="text-[#d99904]">Free Seminars</span>
          </h1>
          <div className="mt-5 text-xl text-[#024CAA] font-medium font-nunito h-[34px] ">
            <span>{text}</span>
          </div>
          <p className="py-6 text-gray-700 leading-relaxed text-lg font-roboto">
            Need guidelines to choose a suitable course? Join our free
            seminars to consult with our experts. They will help you pick the
            perfect course that matches your interest and discuss career
            prospects in tech.
          </p>
          <button className="px-4 py-2 rounded-2xl font-bold bg-[#FF2E2E] hover:bg-[#1F2937] text-white font-BBH">
            Join Seminar
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-[45%] w-full">
          <img
            src={seminarImage}
            alt="Seminar"
            className="w-full max-w-md md:max-w-lg rounded-lg object-cover h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FreeSeminar;
