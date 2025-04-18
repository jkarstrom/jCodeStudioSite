import Image from "next/image";
import Hero from "./components/page/Hero";
import AdventureCards from "./components/page/AdventureCards";

export default function Home() {
  return (
    <div className="w-screen">
      <Hero />
      <AdventureCards />
    </div>
  );
}
