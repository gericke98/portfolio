"use client";
import Hero from "./hero";
import Path from "./path";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
// import VantaBackground from "./vantaBackground";
import { useRef } from "react";

export default function Home() {
  const pathRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the Path section
  const scrollToPath = () => {
    pathRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <VantaBackground>
    <div className="w-full h-full font-[family-name:var(--font-geist-sans)] flex flex-col">
      <main className="flex flex-col items-center w-full h-full">
        <Hero onScrollToPath={scrollToPath} />
        <div className="h-full w-full">
          <div className="w-full h-full" ref={pathRef}>
            <Path />
          </div>
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
    // </VantaBackground>
  );
}
