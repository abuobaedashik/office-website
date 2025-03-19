import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CourseCards from "../Components/CourseCards";

const Course = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  console.log(courses);
  return (
    <div className=" max-w-[1920px] mx-auto min-h-screen bg-[#f0f0f0]">
      <div className="my-12 mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {courses.map((course) => (
          <CourseCards key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Course;
