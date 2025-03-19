import img1 from "../assets/Magicka-Review.webp";
import img2 from "../assets/unnamed.webp";
import img3 from "../assets/hq720.jpg";
import img4 from "../assets/valheim-review.webp";
import img5 from "../assets/image.jpg";

const Banner = () => {
  return (
    <div className="bg-[#E7FBB4] mb-24  mx-auto ">
      <div className="mx-auto w-11/12 flex flex-col md:flex-row justify-between py-24 items-center">
        <div className="md:w-[45%]">
          <div className="mt-5 text-5xl font-extrabold font-custom mb-6">
            Upgrade Your Skills & Conquer the Tech World
          </div>
          <div className="mt-2 text-xl font-nunito">
            Step into the future with confidence! Master the latest
            technologies, enhance your expertise, and become a leader in the
            ever-evolving digital landscape. The world of innovation awaits—are
            you ready to take charge?
          </div>
          <div className="mt-2 text-xl font-nunito flex items-center  gap-3">
          <button className="px-3 py-2 rounded-lg text-lg font-bold bg-[#FF1E1E] hover:bg-[#ffffff] hover:text-[#ff1e1e] text-[#ffffff]" >Browse Course</button>
          <button className="px-3 py-2 rounded-lg text-lg font-bold bg-[#FF1E1E] hover:bg-[#ffffff] hover:text-[#ff1e1e] text-[#ffffff]" >Join Free Seminar</button>
          </div>
        </div>
        <div className="md:w-[45%]">
          <img src={img5} alt="img" className="sm:min-w-[600px]  h-[350px] object-cover rounded-t-md rounded-b-xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
