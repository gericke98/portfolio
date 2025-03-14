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
          Hey! I&apos;m <strong>Santiago</strong>, a{" "}
          <strong>full-stack developer</strong> and{" "}
          <strong>tech strategist</strong> passionate about building{" "}
          <strong>AI-powered solutions</strong>. Even though my professional
          background is in <strong>data science</strong> and{" "}
          <strong>tech consulting</strong>, I&apos;ve steadily expanded my
          expertise in <strong>software engineering</strong> by building
          <strong> production-ready platforms</strong>, developing{" "}
          <strong>multi-agent systems</strong> with <strong>AWS Bedrock</strong>
          , creating <strong>Next.js applications</strong> with{" "}
          <strong>server components</strong>, and implementing{" "}
          <strong>intelligent automation solutions</strong> that solve complex
          business challenges.
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
