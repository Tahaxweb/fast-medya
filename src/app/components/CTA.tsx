import React from "react";
import Button from "./ui/Button";

function CTA() {
  return (
    <div className="flex flex-col items-center max-w-7xl  py-24 gap-y-8  w-full mx-auto   ">
      <h3 className=" text-center  text-7xl font-extrabold text-white">
        What can you imagine?
      </h3>
      <Button variant="hero">start free trial</Button>
      <p className="text-light text-white">No credit card required</p>
    </div>
  );
}

export default CTA;
