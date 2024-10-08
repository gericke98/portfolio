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

  useEffect(() => {
    if (!vantaEffect) {
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
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="lg:min-h-screen w-full">
      {children}
    </div>
  );
};

export default VantaBackground;
