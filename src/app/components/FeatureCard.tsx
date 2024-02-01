import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  reverse?: boolean;
}

function FeatureCard({ title, description, reverse }: FeatureCardProps) {
  return (
    <div
      className={`bg-white bg-opacity-5 lg:h-[500px] w-full px-8  gap-16  py-3 h-full flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="flex flex-col justify-center flex-grow">
        <h3 className="text-4xl font-bold text-white text-center md:text-left my-3">
          {title}
        </h3>
        <p className="text-white text-center md:text-left max-w-xl">
          {description}
        </p>
      </div>
      <div className="  w-1/2 rounded-md md:h-full h-96 bg-gray-700"></div>
    </div>
  );
}

export default FeatureCard;
