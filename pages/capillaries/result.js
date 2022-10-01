import TitleAndSubtitle from "../../components/utils/TitleAndSubtitle";

import Button from "../../components/widtgets/Button";

import Divider from "../../components/utils/Divider";
import Breakcrums from "../../components/layouts/Breakcrums";
import Link from "next/link";
import { useContext, useEffect, useState, useRef } from "react";
import capilarContext from "../../contexts/capilar/capilarContext";

import Container from "../../components/layouts/Container";
import { getResultTest } from "../../api/testApi";
import { useRouter } from "next/router";

import _trans from "../../staticTranslations.json";
import Banner from "../../components/layouts/Banner";
import ItemBreack from "../../components/layouts/ItemBreack";

export default function result() {
  const { comb, markValue } = useContext(capilarContext);
  const { locale } = useRouter();
  const router = useRouter();

  const [linea, setLinea] = useState(null);
  const [loader, setLoader] = useState(true);

  if (markValue.length === 0) return router.back();

  const _tranInfo = _trans?.capilar_result.filter(
    (x) => x.locale === locale
  )[0];

  useEffect(() => {
    getResult();
  }, []);

  async function getResult() {
    let line_id = "";
    if (markValue.length > 0) {
      let Keratina = `${markValue?.[0].p}${markValue?.[1].p}`;
      if (Keratina === "AC") {
        line_id = 4;
      } else {
        let rs = markValue[1].p;
        let resch = comb.filter((item) => item.id === rs);
        let op = resch[0];
        line_id = op?.line_id;
      }
    }

    try {
      if (!line_id) return router.back();
      const resp = await getResultTest(locale,line_id);
      if (resp?.line) {
        setLinea(resp?.line);
        setLoader(false);
      }
    } catch (error) {
      return router.back();
      setLoader(false);
    }
  }

  return (
    <Container>
      <Banner />
      <Breakcrums>
        {/* <ItemBreack title={} ruta='/'/> */}
        <ItemBreack title={_tranInfo?.title} ruta="/capillaries/start" />
      </Breakcrums>
      <div className="container">
        <Divider></Divider>

        <TitleAndSubtitle
          title={`${_tranInfo?.title}: ${_tranInfo?.result}`}
          subtitle={_tranInfo?.shortname}
          className="col-md-12"
        ></TitleAndSubtitle>
        <Divider></Divider>

        <div className="flex flex-col md:flex-row justify-center   items-center  space-y-2 mx-2">
          {loader ? (
            <LoaderResult></LoaderResult>
          ) : (
            <ResultLine line={linea} _tranInfo={_tranInfo}></ResultLine>
          )}
        </div>
        <Divider></Divider>
      </div>
    </Container>
  );
}

function LoaderResult() {
  return (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

function ResultLine({ line, _tranInfo }) {
  return (
    <>
      <div className="item  w-full md:w-1/2 flex ">
        <img src={line?.image} className="img_prod_res img-fluid"></img>
      </div>
      <div className="item w-full md:w-1/2 ">
        <div className="text-left">
          <h1 className="g_title">{line?.name}</h1>

          <p className="g_desc">{line?.description}</p>

          <div className="flex justify-start ">
            <ButtonsOptions trans={_tranInfo}></ButtonsOptions>
            {/* <Button className="mt-3  mx-2">
              <Link href={`/lineas/${line?.slug}`}>
                {_tranInfo?.view_product}
              </Link>
            </Button>
            <Button className="mt-3 mx-2">
              <Link href="/salones">{_tranInfo?.view_salon}</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

function ButtonsOptions({trans}) {
  const refDiv = useRef(null);
  const svgRef = useRef(null);
  function showDiv() {
    if (refDiv.current.classList.contains("hidden")) {
      refDiv.current.classList.remove("hidden");
      svgRef.current.classList.add("rotate-180");
    } else {
      refDiv.current.classList.add("hidden");
      svgRef.current.classList.remove("rotate-180");
    }
  }
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <Button onClick={showDiv} type="button" className="flex items-center">
          <span>{trans?.find}</span>
          <svg
            ref={svgRef}
            data-accordion-icon=""
            className="w-6 h-6 shrink-0 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </h2>
      <div ref={refDiv} className="hidden">
        <div className="p-3 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
          <p className="mb-2 text-gray-600 ">
          <a href="https://www.kamill.pe/" target='_blank' rel="noreferrer"><a className="underline">{trans?.view_shop}</a></a>
          </p>
          <p className="text-gray-600 ">
          <Link href="/salones"><a className="underline	">{trans?.view_salon}</a></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
