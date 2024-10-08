"use client";
import Hero from "./hero";
import Path from "./path";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import VantaBackground from "./vantaBackground";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const pathRef = useRef<HTMLDivElement | null>(null);
  const [useVanta, setUseVanta] = useState(true);

  // Function to scroll to the Path section
  const scrollToPath = () => {
    pathRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const checkMobile = () => {
      setUseVanta(window.innerWidth > 768); // Disable Vanta for mobile devices
    };

    checkMobile(); // Run on component mount
    window.addEventListener("resize", checkMobile); // Recheck on window resize

    return () => window.removeEventListener("resize", checkMobile); // Cleanup listener
  }, []);
  return (
    <>
      {useVanta ? (
        <VantaBackground>
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
        </VantaBackground>
      ) : (
        <div className="w-full h-full font-[family-name:var(--font-geist-sans)] flex flex-col bg-custom-gradient">
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
      )}
    </>
  );
}
