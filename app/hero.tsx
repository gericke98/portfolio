// Hero.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero({
  onScrollToPath,
}: {
  onScrollToPath: () => void;
}) {
  const { scrollY } = useScroll();
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  // Set viewportHeight immediately on mount and update on resize
  useEffect(() => {
    // Set the initial value as soon as the component mounts
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use a fallback value for viewportHeight to avoid division by zero
  const effectiveHeight = viewportHeight || 1;
  const heroOpacity = useTransform(scrollY, [0, effectiveHeight / 2], [1, 0]);

  return (
    <motion.div
      className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundColor: "#1a202c",
        opacity: heroOpacity,
      }}
    >
      <div className="relative z-10">
        <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Santiago Gericke Parga
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-200 max-w-2xl mx-auto">
          Hey! I&apos;m <strong>Santiago</strong> — a{" "}
          <strong>full-stack AI builder</strong> blending{" "}
          <strong>engineering</strong>, <strong>entrepreneurship</strong>, and{" "}
          <strong>product thinking</strong> to turn bold ideas into scalable
          impact. I&apos;m the founder of <strong>Tayliq</strong>, a Shopify App
          for <strong>AI-powered customer support</strong>, and{" "}
          <strong>CTO at Shameless Collective</strong>. My background spans{" "}
          <strong>data science</strong>, <strong>tech consulting</strong>, and{" "}
          <strong>software engineering</strong> — but what truly drives me is{" "}
          building real-world <strong>AI systems</strong> that remove friction,{" "}
          unlock growth, and shape better experiences for teams and users.
        </p>

        <motion.button
          onClick={onScrollToPath}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-4 bg-white text-black rounded-full shadow-lg transition-colors duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
          aria-label="Explore my work"
        >
          Explore My Work
        </motion.button>
      </div>
    </motion.div>
  );
}
