import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const CourseCard = () => {
   const course= [
    {
      _id: "1",
      title: "Professional Graphic Design",
      image:"https://i.ibb.co.com/rGLf3Ckk/Graphic-Design-Perth.jpg",
      reviews: "14,400 Review",
      students: "18,000 Student",
      fee: "50,000 BDT",
    },
    {
      _id: "2",
      title: "Web Design & Development",
      image: "https://i.ibb.co.com/ccdqCR1p/web-development-programming-resized.webp",
      reviews: "4,160 Review",
      students: "5,200 Student",
      fee: "50,000 BDT",
    },
    {
      _id: "3",
      title: "Office ",
      image: "https://i.ibb.co.com/bMLbhR6c/microsoft-office-980x507.png",
      reviews: "2,800 Review",
      students: "3,500 Student",
      fee: "50,000 BDT",
    },
  ];

  return (
    <div>
        <div className="mt-12 text-4xl text-center font-bold  font-custom">Our Popular Course</div>
        <div className="flex flex-wrap justify-center mt-6 gap-4">
            {course.map((data) => (
                  <div key={data._id} className="bg-[#EAEAEA] rounded-2xl shadow-lg p-4 w-full sm:w-[30%]">
                  <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <div className="mt-4">
                    <p className="text-orange-500 font-bold">All Course</p>
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                      <span>⭐⭐⭐⭐⭐</span>
                      <span className="ml-2 text-gray-500">{data.reviews}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{data.students}</p>
                    <p className="font-semibold mt-2">Course Fee {data.fee}</p>
                    <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                      Click for discount
                    </button>
                  </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CourseCard;
