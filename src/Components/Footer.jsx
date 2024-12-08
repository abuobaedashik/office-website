import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#222222] text-[#ffffff] pb-5">
      <footer className="grid grid-cols-1 md:grid-cols-3 text-left gap-8 px-5 pt-10 border-b pb-12 mx-auto w-[95%] border-[#353535]">
        {/* Contact Info */}
        <nav className="flex flex-col gap-4 items-start">
          <h6 className="text-lg font-bold">Contact Info</h6>
          <div className="flex flex-col gap-3 text-sm">
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Cras eleifend egestas justo.
            </p>
            <p>2 Queen Street, California, USA</p>
            <p>+8801765262296</p>
            <p>abuobaedashik@gmail.com</p>
          </div>
        </nav>

        {/* Links Section */}
        <nav className="flex flex-col gap-4 items-start">
          <h6 className="text-lg font-bold">Link Footer</h6>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#" className="hover:text-[#F49D40]">
              Brands
            </a>
            <a href="#" className="hover:text-[#F49D40]">
              Careers
            </a>
            <a href="#" className="hover:text-[#F49D40]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#F49D40]">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-[#F49D40]">
              Advertise
            </a>
          </div>
        </nav>

        {/* Subscription Section */}
        <nav className="flex flex-col gap-4 items-start">
          <h6 className="text-lg font-bold">Discount PRO Subscription</h6>
          <p className="text-base font-bold">
            Stay Updated with the Best Deals
          </p>
          <p className="text-sm text-[#ffffff81]">
            Subscribe to our newsletter and never miss out on exclusive
            discounts, latest trends, and special offers!
          </p>
          <div className="flex items-stretch gap-2 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered flex-grow bg-[#ffffff] text-[#000000] rounded-md"
            />
            <button className="btn bg-[#F49D40] text-[#ffffff] rounded-md">
              Subscribe
            </button>
          </div>
        </nav>
      </footer>

      {/* Social Media Section */}
      <footer className="flex flex-col items-center justify-center px-4 pt-10 text-center w-[95%] mx-auto">
        <p className="text-sm">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Cras eleifend egestas justo.
        </p>
        <div className="flex items-center justify-center gap-5 mt-6 text-xl">
          <FaFacebookF className="hover:text-[#F49D40]" />
          <FaGithub className="hover:text-[#F49D40]" />
          <FaGoogle className="hover:text-[#F49D40]" />
          <FaInstagram className="hover:text-[#F49D40]" />
          <FaTwitter className="hover:text-[#F49D40]" />
        </div>
      </footer>

      {/* Bottom Section */}
      {/* <div className="bg-[#1C1C1C] text-[#ffffffaf] mt-10 py-4 text-center text-sm">
        © 2024 Abu Obaed Ashik. All Rights Reserved.
      </div> */}
    </div>
  );
};

export default Footer;
