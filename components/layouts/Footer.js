import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import translations from "../../staticTranslations.json";
export default function Footer() {
  const { locale } = useRouter();
  const translate = translations?.menu_footer;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  return (
    <>
      {/*footer area start*/}
      <footer className="footer_widgets">
        <div className="footer_top">
          <div className="container">
            <div className="row justify-content-between ">
              <div className="col">
                <div className="row">
                  <div className="col-12">
                    <Image
                      src="/images/logo.png"
                      width={209}
                      height={48}
                      alt="logo"
                    ></Image>
                  </div>
                </div>
                <p className="footer-contact mt-5">{txtTranslate?.contact}</p>
                <p className="footer-email mt-3">
                  {txtTranslate?.email_title} : <br />
                  {txtTranslate?.email}
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.instagram.com/radiant_pe/"
                    className="ml-3 relative"
                    passHref
                  >
                    <Image
                      src="/images/inst.png"
                      width={30}
                      height={30}
                      alt="instagram"
                    ></Image>
                  </Link>
                  <Link
                    href="https://www.facebook.com/RadiantProfessionalLine"
                    className="ml-3 relative"
                    passHref
                  >
                    <Image
                      src="/images/fb.png"
                      width={30}
                      height={30}
                      alt="facebook"
                    ></Image>
                  </Link>

                  <Link
                    href="https://www.youtube.com/@radiantprofessional9396"
                    className="ml-3 relative"
                    passHref
                  >
                    <Image
                      src="/images/yt.png"
                      width={40}
                      height={30}
                      alt="youtube"
                    ></Image>
                  </Link>
                </div>
              </div>
              <div className="col text-center ">
                <Link href="/salones" passHref>
                  <p className="footer-contact mt-5">{txtTranslate?.find_us}</p>
                </Link>
                <iframe
                  className="mt-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2989412778697!2d-77.02965184933988!3d-12.091675545988325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8641cd72cd9%3A0xf673cd0a458d93c4!2sAv.%20Javier%20Prado%20Este%20578%2C%20Lima%2015046!5e0!3m2!1sen!2spe!4v1676653135741!5m2!1sen!2spe"
                  width="329"
                  height="172"
                ></iframe>
              </div>
              <div className="col ">
                <p className="footer-contact mt-5 text-right">
                  {txtTranslate?.services}
                </p>
                <p className="text-right footer-qts cursor-pointer">
                  <Link href="/frequent-questions">
                    {txtTranslate?.questions}
                  </Link>

                  <br></br>

                  <Link href="usage-policies">{txtTranslate?.policy}</Link>
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
