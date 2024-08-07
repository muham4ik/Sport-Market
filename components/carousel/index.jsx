"use client"

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import GantelImage from "../../public/product-image/gantel.svg";
import { getSingleProduct } from '../../service/product';

const Index = ({ id }) => {
  const [product, setProduct] = useState({ image_url: [] });

  useEffect(() => {
    if (id) {
      getSingleProduct(id)
        .then(response => {
          setProduct(response.data);
          console.log("Product data fetched successfully:", response.data); // Tekshirish uchun
        })
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  // `image_url` massivdan rasm URL'larini olish
  const images = product.image_url.length > 0 ? product.image_url : [GantelImage];

  return (
    <div className="Swipper_Slider container">
      <div className="relative w-[713px] sm:w-[300px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          navigation={{ 
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full rounded-lg bg-white overflow-hidden"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="w-[713px] h-[441px] relative flex justify-center py-10">
                <Image
                  src={src}
                  alt={`Product image ${index + 1}`}
                  width={713}
                  height={441}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
          {/* Navigate Buttons */}
          <div className="swiper-button-next bg-[#FBD029]"></div>
          <div className="swiper-button-prev bg-[#FBD029]"></div>
        </Swiper>
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[136px] h-[90px] bg-white border-2 border-yellow-500 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                width={136}
                height={90}
                alt={`Thumbnail image ${index + 1}`}
                className="w-full h-full object-cover m-auto p-2"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #000;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #FBD029;
          color: #000;
          transform: scale(1.1);
        }

        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </div>
  );
};

export default Index;
