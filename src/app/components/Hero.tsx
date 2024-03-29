import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Banner from "/public/images/banner-image.svg";
function Hero() {
  return (
    <>
      <div className=" mx-2  pt-20">
        <Image src={Banner} alt="banner" />
      </div>
      <div className="flex flex-col items-center  gap-y-12">
        <h1 className="  text-6xl z-10 md:text-7xl lg:text-8xl   xl:text-9xl  font-bold  relative    -mt-16  md:-mt-20 lg:-mt-20 xl:-mt-32 flex w-full justify-center text-white text-center">
          Create what <br />
          can't be filmed
        </h1>
        <div className="flex flex-col items-center  gap-y-4">
          <h3 className=" text-3xl text-white font-semibold  tracking-wide">
            generate ai video
          </h3>
          <Button variant="hero"> start free trial</Button>
          <p className="text-white  font-light">No credit card required</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
