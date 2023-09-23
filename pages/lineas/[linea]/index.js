import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import getDetailLinea, { getProductsByLinea } from "../../../api/lineaApi";
import Breakcrums from "../../../components/layouts/Breakcrums";
import Container from "../../../components/layouts/Container";
import ItemBreack from "../../../components/layouts/ItemBreack";
import { CardProduct } from "../../../components/lines/CardProduct";
import ListEvent from "../../../components/lines/events/ListEvent";
import ListVideo from "../../../components/lines/video/ListVideo";

import Divider from "../../../components/utils/Divider";
import DividerDos from "../../../components/utils/DividerDos";
import TitleAndSubtitle from "../../../components/utils/TitleAndSubtitle";
import Button from "../../../components/widtgets/Button";
import menuContext from "../../../contexts/menu/menuContext";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "../../../components/utils/Loading";

import styles from "./lineas.module.css";

function Index() {
  const { line_st } = useContext(menuContext);
  const [redirect, setRedirect] = useState(0);
  const [linea, setLinea] = useState(null);
  const [products, setProducts] = useState(null);

  const router = useRouter();
  const { query, locale, locales, asPath } = router;

  const isMounted = useRef(true);

  async function getLinea() {
    try {
      const res = await getDetailLinea(query?.linea, locale);

      if (Object.keys(res?.data).length > 0) {
        setLinea(res);
        getProducts();
      }
    } catch (e) {
      console.log("LOG:", e);
    }
  }

  async function getProducts() {
    try {
      const res = await getProductsByLinea(query?.linea, locale);

      if (Object.keys(res.data).length > 0) {
        setProducts(res);
      } else {
        setProducts(null);
      }
    } catch (e) {
      console.log("LOG:", e);
      setProducts(null);
    }
  }

  function slugName() {
    let q = query.linea.replace(/-/g, " ");
    return q.toLowerCase();
  }

  useEffect(() => {
    if (isMounted.current) {
      getLinea().then(() => {
        // set state and do other things here
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [query.linea, locale]);

  if (!linea || !products) {
    return <Loading />;
  }

  return (
    <Container>
      {/*<Banner></Banner>*/}

      <Breakcrums>
        <ItemBreack title={`${line_st?.line}`} ruta="/"></ItemBreack>
        <ItemBreack title={`${linea?.data.name}`}></ItemBreack>
      </Breakcrums>

      {/* ***************************** Prueba slider******************* */}
      <Swiper>
        {linea?.files.map((image, ind) => (
          <SwiperSlide key={ind}>
            <div key={ind} className={styles.contenedor}>
              <Image
                src={image.url}
                height={569}
                width={1445}
                alt="..."
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* ***************************** LINE******************* */}
      <Divider></Divider>
      <TitleAndSubtitle
        title={`${linea?.data.name}`}
        // subtitle={`“Descubre Nuestros Productos diseñados para ti”`}
      ></TitleAndSubtitle>
      <Divider></Divider>
      {/* *****************************END LINE******************* */}

      <div className="container">
        {/* ***************************** SLIDER******************* */}
        <div className="row justify-content-center">
          <div className="col-12">
            {/*<CarruselSolo className="">
              {linea?.files.map((image, ind) => (
                <SwiperSlide key={ind}>
                  <div className="flex mx-auto justify-center">
                    <div className="" style={{ width: "100%" }}>
                      <Image
                        src={image.url}
                        width={910}
                        height={418}
                        alt="..."
                      ></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </CarruselSolo>*/}
          </div>
          <div className="md:mx-5 text-left mt-4  col-10">
            <span className="ln_desc ">{linea?.data.description}</span>
          </div>
        </div>
        {/* ***************************** END SLIDER******************* */}

        {/* ************************************** PRODUCTS****************************/}
        <Divider></Divider>
        <TitleAndSubtitle
          title={`${line_st?.prod_title}`}
          // description={`${line_st?.prod_desc}`}
        ></TitleAndSubtitle>
        <Divider />

        <div className="row justify-content-center">
          {products?.data.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <CardProduct
                images={item?.image}
                title={item?.name}
                description={item?.description}
              >
                <Link href={`/products/${item.slug}?line=${query.linea}`}>
                  <a>
                    <Button className="mx-6 mt-3">{line_st?.more}</Button>
                  </a>
                </Link>
              </CardProduct>
            </div>
          ))}
        </div>
        {/* ************************************** END PRODUCTOS****************************/}
        {/* ************************************** EVENTOS****************************/}

        <ListEvent linea={linea?.data} locale={locale}></ListEvent>
        {/* ************************************** END EVENTOS****************************/}

        {/* ************************************** VIDEOS****************************/}

        <ListVideo linea={linea?.data} locale={locale}></ListVideo>
        {/* ************************************** END VIDEOS****************************/}
      </div>
    </Container>
  );
}

export default Index;
