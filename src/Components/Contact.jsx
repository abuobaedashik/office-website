import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-11/12 mt-32 mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl border">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
      <p className="text-gray-700 text-center mb-6">
        Get in touch with **3D Cluster** for inquiries, training, or support.  
        We are here to help you build a bright future in IT!
      </p>

      {/* Contact Information */}
      <div className="grid md:grid-cols-2 gap-6 text-center">
        <div className="p-4 border rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-4xl text-blue-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Our Location</h3>
          <p className="text-gray-600">Mirpur 2, Dhaka</p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <FaPhoneAlt className="text-4xl text-green-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Call Us</h3>
          <p className="text-gray-600">
            <a href="tel:01765262296" className="hover:text-blue-600">01765262296</a>
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <FaEnvelope className="text-4xl text-red-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Email Us</h3>
          <p className="text-gray-600">
            <a href="mailto:abuobaedashik@gmail.com" className="hover:text-blue-600">abuobaedashik@gmail.com</a>
          </p>
          <p className="text-gray-600">
            <a href="mailto:mdashik872345@gmail.com" className="hover:text-blue-600">mdashik872345@gmail.com</a>
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <FaWhatsapp className="text-4xl text-green-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">WhatsApp</h3>
          <p className="text-gray-600">
            <a href="https://wa.me/01765262296" className="hover:text-blue-600">01765262296</a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
