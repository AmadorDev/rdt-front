import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import Divider from "../utils/Divider";
import Button from "../widtgets/Button";

export default function TestInfo({text}) {

  const {locale} = useRouter()
  const info =text?.filter((item,ind)=>item.locale === locale)[0]
  return (
    <div>
      <Divider></Divider>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-around   items-center  space-y-2 mx-2">
          <div className="item md:w-1/2  ">
            <div className="text-left">
              <h1 className="g_title">
              {info?.title_one}<br></br>
              {info?.title_two}<br></br>
                {info?.title}
              </h1>

              <p className="g_desc">
                {info?.content}
              </p>

              <Button className="mt-3 px-5">
                <Link href="/capillaries/start">{info?.btn}</Link>
              </Button>
            </div>
          </div>
          <div className="item md:w-1/2  flex justify-end">
            {/* <img src="/dev/flaca.png" className="flex self-end "></img> */}
            <Image src="/images/model.png" className="flex self-end" width={421} height={379}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
