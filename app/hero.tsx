"use client";
import { motion } from "framer-motion";
export default function Hero({
  onScrollToPath,
}: {
  onScrollToPath: () => void;
}) {
  return (
    <motion.div
      className="h-screen w-full flex flex-col  gap-4 justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="lg:text-xl text-base text-slate-100 mt-4 animate-fade-in">
        Santiago Gericke Parga
      </p>
      <h1 className="lg:text-6xl text-2xl font-bold text-white text-center">
        Transforming Ideas into Scalable Solutions<br></br>
        <span className="lg:text-3xl text-base p-0 m-0">
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Challenging the status quo
          </span>{" "}
          with full-stack development, generative AI, and strategic innovation.
        </span>
      </h1>
      <p className="lg:text-lg text-sm text-slate-100 lg:mt-4 mt-1 animate-fade-in">
        Full Stack Developer | Generative AI Specialist | Strategy Analyst |
        Entrepreneur
      </p>
      <button
        onClick={onScrollToPath}
        className="mt-8 px-8 py-4 bg-white text-black rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
      >
        Explore My Work
      </button>
    </motion.div>
  );
}
