import Image from "next/image";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import CarruselGroup from "./utils/CarruselGroup";
import FullScreenVideo from "./utils/FullScreenVideo";
import ModalAnimate from "./utils/ModalAnimate";
import VideoItemHome from "./utils/VideoItemHome";

function Videos() {
    const [showModal, setShowModal] = useState(false)
  const images = [
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
    { url: "/images/imagevideo.png", url_video: "4LbC_U_qngY" },
  ];

  const showDetail = async (url)=>{
    setShowModal(true);
    console.log(url)
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="d-none d-md-block">
          <CarruselGroup duration={5000} numberGroup={4}>
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.url}
                  width={230}
                  height={385}
                  onClick={() => showDetail(image.url_video)}
                  className="cursor-pointer"
                ></Image>
              </SwiperSlide>
            ))}
          </CarruselGroup>
        </div>

        <div className="d-block d-md-none">
          <CarruselGroup duration={5000} numberGroup={1}>
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.url}
                  width={512}
                  height={849}
                  onClick={() => showDetail(image.url_video)}
                  className="cursor-pointer"
                ></Image>
              </SwiperSlide>
            ))}
          </CarruselGroup>
        </div>
      </div>

      {showModal ? (
        <ModalAnimate
          show={showModal}
          setShow={setShowModal}
          className='w-full md:w-3/4'
          setYyLink={() => console.log()}
        >
          <div className=" flex justify-center items-center ">
          <FullScreenVideo link={"4LbC_U_qngY"} className="w-96"></FullScreenVideo>
          </div>
        </ModalAnimate>
      ) : null}
    </div>
  );
}

export default Videos;
