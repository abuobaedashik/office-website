import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Play, Award } from "lucide-react";
import pro1 from "../assets/logoAndNewAssets/profile1.jpg";
import pro2 from "../assets/logoAndNewAssets/profile1.jpg"
import pro3 from "../assets/logoAndNewAssets/profile1.jpg";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "",
      "From Beginner to Pro Your Tech Journey Starts",
      "Learn, Grow & Shine in the Tech Industry",
      "Explore, Learn & Become a Tech Expert",
      "From Zero to Hero Your Tech Journey Awaits",
    ],
    loop: 0,
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-[1290px] mx-auto relative  overflow-hidden">
      <div className="mt-8 flex flex-col md:flex-row justify-between py-32 items-center">
        {/* LEFT CONTENT */}
        <div className="md:w-[45%]  md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FF2E2E] to-[#f12735dc] bg-clip-text text-transparent font-BBH h-[154px]">
            
             <span className="text-[#000000]">Upgrade Your Skills & </span> <br />
             Conquer the Tech World
          </h1>

          <p className="mt-4 text-xl font-bold text-[#1F2937]">
            Step into the future with confidence! Master the latest
            technologies, enhance your expertise, and become a leader in the
            ever evolving digital landscape.
          </p>

          <p className="mt-4 text-2xl text-[#FF2E2E] font-bold">
            Learn | Work | Succeed
          </p>

          <div className="mt-12 flex gap-3">
            <button className="px-4 py-2 rounded-2xl font-bold bg-[#FF2E2E] hover:bg-[#1F2937] text-white">
              Browse Course
            </button>
            <button className="px-4 py-2 rounded-2xl font-bold bg-[#1F2937] hover:bg-[#FF2E2E] text-white">
              Join Free Seminar
            </button>
          </div>
        </div>

        {/* RIGHT MOCKUP */}
        <div className="relative hidden lg:block md:w-[45%] animate-scale-in">
          <div className="relative">
            {/* MAIN CARD */}
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              <div className="aspect-video rounded-2xl overflow-hidden relative mb-6">
                {/* YOUTUBE VIDEO (always visible) */}
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/GxmfcnU3feo?${
                    open ? "autoplay=1" : "autoplay=0"
                  }&rel=0`}
                  title="The Complete Web Development Roadmap"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                {/* PLAY BUTTON OVERLAY (only before play) */}
                {/* {!open && (
                  <button
                    onClick={() => setOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition">
                      <Play className="w-8 h-8 text-[#FF2E2E] ml-1" />
                    </div>
                  </button>
                )} */}
              </div>

              {/* Fake content */}
              <div className="space-y-2">
                <p className="text-lg font-semibold text-black">
                  Complete Web Development Roadmap 2025
                </p>
                <p className="text-sm text-gray-600">
                  Learn HTML, CSS, JavaScript & Modern Frameworks
                </p>
              </div>
            </div>

            {/* CERTIFICATE CARD */}
            <div className="absolute -top-6 -right-[6px] glass-card rounded-2xl p-4 animate-float shadow-xl">
              <div className="flex gap-2 items-center">
                <div className="w-12 h-12 rounded-xl bg-[#FF2E2E] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-BBH font-semibold">Certificate Ready</p>
                  <p className="text-xs font-custom text-gray-500">Industry Recognized</p>
                </div>
              </div>
            </div>

            {/* COMMUNITY CARD */}
            <div
              className="absolute -bottom-4 -left-8 glass-card rounded-2xl p-4 animate-float shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex gap-3 items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={pro1}
                      alt="pro1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={pro2}
                      alt="pro2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={pro3}
                      alt="pro3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-BBH font-semibold">Join 10K+ Learners</p>
                  <p className="text-xs font-custom text-gray-500">Active Community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
