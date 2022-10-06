import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import menuContext from "../../contexts/menu/menuContext";

export default function Footer() {
  const { info, menu_footer } = useContext(menuContext);
  return (
    <>
      {/*footer area start*/}
      <footer className="footer_widgets">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Image src="/images/logo.png" width={209} height={48}></Image>
              </div>
            </div>
            <div className="row justify-content-between ">
              <div className="col">
                <p className="footer-contact mt-5">CONTÁCTANOS</p>
                <p className="footer-email mt-3">
                  Correo : <br />
                  radiant@radiant.com
                </p>
                <div>
                  <a>
                    <Image
                      src="/images/inst.png"
                      width={30}
                      height={30}
                    ></Image>
                  </a>
                  <a className="ml-3">
                    <Image src="/images/fb.png" width={30} height={30}></Image>
                  </a>

                  <a className="ml-3">
                    <Image src="/images/yt.png" width={40} height={30}></Image>
                  </a>
                </div>
              </div>
              <div className="col text-center ">
                <p className="footer-contact mt-5">ENCUÉNTRANOS</p>
                <Image
                  src="/images/map.png"
                  width={329}
                  height={172}
                  className="mt-3"
                ></Image>
              </div>
              <div className="col ">
                {" "}
                <p className="footer-contact mt-5 text-right">SERVICIOS</p>
                <p className="text-right footer-qts cursor-pointer">
                  <Link href="frequent-questions"> Preguntas frecuentes </Link>
                  <br></br>

                  <Link href="usage-policies"> Política de uso </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*footer area end*/}
    </>
  );
}

function divJa() {
  return <div></div>;
}
