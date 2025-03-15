"use client"; // Needed for Next.js if using Framer Motion in Next 13+

import {
  FaCode,
  FaBook,
  FaCertificate,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCode className="text-blue-500 text-4xl" />,
    title: "Interactive Code Editor",
    description: "Write and run code in real-time.",
  },
  {
    icon: <FaBook className="text-green-500 text-4xl" />,
    title: "Comprehensive Courses",
    description: "Learn HTML, CSS, JavaScript, Python, etc.",
  },
  {
    icon: <FaCertificate className="text-yellow-500 text-4xl" />,
    title: "Quizzes & Certifications",
    description: "Test your skills and earn certificates.",
  },
  {
    icon: <FaUsers className="text-purple-500 text-4xl" />,
    title: "Live Support & Community",
    description: "Ask questions, get help from experts.",
  },
  {
    icon: <FaChartLine className="text-red-500 text-4xl" />,
    title: "Track Your Progress",
    description: "Personalized learning dashboard.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-600">
          Key Features
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-semibold">
          <span className="font-semibold text-blue-600 font-extrabold">Discover</span> the best
          features of our platform, thoughtfully crafted to{" "}
          <span className="text-blue-500 font-bold">elevate</span> your
          learning experience and{" "}
          <span className="text-blue-400 font-bold">boost</span> your skills
          effortlessly.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-blue-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mt-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
