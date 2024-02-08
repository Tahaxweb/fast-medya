import React from "react";
import Logo from "/public/images/fastmedya-logo.svg";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <>
      <footer className="  gap-y-5  flex  mx-8  flex-col items-center">
        <div>
          <Image src={Logo} alt="" />
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex w-full    items-center  justify-between">
          <div className="flex  gap-x-4">
            <h3 className=" text-white font-light">
              Copyright © {new Date().getFullYear()} Fast medya, Co.
            </h3>
            <h3 className=" text-white font-light">All rights reserved.</h3>
          </div>
          <div className="flex gap-x-4">
            <div className=" w-12 h-12 rounded-full bg-white"></div>
            <div className=" w-12 h-12 rounded-full bg-white"></div>
            <div className=" w-12 h-12 rounded-full bg-white"></div>
            <div className=" w-12 h-12 rounded-full bg-white"></div>
          </div>
          <div className="flex gap-x-4 text-white">
            <Link href={""} className=" uppercase">
              contact
            </Link>
            <Link href={""} className=" uppercase">
              career
            </Link>

            <Link href={""} className=" uppercase">
              terms
            </Link>
            <Link href={""} className=" uppercase">
              privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
