import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { useRouter } from "next/router";
import menuContext from "../../contexts/menu/menuContext";
import translations from "../../staticTranslations.json";
export default function NavBar() {
  const { defaultMenu } = useContext(menuContext);

  const { locale, locales, asPath } = useRouter();

  const translate = translations?.top_header;
  const txtTranslate = translate?.filter(
    (item, ind) => item.locale === locale
  )[0];

  const searchIcon = useRef(null);
  const stickyRef = useRef(null);
  const scrollRef = useRef(false);
  function handlerEvent(e) {
    if (searchIcon.current.style.display === "block") {
      searchIcon.current.style.display = "none";
    } else {
      searchIcon.current.style.display = "block";
    }
  }
  const headerSticky = () => {
    if (window.scrollY > 70) {
      stickyRef.current?.classList.add("sticky");
    } else {
      stickyRef.current?.classList.remove("sticky");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  useEffect(() => {
    window.addEventListener("scroll", headerSticky);
    return () => window.removeEventListener("scroll", headerSticky);
  }, []);

  return (
    <header>
      <div className="main_header">
        <div className="header_top bg_header_top_ad">
          <div className="container">
            <div className="row justify-end">
              <div className="col-lg-8 col-md-8">
                <div className="language_currency text-right">
                  <ul>
                    <li className="space-x-2">
                      <Link
                        href="https://intranet.placentaliferadiant.com/login"
                        target="_blank"
                        without
                        rel="noreferrer"
                        passHref
                      >
                        <button className="btn-intranet py-2">
                          {txtTranslate?.world}
                        </button>
                      </Link>
                      <Link href="/salones" passHref>
                        <button className="btn-intranet text-white">
                          {txtTranslate?.salon}
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link href={asPath} locale={"es-ES"} passHref>
                        ES
                      </Link>
                    </li>

                    <li>
                      <Link href={asPath} locale={"en-US"} passHref>
                        EN
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_middle sticky-header" ref={stickyRef}>
          <div className="container">
            <div className="row justify-center items-center">
              <div className="col-lg-2">
                <div className="relative w-44">
                  <Link href="/" passHref>
                    <Image
                      src="/images/radiant.png"
                      alt="radiant logo"
                      objectFit="contain"
                      width={512}
                      height={117}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 ">
                <div className="header_right_info menu_position  justify-content-center">
                  {/*main menu start*/}
                  <div className="main_menu text_li_per  ">
                    <nav>
                      <ul>
                        {defaultMenu
                          .filter((p) => p.locale === locale)
                          .map((item, index) => (
                            <MenuItem
                              item={item}
                              key={index}
                              className="align-self-center"
                            ></MenuItem>
                          ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-1">
                {/*main menu end*/}
                <div className="header_account_area header_account_area_per ">
                  <div className="header_account_list search_list">
                    <button onClick={(e) => handlerEvent(e)}>
                      <i className="icon-magnifier icons color-icon" />
                    </button>
                    <div className="dropdown_search" ref={searchIcon}>
                      <form onSubmit={handleSubmit}>
                        <input placeholder="Buscar" type="text" />
                        <button type="submit">
                          <i className="icon-magnifier icons" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="header_account_list  mini_cart_wrapper ">
                    <Link
                      href="https://www.kamill.pe/busca?ft=RADIANT"
                      target="_blank"
                      rel="noreferrer"
                      passHref
                    >
                      <button className="btn-store text-white">STORE</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
