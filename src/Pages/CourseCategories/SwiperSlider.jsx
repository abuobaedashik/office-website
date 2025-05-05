import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ban1 from "../../assets/banner/banner1.jpeg";
import ban2 from "../../assets/banner/banner2.jpeg";
import ban3 from "../../assets/banner/banner3.jpeg";
import ban4 from "../../assets/banner/banner4.jpeg";
import ban5 from "../../assets/banner/banner5.jpeg";
import ban6 from "../../assets/banner/banner6.jpeg";
// import ban2 from "../../assets/windows-KXIWqtmvfxg-unsplash.jpg";
// import ban3 from "../../assets/phyo-min-cIocF-SSZiM-unsplash.jpg";
// import ban4 from "../../assets/smartworks-coworking-Uz8THWPXwhI-unsplash.jpg";
// import ban5 from "../../assets/walls-io-2BNiI2DV9GI-unsplash.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { IoMdContacts } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";

const SwiperSlider = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex items-center bg-fixed flex-col justify-center gap-6 text-2xl brightness-100 font-bold text-white  h-[650px] bg-cover bg-center object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ban1})` }}
          >
            <div className="text-[#FFF100] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Collaborative Study Platform
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center bg-fixed flex-col justify-center gap-6 text-2xl font-bold text-white brightness-100 h-[650px] bg-cover object-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban2})` }}
          >
            <div className="text-[#FFD65A] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Empowering Students Through Technology
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center bg-fixed flex-col justify-center gap-6 text-2xl font-bold text-white brightness-100  h-[650px] bg-cover bg-center object-cover bg-no-repeat"
            style={{ backgroundImage: `url(${ban3})` }}
          >
            <div className="text-white text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Smart Tools for Smarter Learning
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center  bg-fixed flex-col justify-center object-cover gap-6 text-2xl brightness-100 font-bold text-white  h-[650px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban4})` }}
          >
            <div className="text-[#FF6600] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Learn Together. Grow Together
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center bg-fixed flex-col justify-center object-cover gap-6 text-2xl font-bold text-white brightness-100  h-[650px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban5})` }}
          >
            <div className="text-[#FF0000] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Your Gateway to Future Excellence
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center flex-col  bg-fixed justify-center object-cover gap-6 text-2xl font-bold text-white brightness-100  h-[650px] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${ban6})` }}
          >
            <div className="text-[#FF0000] text-4xl md:text-5xl font-bold drop-shadow-md z-10">
              {" "}
              Your Gateway to Future Excellence
            </div>
            {/* <NavLink
              to={"/contact"}
              className="  px-4 text-[#131313] py-2 gap-2 rounded-md flex hover:text-[#131313e4] hover:shadow-inner transition z-10"
            >
              Contact With Us
              <RiContactsFill />
            </NavLink> */}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
