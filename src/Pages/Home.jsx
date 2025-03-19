import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import Discription from "../Components/Description";
import Description from "../Components/Description";
import CardSec from "../Components/Provider/CardSec";
import CourseCard from "../Components/CourseCard";
import Feature from "../Components/Feature";
import FreeSeminar from "../Components/FreeSeminar";
// import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className="mt-0 ">
      <div className="">
       <Banner></Banner>
      </div>
      
      {/* why  choice us section*/}
      <div className="w-full bg-[#F0F0F0] mx-auto mb-12">
       <Description></Description>
      </div>

       {/*  card section*/}
       <div className="w-11/12 mx-auto mb-12">
       <CardSec></CardSec>
      </div>

      {/* course card data */}
      <div className="w-full mx-auto mb-0 bg-[#f0f0f0] py-12">
       <CourseCard></CourseCard>
      </div>
      {/* course card data */}
      <div className="w-full mx-auto">
       <Feature></Feature>
      </div>
      {/* course card data */}
      <div className="w-full mx-auto mb-0 bg-[#ffffff] py-12">
       <FreeSeminar></FreeSeminar>
      </div>

     
     
    </div>
  );
};

export default Home;
