"use client";
import { timelineData } from "@/placeholder";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

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
    offset: ["start 99%", "end 10%"], // Trigger when the item reaches the center of the viewport
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.8, 1], [0.4, 1, 0.4]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    title === "The Next Chapter – Silicon Valley & Beyond"
      ? ["#c0c0c0", "#dd8383", "#ab6161"]
      : ["#c0c0c0", "#cbcaca", "#c0c0c0"]
  );

  return (
    <motion.div
      ref={ref}
      className="w-full h-48 p-4 shadow-lg rounded-md overflow-auto"
      style={{ opacity, backgroundColor }}
    >
      <div>
        <h3
          className={cn(
            "lg:text-xl text-lg font-semibold",
            title === "The Next Chapter – Silicon Valley & Beyond" &&
              "text-gray-100 font-bold"
          )}
        >
          {title}
        </h3>
        <span
          className={cn(
            "text-sm lg:text-base text-gray-500",
            title === "The Next Chapter – Silicon Valley & Beyond" &&
              "text-slate-200"
          )}
        >
          {date}
        </span>
        <p
          className={cn(
            "mt-2 text-gray-700 lg:text-base text-sm",
            title === "The Next Chapter – Silicon Valley & Beyond" &&
              "text-gray-300"
          )}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="flex flex-col items-center py-5 lg:px-32 px-4">
      <h2 className="lg:text-4xl text-2xl font-bold mb-12 text-white">
        My Journey
      </h2>

      <div className="relative border-l-2 border-gray-300">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 lg:ml-6 ml-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <TimelineItem
              title={item.title}
              date={item.date}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
