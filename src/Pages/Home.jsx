import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import Discription from "../Components/Description";
import Description from "../Components/Description";
import CardSec from "../Components/Provider/CardSec";
import CourseCard from "../Components/CourseCard";
import Feature from "../Components/Feature";
import FreeSeminar from "../Components/FreeSeminar";
import SwiperSlider from "./CourseCategories/SwiperSlider";
// import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="mt-0 ">
      <div className="w-full mx-auto  h-auto bg-gradient-to-r from-[#FDEAED] to-[#FFFFFF] flex items-center justify-center ">
        <Banner></Banner>

        {/* <SwiperSlider /> */}
      </div>

      {/* why  choice us section*/}
      <div className="w-full bg-[#ffffff] mx-auto pb-12">
        <div className="mx-auto max-w-[1290px]">
          <Description></Description>
        </div>
      </div>

      {/*  card section*/}
      <div className="max-w-[1290px] mx-auto mb-12  ">
        <CardSec></CardSec>
      </div>

      {/* course card data */}
      <div className="w-full mb-0 bg-gradient-to-r from-[#FDEAED] to-[#FFFFFF]  py-12">
        <div className="mx-auto max-w-[1290px]">
          <CourseCard></CourseCard>
        </div>
      </div>
      {/* course card data */}
      <div className="w-full mx-auto">
        <Feature></Feature>
      </div>
      {/* course card data */}
      <div className="card-data bg-[#ffffff] py-12">
        <div className=" max-w-[1290px] mx-auto mb-0  ">
          <FreeSeminar></FreeSeminar>
        </div>
      </div>




    </div>
  );
};

export default Home;
