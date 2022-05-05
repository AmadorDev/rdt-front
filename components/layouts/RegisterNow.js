import { useRouter } from "next/router";
import React, { useContext, useState, useRef } from "react";
import Button from "../widtgets/Button";
import toast from "react-hot-toast";
import menuContext from "../../contexts/menu/menuContext";
import { setEmail } from "../../api/emailApi";
export default function RegisterNow() {
  const [txt, setTxt] = useState("");
  const [chk, setChk] = useState(true);
  const { register } = useContext(menuContext);
  const { locale } = useRouter();

  const chkref = useRef(false);
  async function registerEmail() {
    if (chkref.current.checked && txt.trim().length > 0) {
      try {
        const res = await setEmail(locale, { email: txt });
        if (res?.error) {
          toast.error(res?.error);
        } else {
          toast.success(res?.message);
          setTxt("");
          chkref.current.checked = false;
        }
      } catch (error) {
        toast.error(JSON.stringify(error));
        setTxt("");
        chkref.current.checked = false;
      }
    } else {
      return ;
    }
  }

  return (
    <div className="shipping_area bg-register mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center mx-2 p-0 my-0">
          <div className="col-12 col-md-6  align-self-center text-md-start ">
            <p className="r-title">{register?.title}</p>
            <p className="r-subtitle mt-2 "> {register?.subtitle}</p>
          </div>
          <div className="col-12 col-md-6 align-self-center mt-4 mt-md-0 ">
            <div className="flex">
              <input
                className="form-control input-register mr-3"
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
              ></input>
              <Button className="mx-3" onClick={registerEmail}>
                {register?.btn}
              </Button>
            </div>
            <div className="flex mt-3 ">
              <label>
                <input type="checkbox" className="" ref={chkref} />
                <span className=""></span>
              </label>
              <span className="ml-2 t-register">{register?.policy}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
