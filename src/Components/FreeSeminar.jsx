import React from "react";
import semener from "../../src/assets/semener.jpg";

const FreeSeminar = () => {
  return (
    <div>
      <div className=" bg-base-200 py-48 rounded-2xl">
        <div className="flex items-center justify-between rounded-xl flex-col md:flex-row px-6">
          <div className="md:w-[51%] w-full">
            <h1 className="text-5xl font-custom font-bold">Join Our Free Seminars </h1>
            <p className="py-6">
            Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will guide you to pick the course that matches your interest and discuss the career prospects.
            </p>
            <button className="px-3 py-2 rounded-md bg-[#d99904] text-[#ffffff]">Join Seminar</button>
          </div>

          <div className="border-2 border-[#d99904] rounded-lg">
            <img
              src={semener}
              className="max-w-sm rounded-lg shadow-2xl  h-[400px] object-cover  w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeSeminar;
