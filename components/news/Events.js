import React from "react";
import ItemProd from "../List/ItemProd";
import DividerDos from "../utils/DividerDos";
import TitleAndSubtitle from "../utils/TitleAndSubtitle";
import Button from "../widtgets/Button";
import { useRouter } from "next/router";
import Image from "next/image";

import _trans from "../../staticTranslations.json";
import Divider from "../utils/Divider";

//inicio de prueba import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styles from "./swiper.module.css";
//final de prueba import
function Events({ data }) {
  const { locale } = useRouter();
  const router = useRouter();
  const info = _trans?.news_event.filter(
    (item, ind) => item.locale === locale
  )[0];
  return (
    <div>
      <Divider></Divider>
      <TitleAndSubtitle title={info?.title}></TitleAndSubtitle>
      <DividerDos></DividerDos>

      {/*<div className="row justify-center">
        {data?.map((item, index) => (
          <div className="col-12 col-md-4" key={index}>
            <ItemProd
              title={item?.title}
              description={item?.content}
              imagefile={item?.image}
            >
              <Button
                className="px-5"
                onClick={() => router.push(`/events/${item.slug}`)}
              >
                {info?.more}
              </Button>
            </ItemProd>
          </div>
        ))}
        </div>*/}

      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination]}
        slidesPerView={3}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                src={item?.image}
                width={512}
                height={849}
                className="cursor-pointer"
                alt={item?.title}
                onClick={() => router.push(`/events/${item.slug}`)}
              ></Image>
              <Button
                className="px-5"
                onClick={() => router.push(`/events/${item.slug}`)}
              >
                {info?.more}
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Events;
