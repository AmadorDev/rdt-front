import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import SliderOne from "../SliderOne";
import styles from "./imagen.module.css";

export default function DetailImageProduct({ images }) {
  return (
    <div className="row justify-content-center">
      <div className={styles.contenedorSwiper}>
        <SliderOne loop={images?.length > 1 ? true : false}>
          {images?.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiper}>
              <Image
                src={image?.url}
                layout="fill"
                //  layout="responsive"
                alt={image?.title}
                objectFit="contain"
              ></Image>
            </SwiperSlide>
          ))}
        </SliderOne>
      </div>
    </div>
  );
}
