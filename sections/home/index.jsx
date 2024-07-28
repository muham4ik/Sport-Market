"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Butsa } from "@/public/assets";

const index = () => {
  const imgList = [Butsa, Butsa, Butsa, Butsa, Butsa];

  return (
    <div className="main mb-[83px] mt-[20px]">
      <div className="container mt-[40px]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Parallax, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          parallax={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="w-full"
        >
         {imgList.map((item, index) => (
  <SwiperSlide key={index} className="w-full rounded-2xl">
    <div className="flex flex-col lg:flex-row items-center justify-between h-[300px] sm:h-[400px] md:h-[488px] w-full rounded-2xl overflow-hidden bg-gray-100">
      <div className="flex-1 p-5 lg:pl-16">
        <h1 className="text-lg lg:text-2xl font-extrabold">
          Бутсы Nike Phantom <br />
          GT2 Elite FG
        </h1>
        <button className="py-2.5 mt-4 lg:mt-6 px-5 rounded-md border-2 border-yellow-400">
          Подробности
        </button>
      </div>
      <div className="relative flex-1 h-full w-full lg:w-auto">
        <div className=" hidden sm:hidden lg:block absolute top-8 right-2 lg:right-auto lg:left-2 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[380px] lg:h-[380px] rounded-full bg-red-500 z-0"></div>
        <div className="  hidden sm:hidden lg:block  absolute top-[-20px] right-[20px] lg:right-auto  sm:left-[60px] md:left-[80px] lg:left-[130px] rotate-12 w-[80px] sm:w-[120px] md:w-[150px] lg:w-[355px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[921px] bg-green-500 z-0"></div>
        <div className="relative z-10 pr-5 flex justify-center items-center h-full">
          <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[400px]">
            <Image
              src={item}
              alt="Carusel img"
              layout="responsive"
              width={438}
              height={438}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </div>
    
  );
};

index.displayName = "Carusel";
export default index;






