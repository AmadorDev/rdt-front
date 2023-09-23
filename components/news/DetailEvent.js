import React from "react";
import DetailSanite from "../utils/DetailSanite";
import Divider from "../utils/Divider";
import ImageDetail from "../utils/ImageDetail";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function DetailEvent({ item }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(item);
  return (
    <>
      <div className="container">
        <Divider></Divider>

        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {item?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-screen w-screen">
                <Image
                  src={image.url}
                  alt="evento"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={10}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {item?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className=" relative w-24 h-24">
                <Image
                  src={image.url}
                  alt="evento"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <DetailSanite
          title={item?.title}
          content={item?.content}
        ></DetailSanite>
      </div>
    </>
  );
}
