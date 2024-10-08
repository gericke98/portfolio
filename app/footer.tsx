import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import only available icons

const Footer = () => (
  <footer className="w-full py-6 bg-black text-white flex flex-col items-center">
    <div className="flex gap-6 mb-4">
      {/* LinkedIn Icon */}
      <a
        href="https://www.linkedin.com/in/santiago-gericke-parga/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 flex items-center"
      >
        <FaLinkedin size={24} />
        <span className="ml-2">LinkedIn</span>
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/gericke98"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 flex items-center"
      >
        <FaGithub size={24} />
        <span className="ml-2">GitHub</span>
      </a>
    </div>
    <p className="text-sm">
      © {new Date().getFullYear()} Santiago Gericke Parga. All rights reserved.
    </p>
  </footer>
);

export default Footer;
