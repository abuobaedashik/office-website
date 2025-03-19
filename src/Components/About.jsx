import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="w-11/12 mt-32 mx-auto my-10 p-6 bg-white shadow-lg rounded-2xl border">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        About 3D Cluster
      </h2>
      <p className="text-gray-700 text-center text-base mb-6">
        At 3D Cluster, we are committed to providing top-notch IT
        training and solutions. Our goal is to equip individuals with the latest
        technology skills in [mention key areas like Web Development, Software
        Development, Cybersecurity, etc.] to help them excel in the digital
        world. With experienced mentors, hands-on learning, and a career-focused
        approach, we empower students and professionals to achieve their goals.
        Whether you're starting fresh or upgrading your skills, we are here to
        guide you every step of the way. Join us and shape your future with
        technology!
      </p>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 border rounded-lg shadow-md">
          <FaChalkboardTeacher className="text-4xl text-blue-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Expert Instructors</h3>
          <p className="text-gray-600">
            Learn from industry professionals with years of experience.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <FaLaptopCode className="text-4xl text-green-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Practical Training</h3>
          <p className="text-gray-600">
            Hands-on projects to enhance learning and real-world skills.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <FaUsers className="text-4xl text-purple-500 mx-auto mb-2" />
          <h3 className="text-xl font-semibold">Career Support</h3>
          <p className="text-gray-600">
            Guidance and job placement assistance for students.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Get in Touch
        </h3>
        <div className="flex flex-col items-center gap-4">
          <p className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-blue-500" /> Mirpur, Dhaka
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaPhoneAlt className="text-green-500" />{" "}
            <a href="tel:01765262296" className="hover:text-blue-600">
              01765262296
            </a>
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaEnvelope className="text-red-500" />{" "}
            <a
              href="mailto:abuobaedashikashik@gmail.com"
              className="hover:text-blue-600"
            >
              abuobaedashikashik@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
