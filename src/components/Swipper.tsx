import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import image from "../../public/localhero.jpg";
import image2 from "../../public/image3.jpg";

const SwiperHero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide-custom">
        <img className="slide-video" src={image} />
        <div className="slide-overlay"></div>
        <h1 className="slide-text">LocalHero</h1>
        <p className="slide-sub">Let's do good</p>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide-custom">
        <img className="slide-video" src={image2} />
        <div className="slide-overlay"></div>
        <h1 className="slide-text">LocalHero</h1>
        <p className="slide-sub">Turn Care into Action</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHero;
