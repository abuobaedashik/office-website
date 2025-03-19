import img1 from "../assets/Magicka-Review.webp";
import img2 from "../assets/unnamed.webp";
import img3 from "../assets/hq720.jpg";
import img4 from "../assets/valheim-review.webp";
import img5 from "../assets/image.jpg";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Upgrade Your Skills & Conquer the Tech World",
      "From Beginner to Pro – Your Tech Journey Starts",
      "Learn, Grow & Shine in the Tech Industry",
      "Explore, Learn & Become a Tech Expert",
      "From Zero to Hero – Your Tech Journey Awaits",
    ],
    loop: 0,
  });
  return (
    <div className="mb-0 w-11/12 mx-auto ">
      <div className="   mt-8  flex flex-col md:flex-row justify-between  py-24 items-center">
        <div className="md:w-[45%]">
          <div className=" text-5xl text-[#00ff] font-extrabold font-custom  h-[154px] ">
            <span>{text}</span>
          </div>
          <div className="mt-5 text-xl font-roboto text-[#1F2937] font-bold">
            Step into the future with confidence! Master the latest
            technologies, enhance your expertise, and become a leader in the
            ever-evolving digital landscape. The world of innovation awaits—are
            you ready to take charge?
          </div>
          <div className="mt-12 text-xl font-nunito flex items-center  gap-3">
            <button className="px-3 py-2 rounded-2xl text-lg font-bold bg-[#ff1e1e] hover:bg-[#1F2937] text-[#ffffff]">
              Browse Course
            </button>
            <button className="px-3 py-2 rounded-2xl text-lg font-bold hover:bg-[#1F2937]  bg-[#ff1e1e] text-[#ffffff]">
              Join Free Seminar
            </button>
          </div>
        </div>
        <div className="md:w-[45%] ">
          <img
            src={img5}
            alt="img"
            className="w-full  h-[380px] object-cover rounded-tl-[56px] rounded-tr-[30px] rounded-b-[30px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
