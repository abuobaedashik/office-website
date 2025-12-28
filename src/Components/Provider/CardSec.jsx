import React from "react";
import online from "../../assets/web/online92.png";
import lifetime from "../../assets/icons8-lifetime-96.png";
import parmanent from "../../assets/icons8-permanent-job-96.png";
import { CommonHeader } from "../Ui/CommonHeader";

const CardSec = () => {
  return (
    <div>
      <div>
         {/* dynamic header */}
              <CommonHeader textTitle=" Exclusive Solutions that Set Us Apart " textSubTitle="Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds "></CommonHeader>
          {/* cards */}
        <div className="mt-6 flex items-center gap-5 justify-between flex-col md:flex-row p-6">

          <div className="">
            <div className="flex items-center justify-between gap-5 p-4 px-4 hover:text-[#ffffff] rounded-2xl hover:bg-[#ff2e2e]  text-[#1F2937] bg-[#F0F0F0]  flex-col">
              <div>
                <img src={lifetime} alt="p" className="w-[80px] h-[80px]" />
              </div>
              <p className="text-2xl font-custom font-bold">Lifetime Support</p>
              <p className="text-base font-bold font-inter">We are committed to providing lifetime support to ensure you have a seamless experience with our products/services. Our dedicated support team is always available to assist you with troubleshooting, updates, and any questions you may have no matter how long you've been with us. Enjoy continuous assistance, expert guidance, and regular improvements at no additional cost. Your satisfaction is our priority!</p>

            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-5 p-4 px-4 hover:text-[#ffffff] rounded-2xl hover:bg-[#ff2e2e]  text-[#1F2937] bg-[#F0F0F0]  flex-col">
              <div>
                <img src={online} alt="p" className="w-[80px] h-[80px]" />
              </div>
              <p className="text-2xl font-custom font-bold">Online Support</p>
              <p className="text-base font-bold  font-nunito">Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you to overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>

            </div>
          </div>
          <div>
            <div className="flex items-center justify-between gap-5 p-4 px-4  hover:text-[#ffffff] rounded-2xl hover:bg-[#ff2e2e]  text-[#1F2937] bg-[#F0F0F0]  flex-col">
              <div>
                <img src={parmanent} alt="p" className="w-[80px] h-[80px]" />
              </div>
              <p className="text-2xl font-custom font-bold">Job Placement Support</p>
              <p className="text-base font-bold  font-nunito">Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you to overcome any problem in your career path even after completing your course. Our expert support team ensures 24-hour service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CardSec;
