import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCards from "../../Components/CourseCards";

const Category = () => {
  const Category_courses = useLoaderData();
  console.log(Category_courses, "category");
  return (
    <div>
      <div className="my-12 mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
        {Category_courses.map((course) => (
          <CourseCards key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Category;
