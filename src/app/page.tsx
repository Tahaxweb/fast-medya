import Navbar from "./components/ui/Header";

import Button from "./components/ui/Button";
import UseCases from "./components/UseCases";
import Hero from "@/app/components/Hero";
import Features from "./components/Features";
import VideSection from "./components/ui/VideSection";
import CTA from "./components/CTA";
import Footer from "./components/ui/Footer";
export default function Home() {
  return (
    <div className="bg-[#111823] flex flex-col  gap-y-20   h-full ">
      <Navbar />
      <Hero />
      <UseCases />
      <Features />
      <div className="mx-2">
        <VideSection />
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
