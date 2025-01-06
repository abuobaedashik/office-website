import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router-dom";
import TopGame from "../Components/TopGame";
import mygame from "../assets/fhkcg7du87k61.jpg";
// import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const topGame = useLoaderData();

  return (
    <div className="mt-0 ">
      <div className="">
       <Banner></Banner>
      </div>
      {/* Highest Rated Gam section */}
      <div className="my-20 text-center w-11/12 mx-auto">
        <div className="title text-2xl font-bold">
          A Glimpse into the World of Highest-Rated Games
        </div>
        <div className="title text-base font-normal mt-3 mb-6">
         Chillllllll The gaming add industry has become a massive source of entertainment
          worldwide. Many games have captured the hearts of gamers due to their
          storylines, graphics, gameplay, and innovative features.
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 sm:grid-cols-2 items-center">
          {topGame.map((topsix) => (
            <TopGame key={topsix._id} topsix={topsix}></TopGame>
          ))}
        </div>
        <div className="mt-8 mb-4 flex items-center flex-col md:flex-row bg-[#23F245] justify-between py-4 px-3">
          <div className="img sm:w-[48%] w-full">
            <img src={mygame} className="w-full h-[400px]" alt="" />
          </div>
          <div className="text text-base  text-[#ffffffac] font-medium w-full sm:w-[48%]">
            A game review is a detailed evaluation or critique of a video game,
            written to inform readers about its strengths, weaknesses, and
            overall quality. Game reviews help gamers decide whether a
            particular title is worth their time and money by providing insights
            into gameplay, graphics, story, mechanics, and other elements.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
