import Image from "next/image";
import React from "react";
import AboutUs from "../components/about/AboutUs";
import OurValues from "../components/about/OurValues";
import Container from "../components/layouts/Container";
import Divider from "../components/utils/Divider";
import DividerDos from "../components/utils/DividerDos";

export default function index() {
  return (
    <Container>
      <div className=" relative about-cover-initial">
        <Image src="/images/about.png" alt="" layout="fill" objectFit="cover" />
      </div>

      <div className="container">
        <Divider className=""></Divider>
        <AboutUs></AboutUs>
        <Divider></Divider>
        <OurValues></OurValues>
      </div>
    </Container>
  );
}
