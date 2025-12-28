import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

import CourseCards from './CourseCards';
import { CommonHeader } from './Ui/CommonHeader';

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
        <div className=" mx-auto min-h-screen px-6">
         <CommonHeader textTitle=" Exclusive Solutions that Set Us Apart " textSubTitle="Our aim is to make your learning experience the best  possible  "></CommonHeader>
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
