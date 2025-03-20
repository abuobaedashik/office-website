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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Description = () => {
  // Slide content array containing image paths and descriptions
  const category = [
    { imgSrc: design, description: "Graphics Design" },
    { imgSrc: web, description: "Web Design and Development" },
    { imgSrc: office, description: "Office Application" },
    { imgSrc: digitalmarket, description: "Digital Marketing" },
    { imgSrc: net, description: "Networking & Hardware" },
    { imgSrc: english, description: "English Language" },
    { imgSrc: diploma, description: "Diploma Program" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-11/12 mx-auto pb-8">
      <div className="flex flex-col  mx-auto  items-center justify-center">
        <div className="mt-12 mb-2 text-4xl text-center font-extrabold font-custom">
          Find Your Career Direction
        </div>
        <div className=" text-lg text-center mb-16">
          {" "}
          Choose the Right Course to Build Your Dream Career
        </div>
      </div>

      {/* <Marquee gradient={false} speed={40} pauseOnHover>
       
        {category.map((slide, index) => (
            <NavLink to={`/category/${slide.description}`} key={index} className="slide-content  mx-6    p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
              <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
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
      </Marquee> */}

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        showDots={false}
        arrows={true}
        
      >
        {category.map((slide, index) => (
          <NavLink
            to={`/category/${slide.description}`}
            key={index}
            className="mx-2 p-6 w-[300px] h-[200px] flex flex-col items-center justify-center gap-5 rounded-3xl  shadow-md bg-gradient-to-r from-[#7fceae] to-[#7a7ad8] bg-white"
          >
            <img
              src={slide.imgSrc}
              alt={slide.description}
              className="w-24 h-24"
            />
            <p className="text-lg font-extrabold   text-[#1F2937]  text-center">
              {slide.description}
            </p>
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export default Description;
