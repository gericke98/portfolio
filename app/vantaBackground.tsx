"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // Import three.js as required by Vanta
import NET from "vanta/dist/vanta.net.min"; // Import the Vanta net effect

interface VantaEffect {
  destroy: () => void;
}

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null); // Reference for Vanta effect container
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile screens
    };

    checkMobile(); // Run on component mount
    window.addEventListener("resize", checkMobile); // Check when window is resized

    return () => window.removeEventListener("resize", checkMobile); // Cleanup listener
  }, []);

  useEffect(() => {
    if (!isMobile && !vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          backgroundAlpha: 1,
          backgroundColor: 0x000000, // Set background color (black)
          color: "white", // Color for dots
          maxDistance: 30,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 150.0,
          minWidth: 150.0,
          scale: 0.7,
          scaleMobile: 0.5,
          showDots: false,
          spacing: 25,
          points: 15,
        })
      );
    }

    // Clean up the effect when the component unmounts
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  return (
    <div ref={vantaRef} className="lg:min-h-screen w-full">
      {isMobile ? (
        <div className="min-h-screen w-full bg-custom-gradient">{children}</div> // Static background on mobile
      ) : (
        children
      )}
    </div>
  );
};

export default VantaBackground;
