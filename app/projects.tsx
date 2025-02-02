// Projects.tsx
"use client";

import { motion } from "framer-motion";
import { projects } from "@/placeholder";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="flex flex-col items-center my-20">
      <h2 className="lg:text-4xl text-2xl font-bold mb-6 text-white">
        Projects
      </h2>
      <p className="lg:text-lg text-base text-center text-gray-200 mb-12 max-w-3xl">
        Here are some of my most impactful projects—each a testament to
        innovation and scalable solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative block w-80 h-80 p-6 rounded-lg shadow-lg border border-gray-700 bg-gray-800 overflow-hidden flex flex-col"
          >
            {/* Content Container with scrolling enabled if needed */}
            <div className="flex-grow overflow-y-auto">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <p
                className="text-gray-300 text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              {project.techStack && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs border border-purple-600 text-purple-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with buttons */}
            <div className="flex justify-between items-center mt-4">
              {project.liveDemo && project.liveDemoLink && (
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded text-sm"
                >
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
