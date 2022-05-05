import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import menuContext from "../../contexts/menu/menuContext";

export default function Footer() {
  const {info,menu_footer} = useContext(menuContext)
  return (
    <>
      {/*footer area start*/}
      <footer className="footer_widgets">
        <div className="footer_top">
          <div className="container">
            <div className="row my-0 p-0 mx-2">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col">
                    <img src="/images/radiant.png"></img>
                  </div>
                  <div className="col">
                    <div className="lh-1">
                      <span className="t-footer"> {info?.address_text}</span>
                      <br></br>
                      <small className="t-footer-tran">{info?.address}</small>
                    </div>
                    <div>
                      <span className="t-footer"> {info?.email_text}</span>
                      <br></br>
                      <small className="t-footer-tran">{info?.email}</small>
                    </div>
                    <div>
                      <span className="t-footer">{info?.contact_text}</span>
                      <br></br>
                      <small className="t-footer-tran">{info?.contact}</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6  d-flex align-items-center justify-end mt-3 mt-md-0">
                <div className="row ">
                  <div className="col-6 border">
                    {" "}
                    <img src="/images/radiant.png"></img>
                  </div>
                  <div className="col-6 border">
                    {" "}
                    <img src="/images/radiant.png"></img>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5  ">
              <div className="col-12 col-md-10 align-self-center">
                {menu_footer?.map((item,index)=>(
                  
                  <Link href={`/${item.url}`} key={index}>
                  <span className="link-footer mx-3">{item.title}</span>
                  </Link>
                  
                  ))}
                
                
              </div>
              <div className="col-12 col-md-2 d-flex text-right align-self-center justify-content-end ">
                <img src="/images/fb.png" className=" fb_footer ml-2"></img>
                <img src="/images/inst.png" className=" inst_footer ml-2"></img>
                <img src="/images/yt.png" className="yt_footer ml-2"></img>
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
