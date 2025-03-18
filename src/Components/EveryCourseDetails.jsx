import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EveryCourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
   
    return (
        <div className=' mt-32'>
            dtls of course {course?.course_name}
            <img src={course?.banner_image} alt="" />
        </div>
    );
};

export default EveryCourseDetails;