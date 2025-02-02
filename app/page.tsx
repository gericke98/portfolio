"use client";
import Hero from "./hero";
import Path from "./path";
import Contact from "./contact";
import Footer from "./footer";
import { useRef } from "react";
import Projects from "./projects";

export default function Home() {
  const pathRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the Path section
  const scrollToPath = () => {
    pathRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-custom-gradient text-white">
      <main className="flex flex-col items-center w-full h-full space-y-16 b">
        <Hero onScrollToPath={scrollToPath} />
        <div className="w-full mx-auto px-4 lg:px-20">
          <div ref={pathRef}>
            <Path />
          </div>
          {/* <Skills /> */}
          <Projects />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
