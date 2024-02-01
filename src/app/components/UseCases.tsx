import Image from "next/image";
import React from "react";
import UseCase1 from "/public/images/use-case-images/use-case1.svg";
import UseCase2 from "/public/images/use-case-images/use-case2.svg";
import UseCase3 from "/public/images/use-case-images/use-case3.svg";
import UseCase4 from "/public/images/use-case-images/use-case4.svg";
import Button from "./ui/Button";
interface Item {
  name: string;
  imageSrc: string;
}
const Items: Item[] = [
  { name: "Music Videos", imageSrc: UseCase1 },
  { name: "News", imageSrc: UseCase2 },
  { name: "Live Performances", imageSrc: UseCase3 },
  { name: "Interviews", imageSrc: UseCase4 },
];

function UseCases() {
  return (
    <div className="flex flex-col items-center mt-20 ">
      <div className="flex flex-col items-center  gap-y-5">
        <h2 className=" text-3xl text-white font-medium  uppercase ">
          Use Cases
        </h2>
        <h1 className=" text-6xl font-extrabold text-center text-white">
          Imagination unleashed
        </h1>
      </div>
      <div className="grid grid-cols-1   my-11 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-6xl mx-auto gap-x-6">
        {Items.map(function (data) {
          return (
            <div>
              <Image
                src={data.imageSrc}
                alt="your ımage"
                className="w-full  "
                width={300}
                height={500}
              />
              <p className="text-white text-center font-bold my-4 text-2xl">
                {data.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button variant="hero"> try now</Button>
      </div>
    </div>
  );
}

export default UseCases;
