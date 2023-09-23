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
import Link from "next/link";
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
        spaceBetween={100}
        navigation
        loop
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={`/events/${item.slug}`} passHref>
              <div>
                <div className="relative h-96 w-96">
                  <Image
                    src={item?.images[0]?.url}
                    className="cursor-pointer"
                    alt={item?.title}
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <p>{item?.title}</p>
                <Button className="px-5">{info?.more}</Button>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Events;
