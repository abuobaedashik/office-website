import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Image imports (You can replace the URLs with your actual image paths)
import design from "../../src/assets/design.png";
import web from "../../src/assets/web.png";
import office from "../../src/assets/office.png";
import english from "../../src/assets/icons8-english-96.png";

const Description = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useState(500);
  const prependNumber = useState(1);

  // Slide content array containing image paths and descriptions
  const slides = [
    { imgSrc: design, description: "Graphic Design" },
    { imgSrc: web, description: "Web Development" },
    { imgSrc: office, description: "Office Work" },
    { imgSrc: english, description: "Multimedia Content" },
    { imgSrc: design, description: "Regular Image" },  // Can be replaced with a different image
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
      <div className="mt-6 mb-6 text-4xl text-center font-bold font-custom">
        Find Your Career Direction
      </div>

      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        virtual
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="slide-content bg-[#66D2CE] p-12 items-center justify-center flex flex-col gap-2 rounded-lg">
              <img src={slide.imgSrc} alt={slide.description} className="slide-image" />
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
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
