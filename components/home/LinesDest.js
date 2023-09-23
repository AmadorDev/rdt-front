import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Divider from "../utils/Divider";
import DividerDos from "../utils/DividerDos";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import Button from "../widtgets/Button";
import CarruselOne from "../utils/CarruselOne";
import { getLineFeatured } from "../../api/lineaApi";
import "swiper/css/bundle";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper";

export default function LinesDest({ text }) {
  const { locale } = useRouter();
  const [featured, setFeatured] = useState(null);
  const info = text?.filter((item, ind) => item.locale === locale)[0];

  async function getFeatured() {
    try {
      const res = await getLineFeatured(locale);
      if ((res?.rows > 0) & (res?.status === "OK")) {
        setFeatured(res?.data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <>
      {featured ? (
        <div>
          <Divider></Divider>
          <TitleAndSubtitle
            title={`${info?.line_featured}`}
            subtitle={`“${info?.shortname}”`}
          />
          <DividerDos></DividerDos>
          {/*
            <CarruselOne className="">
              {featured?.map((item, ind) => (
                <SwiperSlide key={ind}>
                  <ItemFeatured
                    item={item}
                    text={info}
                    key={ind}
                  ></ItemFeatured>
                </SwiperSlide>
              ))}
            </CarruselOne>
              */}
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="container">
              {featured?.map((item, ind) => (
                <SwiperSlide key={ind}>
                  <ItemFeatured
                    item={item}
                    text={info}
                    key={ind}
                  ></ItemFeatured>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      ) : null}
    </>
  );
}

function ItemFeatured({ item, text }) {
  return (
    <div className="flex flex-col md:flex-row justify-around   items-center  space-y-2 p-0 m-0 my-10">
      <div className="item md:w-1/3  ">
        <div className="text-left">
          <h1 className="ld_title">{item?.name}</h1>
          <h3 className="ld_subtitle">{item?.short_name}</h3>

          <p className="ld_des">{item?.description}</p>
          <Link href={`/lineas/${item?.slug}`} passHref>
            <Button className="mt-3 px-5" type="button">
              {text?.btn}
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative item md:w-1/3  flex justify-end ">
        {item?.image ? (
          <Image
            src={item?.image}
            className="flex self-end ld_img "
            objectFit="contain"
            width={381}
            height={418}
            alt={item?.name}
          ></Image>
        ) : null}
      </div>
    </div>
  );
}
