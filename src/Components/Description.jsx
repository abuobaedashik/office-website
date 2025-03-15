import React from "react";
import design from "../../src/assets/design.png";
import web from "../../src/assets/web.png";
import office from "../../src/assets/office.png";
import english from "../../src/assets/icons8-english-96.png";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Description = () => {
  return (
    <div>
      <div className="mt-6 mb-6 text-4xl text-center font-bold  font-custom">
        Find Your Career Direction
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-between gap-5 p-2 px-4 bg-[#E9762B] rounded-2xl">
            <div>
              <img src={design} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Graphics & Multimedia</p>
              <p className="text-base font-bold">2 Course</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-between gap-5 p-2 px-4 bg-[#FF8989] rounded-2xl">
            <div>
              <img src={web} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Web Design & Development</p>
              <p className="text-base font-bold">2 Course</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-between gap-5 p-2 px-4 bg-[#ffff00] rounded-2xl">
            <div>
              <img src={office} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Basic Computer</p>
              <p className="text-base font-bold">1 Course</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-between gap-5 p-2 px-4 bg-[#66D2CE] rounded-2xl">
            <div>
              <img src={english} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Microsoft Office</p>
              <p className="text-base font-bold">1 Course</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-between gap-5 p-2 px-4 bg-[#66D2CE] rounded-2xl">
            <div>
              <img src={english} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Microsoft Office</p>
              <p className="text-base font-bold">1 Course</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex items-center flex-col justify-between gap-5 p-2 px-4 bg-[#66D2CE] rounded-2xl">
            <div>
              <img src={english} alt="" className="w-[80px] h-[80px]" />
            </div>
            <div>
              <p className="text-xl font-bold">Microsoft Office</p>
              <p className="text-base font-bold">1 Course</p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

      {/* <div className="mt-8 text-xl flex items-center justify-between gap-3 flex-col md:flex-row p-3">
      
      </div> */}
    </div>
  );
};

export default Description;
