import React from "react";

export default function ItemWithImage({ fondImg, children }) {
  var style = {
    width: "100%",
    height: "678px",
    backgroundImage: `url( ${fondImg} )`,
    backgroundSize: "cover",
  };
  return (
    <div style={style} className="col mx-2 d-flex align-items-center justify-content-center mt-3 mt-md-0">
      <div className=" mx-2 md:mx-5 col-12 col-md-8">{children}</div>
    </div>
  );
}
