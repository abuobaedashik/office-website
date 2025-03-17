import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

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
    <div>
       <div className="flex flex-col items-center justify-center">
       <div className="mt-32 mb-2 text-4xl text-center font-extrabold font-custom">
        Find Your Career Direction
      </div>
      <div className=" text-lg text-center mb-16"> Choose the Right Course to Build Your Dream Career</div>
       </div>

      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        initialSlide={0}
        loop={false}
        virtual
      >
        <div className="">
          {slides.map((slide, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className="slide-content bg-[#ADB2D4] mx-auto   p-12 w-[200px] h-[200px] items-center justify-center flex flex-col gap-2 rounded-3xl">
                <img
                  src={slide.imgSrc}
                  alt={slide.description}
                  className="slide-image"
                />
                <p className="text-lg leading-5 font-bold text-[#A31D1D] ">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <p className="append-buttons">
        <button onClick={prepend} className="prepend-2-slides">
          {/* Prepend 2 Slides */}
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          {/* Slide 1 */}
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          {/* Slide 250 */}
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          {/* Slide 500 */}
        </button>
        <button onClick={append} className="append-slides">
          {/* not */}
        </button>
      </p>
    </div>
  );
};

export default Description;
