import img1 from '../assets/Magicka-Review.webp';
import img2 from '../assets/unnamed.webp';
import img3 from '../assets/hq720.jpg';
import img4 from '../assets/valheim-review.webp';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="">
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[400px] "  // Ensure height is fixed here
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Image 1"
            className="w-full h-full object-fill "  // Cover ensures full width/height
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="Image 2"
            className="w-full h-full object-fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="Image 4"
            className="w-full h-full object-fill"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
