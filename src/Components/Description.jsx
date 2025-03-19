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

const Description = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useState(500);
  const prependNumber = useState(1);

  // Slide content array containing image paths and descriptions
  const slides = [
    { imgSrc: design, description: "Graphic Design" },
    { imgSrc: web, description: "WEB Development" },
    { imgSrc: office, description: "Office Application" },
    { imgSrc: digitalmarket, description: "Digital Marketing" },
    { imgSrc: net, description: "Networking & Handwork" },
    { imgSrc: english, description: "English Language" },
    { imgSrc: diploma, description: "1 Year Diploma" },
  ];

  const prepend = () => {
    // Add logic for prepending slides if necessary
  };

  const append = () => {
    // Add logic for appending slides if necessary
  };

  const slideTo = (index) => {
    if (swiperRef) swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className="w-11/12 mx-auto pb-32">
      <div className="flex flex-col items-center justify-center py-4 ">
        <div className="mt-12 mb-2 text-4xl text-center font-extrabold font-custom">
          Find Your Career Direction
        </div>
        <div className=" text-lg text-center mb-16">
          {" "}
          Choose the Right Course to Build Your Dream Career
        </div>
      </div>
      <Marquee gradient={false} speed={40} pauseOnHover>
        {/* design */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={design} alt={design} className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
              Graphic Design
            </p>
          </div>
        </div>

        {/* { imgSrc: design, description: "Graphic Design" },
    { imgSrc: web, description: "WEB Development" },
    { imgSrc: office, description: "Office Application" },
    { imgSrc: digitalmarket, description: "Digital Marketing" },
    { imgSrc: net, description: "Networking & Handwork" },
    { imgSrc: english, description: "English Language" },
    { imgSrc: diploma, description: "1 Year Diploma" }, */}

        {/* web  */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={web} alt="web design" className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
              Web Development
            </p>
          </div>
        </div>
        {/* marketing */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={digitalmarket} alt='web' className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
             Digital Marketing
            </p>
          </div>
        </div>
        {/* networking */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={net} alt='net' className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
            Networking & Handwork
            </p>
          </div>
        </div>
        {/* office */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={office} alt='office' className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
              Office Applications
            </p>
          </div>
        </div>
        {/* eng */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={english} alt='eng' className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
            English Language
            </p>
          </div>
        </div>
        {/* diploma */}
        <div className="slide-content  mx-6   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
          <div className="slide-content bg-[#ffffff] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-5 rounded-3xl">
            <img src={diploma} alt='diploma' className="slide-image" />
            <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
            1 Year Diploma
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Description;
