"use client";
import Hero from "./hero";
import Path from "./path";
import Skills from "./skills";
import Contact from "./contact";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import VantaBackground only for desktop
const VantaBackground = dynamic(() => import("./vantaBackground"), {
  ssr: false,
}); // Disable server-side rendering
export default function Home() {
  const pathRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Function to scroll to the Path section
  const scrollToPath = () => {
    pathRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 768); // Set to true if screen width > 768px
    };

    // Run on mount and on window resize
    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkIfDesktop);
  }, []);
  return (
    <>
      {isDesktop ? (
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
