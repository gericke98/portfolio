"use client";
import { skillsData } from "@/placeholder";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState<null | number>(null);

  // Toggle flip state
  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center my-20 lg:px-32 px-10">
      <h2 className="lg:text-4xl text-2xl font-bold mb-12 text-white">
        My Skills & Values
      </h2>

      {/* Introductory Text */}
      <p className="lg:text-lg text-base text-center text-gray-200 mb-8 max-w-3xl">
        I offer a unique skill set that combines technical knowledge with
        business strategy, communication, and teamwork skills to deliver
        impactful solutions and drive results.
      </p>

      {/* Container for perspective */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative w-full h-72"
            style={{ perspective: "1000px" }} // Perspective for the 3D effect
          >
            <motion.div
              className={`relative w-full h-full rounded-lg shadow-lg transition-transform duration-700 ${
                flippedIndex === index ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Face */}
              <div
                className="absolute w-full h-full rounded-lg p-6 shadow-md flex flex-col justify-between bg-gradient-to-r from-gray-900 to-gray-600 text-white overflow-auto"
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div>
                  <div className="flex items-center mb-4">
                    <skill.icon color="white" size={30} />
                    <h3 className="ml-4 lg:text-lg text-base font-semibold text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-gray-100 lg:text-base text-sm">
                    {skill.description}
                  </p>
                </div>

                {/* Show "View Projects" button if the skill has projects */}
                {skill.projects && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleFlip(index)}
                      className="w-full px-4 py-2 rounded focus:outline-none hover:scale-105 bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    >
                      View Projects
                    </button>
                  </div>
                )}
              </div>

              {/* Back Face */}
              <div
                className={`absolute w-full h-full rounded-lg p-6 shadow-md bg-gradient-to-r from-gray-900 to-gray-600 text-white transform rotate-y-180 overflow-auto`}
                style={{
                  backfaceVisibility: "hidden",
                }}
              >
                <div>
                  <h4 className="lg:text-lg text-base font-semibold">
                    Related Projects:
                  </h4>
                  <ul className="list-disc ml-5 mt-2 gap-1">
                    {skill.projects?.map((project, index) => (
                      <li key={index} className="mb-4 lg:text-base text-sm">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {project.name}
                        </a>{" "}
                        - {project.description}
                        {/* Tech Stack */}
                        <div className="mt-2 gap-2">
                          <strong className="lg:text-base text-sm">
                            Tech Stack:
                          </strong>{" "}
                          {project.techStack?.map((tech, index) => (
                            <span
                              key={index}
                              className="inline-block mr-2 px-2 py-1 bg-blue-300 text-blue-900 rounded lg:text-base text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => toggleFlip(index)}
                  className="w-full mt-4 px-4 py-2 rounded focus:outline-none hover:scale-105 bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                >
                  Back
                </button>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
