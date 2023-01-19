import Image from "next/image";
import React from "react";
import AboutUs from "../components/about/AboutUs";
import MissionAndVision from "../components/about/MissionAndVision";
import OurValues from "../components/about/OurValues";
import Container from "../components/layouts/Container";
import Divider from "../components/utils/Divider";
import DividerDos from "../components/utils/DividerDos";

export default function index() {
  return (
    <Container>
      <div style={{ width: "100%" }}>
        <Image
          src="/images/about_.png"
          width={1440}
          height={567}
          layout="responsive"
          alt="alt"
        ></Image>
      </div>

      <div className="container">
        <Divider className=""></Divider>
        <AboutUs></AboutUs>
        <Divider></Divider>
        <OurValues></OurValues>
        {/* <Divider></Divider>
        <MissionAndVision /> */}
      </div>
    </Container>
  );
}
