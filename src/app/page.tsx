import Navbar from "./components/ui/Header";

import Button from "./components/ui/Button";
import UseCases from "./components/UseCases";
import Hero from "@/app/components/Hero";
export default function Home() {
  return (
    <div className="bg-[#111823]    h-full ">
      <Navbar />
      <Hero />
      <UseCases />
    </div>
  );
}
