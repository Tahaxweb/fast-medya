import Navbar from "./components/ui/Header";

import Button from "./components/ui/Button";
import UseCases from "./components/UseCases";
import Hero from "@/app/components/Hero";
import Features from "./components/Features";
import VideSection from "./components/ui/VideSection";
export default function Home() {
  return (
    <div className="bg-[#111823]    h-full ">
      <Navbar />
      <Hero />
      <UseCases />
      <Features />
      <div className="mx-2">
        <VideSection />
      </div>
    </div>
  );
}
