import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <motion.div
    className="w-full py-16 bg-gray-100 flex flex-col items-center lg:px-32 px-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h2 className="lg:text-4xl text-2xl font-bold mb-8 text-gray-800">
      Contact Me
    </h2>
    <p className="lg:text-lg text-base mb-6 text-center text-gray-600">
      I&apos;m open to new opportunities, collaborations, or just a friendly
      chat! Reach out to me via phone or email.
    </p>

    <div className="flex flex-col space-y-4 text-center">
      <p className="lg:text-base text-sm text-gray-700 flex items-center justify-center gap-2">
        <FaPhone className="text-blue-500" />
        <span className="font-medium">Phone:</span>
        <a href="tel:+34608667749" className="text-blue-500 hover:underline">
          +34 608 667 749
        </a>
      </p>
      <p className="lg:text-base text-sm text-gray-700 flex items-center justify-center gap-2">
        <FaEnvelope className="text-blue-500" />
        <span className="font-medium">Email:</span>
        <a
          href="mailto:sgerickee@gmail.com"
          className="text-blue-500 hover:underline"
        >
          sgerickee@gmail.com
        </a>
      </p>
    </div>
  </motion.div>
);

export default Contact;
