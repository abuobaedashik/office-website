import {
    FaFacebookF,
    FaGithub,
    FaGoogle,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  const Footer = () => {
    return (
      <div className="bg-[#222222] text-[#ffffff] ">
        <footer className="grid md:grid-cols-3 grid-cols-1 text-left gap-8 px-5 pt-10   border-b pb-24 mx-auto w-[95%] border-[#353535]">
          <nav className=" flex flex-col justify-between items-start">
            <h6 className="footer-title text-left">Contact Info</h6>
            <div className="flex flex-col gap-3">
              <a className="">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras eleifend egestas justo.
              </a>
              <a className="link link-hover"> 2 Queen Street,California, USA</a>
              <a className="link link-hover"> +8801765262296</a>
              <a className="link link-hover">abuobaedashik@gmail.com</a>
            </div>
          </nav>
          <nav className=" flex flex-col justify-between items-start md:pl-6">
            <h6 className="footer-title">Link Footer</h6>
            <div className="flex flex-col gap-3 ">
              <a className="link link-hover">Brands</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Privacy Policy</a>
              <a className="link link-hover">Terms & Conditions</a>
              <a className="link link-hover">Advertise</a>
            </div>
          </nav>
          <nav className=" flex flex-col justify-between items-start lg:pl-6">
            <h6 className="footer-title">Discount PRO subscription</h6>
            <div className="flex flex-col gap-3">
              <p className="text-xl text-[#ffffff] font-bold">
                Stay Updated with the Best Deals
              </p>
              <p className="text-base text-[#ffffff81] font-medium">
              Subscribe to our newsletter and never miss out on exclusive discounts, latest trends, and special offers!
              </p>
              <div className="join w-44 md:w-full">
                <input
                  className="input w-44 md:w-full input-bordered join-item text-[#131313]"
                  placeholder="Email"
                  
  
                />
                <button className="btn join-item rounded-r-full bg-[#F49D40]">
                  Subscribe
                </button>
              </div>
            </div>
          </nav>
        </footer>
        <footer className="flex flex-col items-center justify-center px-40 pt-14 text-center mx-auto w-[95%]">
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Cras eleifend egestas justo.
          </p>
          <div className="text-2xl flex items-center gap-5 mt-6">
            <FaFacebookF></FaFacebookF>
            <FaGithub></FaGithub>
            <FaGoogle></FaGoogle>
            <FaInstagram></FaInstagram>
            <FaTwitter />
          </div>
        </footer>
        <div className="bg-[#1C1C1C] text-[#ffffffaf] mt-10 py-6 px-4 flex items-center justify-center text-center text-base">
          © Copyright Abu Obaed Ashik 2024. All Rights Reserved.
        </div>
      </div>
    );
  };
  
  export default Footer;
  