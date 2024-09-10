// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSlider({ images }) {
  return (
    <>
      <Swiper
        autoHeight={true}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              className="w-full object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
