import React from "react";
import FeatureCard from "./FeatureCard";
const FeatureCardValue = [
  {
    title: "Text is all you need",
    reverse: true,
    description:
      "Describe your video and let our AI generator bring your creation to life.",
  },
  {
    title: "Sync to your audio",
    reverse: false,
    description:
      "Perfect for creating music videos, visualizers, Spotify canvases, or promos for your social media channels.",
  },
  {
    title: "Your video, your style",
    reverse: true,
    description:
      "There's a unique AI style for everyone. Create an anime intro, a psychedelic music video, or photorealistic footage.",
  },
  {
    title: "You're in control",
    reverse: false,
    description:
      "A familiar timeline editor gives you the control you need to make your vision a reality.",
  },
];

function Features() {
  return (
    <div className="flex items-center mt-20 flex-col w-full">
      <h1 className="text-white text-xl uppercase">features</h1>
      <h2 className="text-white text-center mb-5 text-6xl font-extrabold">
        Your creative toolkit
      </h2>
      <div className="px-2 w-full flex flex-col gap-y-4">
        {FeatureCardValue.map((data, index) => (
          <FeatureCard
            key={index}
            title={data.title}
            description={data.description}
            reverse={data.reverse}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
