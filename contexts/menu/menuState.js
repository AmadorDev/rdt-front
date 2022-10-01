import { useRouter } from "next/router";
import React, { useReducer, useState, useEffect } from "react";
import { callFetch } from "../../utils/CallFetch";

import MenuContext from "./menuContext";
import MenuReducer from "./menuReducer";
import jsonTranslation from "../../staticTranslations.json";

const menuState = ({ children }) => {
  const { locale } = useRouter();
  const initialState = {
    defaultMenu: [
      { name: "Inicio", link: "/", locale: "es-ES" },
      { name: "quienes somos", link: "/about-us", locale: "es-ES" },
      {
        name: "Productos",
        link: "/lines",
        type: "m",
        cate: [],
        code: "cate",
        locale: "es-ES",
      },
      { name: "Diagnóstico en línea ", link: "/capillaries", locale: "es-ES" },
      { name: "Blog", link: "/news", locale: "es-ES" },
      
      // {
      //   name: "Deseo vender Radiant",
      //   link: "https://www.google.com/",
      //   ex: true,
      //   locale: "es-ES",
      // },

      { name: "Home", link: "/", locale: "en-US" },
      { name: "about us", link: "/about-us", locale: "en-US" },
      {
        name: "Products",
        link: "/lines",
        type: "m",
        cate: [],
        code: "cate",
        locale: "en-US",
      },
      { name: "Online diagnosis ", link: "/capillaries", locale: "en-US" },
      { name: "Blog", link: "/news", locale: "en-US" },

      
      // {
      //   name: "I want to sell Radiant",
      //   link: "https://www.google.com/",
      //   ex: true,
      //   locale: "en-US",
      // },
    ],
    register: {},
    info: {},
    menu_footer: {},
    line_st: {},
    cover_event:[],
    banner:[]
  };

  const [tologged, settologged] = useState({ isloading: true, logged: false });

  const [state, dispatch] = useReducer(MenuReducer, initialState);

  async function getItemLinea() {
    try {
      const url = `${process.env.BACK_API}/menu/linea`;

      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          locale: locale,
        },
      };
      const result = await callFetch(url, params, null);
      console.log(result);
      if (result.msg === "OK") {
        dispatch({
          type: "UP_MENU",
          value: { code: "cate", data: result?.data },
        });
        settologged(false);
      }
    } catch (error) {
      console.log("LOG: ", error);
    }
  }

  const staticTranslations = () => {
    const st = jsonTranslation.register.filter(
      (item) => item.locale === locale
    );
  
    dispatch({
      type: "STATIC_REGISTER",
      value: st ? st[0] : {},
    });

    const stinfo = jsonTranslation.info.filter(
      (item) => item.locale === locale
    );
    dispatch({
      type: "STATIC_INFO",
      value: stinfo ? stinfo[0] : {},
    });

    const stamenufooter = jsonTranslation.menu_footer.filter(
      (item) => item.locale === locale
    );
    dispatch({
      type: "STATIC_FOOTER",
      value: stamenufooter,
    });

    const staticline = jsonTranslation.lines.filter(
      (item) => item.locale === locale
    );
    dispatch({
      type: "STATIC_LINE",
      value: staticline ? staticline[0] : {},
    });
  };

  useEffect(() => {
    getItemLinea();
    staticTranslations();
  }, [locale]);

  const upCover = (covers)=>{
    dispatch({
        type:'UP_COVER_EVENT',
        value:covers
    })
  }
  const setBanner = (covers)=>{
    dispatch({
        type:'SET_BANNER',
        value:covers
    })
  }

  return (
    <MenuContext.Provider
      value={{
        defaultMenu: state.defaultMenu,
        tologged,
        register: state.register,
        info: state.info,
        menu_footer: state.menu_footer,
        line_st: state.line_st,
        cover_event: state.cover_event,
        banner: state.banner,
        upCover,
        setBanner
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default menuState;
