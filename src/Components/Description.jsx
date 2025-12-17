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
import quran from "../../src/assets/quran.png";
import diploma from "../../src/assets/web/diploma3.png";
import ict from "../../src/assets/ict-logo.png";
import Category from "../Pages/CourseCategories/Category";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CommonHeader } from "./Ui/CommonHeader";

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
    { imgSrc: quran, description: "Islamic Studies" },
    { imgSrc: ict, description: "School ICT Curriculum" },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-11/12 z-0 mx-auto pb-8">
      {/* dynamic header */}
      <CommonHeader textTitle=" Find Your Career Direction " textSubTitle="Choose the Right Course to Build Your Dream Career "></CommonHeader>
      {/* card section */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        showDots={false}
        
        
        
      >
        {category.map((slide, index) => (
          <NavLink
            to={`/category/${slide.description}`}
            key={index}
            className="flex items-center justify-center flex-col gap-3"
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
