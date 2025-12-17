import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

import CourseCards from './CourseCards';

const CourseCard = () => {
     const [courses, setCourses] = useState([]);
     useEffect(() => {
       fetch("course.json")
         .then((res) => res.json())
         .then((data) => {
           setCourses(data);
         });
     }, []);

  return (
    <div>
        <div className="mt-6  mx-auto   text-4xl text-center font-bold  font-custom"> Our Most Popular Course</div>
        <div className="mt-6 max-w-[1920px] mx-auto min-h-screen">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5  mx-auto">
        {courses.slice(0, 6).map((course) => (
          <CourseCards key={course._id} course={course} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseCard;
