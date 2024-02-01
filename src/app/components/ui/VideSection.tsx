import React from "react";
import Button from "./Button";
import Link from "next/link";

function VideSection() {
  return (
    <div className="w-full h-dvh bg-white  rounded-3xl  flex flex-col items-center">
      <h2 className="text-[#111823] mt-12 uppercase text-2xl font-Extrabold">
        Gallery
      </h2>
      <h1 className="text-4xl font-extrabold  text-[#111823] ">
        Explore video gallery
      </h1>
      <div className="w-full  h-full p-12 ">
        {" "}
        <iframe
          src="https://www.youtube.com/watch?v=aeDMatQUibY"
          className=" rounded-xl w-full h-full"
        ></iframe>
      </div>
      <div className="">
        <Link
          href={"/"}
          className="uppercase rounded-xl mb-8 bg-[#111823] text-white py-3 px-6 font-bold"
        >
          View gallery
        </Link>
      </div>
    </div>
  );
}

export default VideSection;
