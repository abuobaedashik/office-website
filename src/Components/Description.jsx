import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Marquee from "react-fast-marquee";

// Image imports (You can replace the URLs with your actual image paths)
import design from "../../src/assets/web/design2.png";
import web from "../../src/assets/web/web2.png";
import office from "../../src/assets/office.png";
import digitalmarket from "../../src/assets/web/digital.png";
import net from "../../src/assets/web/net.png";
import english from "../../src/assets/web/english.png";
import diploma from "../../src/assets/web/diploma3.png";
import Category from "../Pages/CourseCategories/Category";
import { NavLink } from "react-router-dom";

const Description = () => {


  // Slide content array containing image paths and descriptions
  const category = [
    { imgSrc: design, description: "Graphics Design" },
    { imgSrc: web, description: "Web Design and Development" },
    { imgSrc: office, description: "Office Application" },
    { imgSrc: digitalmarket, description: "Digital Marketing" },
    { imgSrc: net, description: "Networking & Handwork" },
    { imgSrc: english, description: "English Language" },
    { imgSrc: diploma, description: "Diploma Program" },
  ];


  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-12 mb-2 text-4xl text-center font-extrabold font-custom">
          Find Your Career Direction
        </div>
        <div className=" text-lg text-center mb-16">
          {" "}
          Choose the Right Course to Build Your Dream Career
        </div>
      </div>

     
      <Marquee gradient={false} speed={40} pauseOnHover>
       
        {category.map((slide, index) => (
            <NavLink to={`/category/${slide.description}`} key={index} className="slide-content  mx-6    p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
              <div className="slide-content bg-[#ADB2D4] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
                <img
                  src={slide.imgSrc}
                  alt={slide.description}
                  className="slide-image"
                />
                <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
                  {slide.description}
                </p>
              </div>
            </NavLink>
          ))}
      </Marquee>
    </div>
  );
};

export default Description;
