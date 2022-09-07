import React, { useEffect, useRef } from "react";

export default function ModalAnimate({
  children,
  show,
  setShow,
  title = "",
  setYyLink,
}) {
  const modal_overlay = useRef(null);
  const modal = useRef(null);

  function openModal(value) {
    // const modal_overlay = document.querySelector("#modal_overlay");
    // const modal = document.querySelector("#modal");

    const modalCl = modal.current.classList;
    const overlayCl = modal_overlay.current;

    if (value) {
      overlayCl.classList.remove("hidden");
      setTimeout(() => {
        modalCl.remove("opacity-0");
        modalCl.remove("-translate-y-full");
        modalCl.remove("scale-150");
      }, 100);
    } else {
      modalCl.add("-translate-y-full");
      setTimeout(() => {
        modalCl.add("opacity-0");
        modalCl.add("scale-150");
      }, 100);
      setTimeout(() => {
        overlayCl.classList.add("hidden");
        setYyLink(null);
      }, 300);
    }
  }

  useEffect(() => {
    openModal(show);

    return () => {};
  }, [show]);

  return (
    <>
      
      {/* overlay */}
      <div
        style={{ zIndex: 9999999 }}
        ref={modal_overlay}
        className="hidden fixed  inset-0 bg-black bg-opacity-70 h-screen w-full flex justify-center items-center "
      >
        {/* modal */}
        <div
          ref={modal}
          className="pacity-0 p-0 m-0 transform  -translate-y-full scale-150  relative w-4/5 md:w-1/4 h-auto bg-white rounded shadow-lg transition-opacity transition-transform duration-300"
        >
          {/* button close */}
          <button
            onClick={() => setShow(false)}
            className="absolute -top-3 -right-3  text-2xl w-10 h-10 rounded-full focus:outline-none  btnclose_modal"
          >
            ✗
          </button>
          {/* header */}
          <div className="px-4 md:py-3 ">
            <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
          </div>
          {/* body */}
          <div className="p-0 m-0">{children}</div>
        </div>
      </div>
    </>
  );
}
