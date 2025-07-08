// Import Swiper React components
"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative group">
      <Swiper
        ref={swiperRef}
        spaceBetween={24}
        slidesPerView={1}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="gallery-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-neutral-100">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons with React Icons */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 border border-white/20"
      >
        <IoChevronBack className="w-7 h-7 text-neutral-800" />
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 border border-white/20"
      >
        <IoChevronForward className="w-7 h-7 text-neutral-800" />
      </button>
    </div>
  );
}
