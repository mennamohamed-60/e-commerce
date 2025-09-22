"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation  } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


type MySwiperProps = {
  imagesList: { src: string; caption?: string }[];
  slidesPerView?: number;
  spaceBetween?: number;
  pagination?: boolean;
  autoplay?: boolean | { delay: number };
  loop?: boolean;
  navigation?: boolean;
  height: number;
  breakpoints?: SwiperOptions["breakpoints"];
};

export default function MySwiper({
  imagesList,
  slidesPerView = 1,
  spaceBetween = 10,
  pagination = false,
  autoplay = false,
  loop = true,
  navigation = false,
  height,
  breakpoints = {},
}: MySwiperProps) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Pagination, Autoplay, Navigation]}
      pagination={pagination ? { clickable: true } : false}
      autoplay={autoplay ? { delay: 2000 } : false}
      loop={loop}
      navigation={navigation}
      breakpoints={breakpoints}
    >
      {imagesList.map(({ src, caption }) => (
        <SwiperSlide key={src}>
          <img
            src={src}
            style={{ height }}
            className="w-full object-cover"
            alt={caption || "slide"}
          />

          
          {caption && (
            <p className="mt-2 text-2xl text-gray-700 text-center font-bold ">{caption}</p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



