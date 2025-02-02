// Timeline.tsx (or within your Path component)
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { timelineData } from "@/placeholder";
import { useRef } from "react";

const TimelineItem = ({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  // Animate scale based on scroll position for a subtle zoom effect.
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div ref={ref} className="relative pl-8 pb-8" style={{ scale }}>
      {/* Timeline marker */}
      <span className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full"></span>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <span className="text-sm text-gray-300">{date}</span>
      <p className="mt-2 text-gray-200">{description}</p>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        My Journey
      </h2>
      <div className="relative border-l-2 border-gray-500">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
