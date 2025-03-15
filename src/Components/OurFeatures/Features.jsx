"use client";
import { useState } from "react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "AI-assisted Learning",
    text: "Accelerate your learning with AI-powered guidance tailored to your progress and needs.",
    image: "/Images/ai-learningg.webp",
  },
  {
    id: 2,
    title: "Real-world Projects",
    text: "Gain hands-on experience by working on industry-relevant projects designed to sharpen your skills.",
    image: "/Images/real-world-projects.jpg",
  },
  {
    id: 3,
    title: "Job-readiness Checker",
    text: "Evaluate your skill level and job market readiness with expert insights and AI analysis.",
    image: "/Images/job-readiness.gif",
  },
  {
    id: 4,
    title: "Interview Simulator",
    text: "Prepare for your dream job with our AI-powered mock interviews and real-time feedback.",
    image: "/Images/interview-simulator.gif",
  },
  {
    id: 5,
    title: "Assessments",
    text: "Test your knowledge with interactive quizzes and assessments, ensuring you stay ahead.",
    image: "/Images/assessments.jpg",
  },
];
export default function Platform() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-8">
      {/* Left Section - Navbar */}
      <div className="md:w-1/3 w-full flex flex-col space-y-5">
        <h2 className="text-4xl font-bold text-center md:text-left mb-6 bg-gradient-to-r from-[#3b82f6] to-[#6366f1] text-transparent bg-clip-text">
          Explore Our Features
        </h2>
        <div className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`w-full text-left py-4 px-6 rounded-xl font-medium transition-all duration-300 text-lg shadow-lg
                ${
                  activeSection.id === section.id
                    ? "bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white shadow-xl scale-105"
                    : "bg-[#1e293b] hover:bg-[#3b82f6] hover:text-white hover:shadow-md"
                }`}
              onClick={() => setActiveSection(section)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - Content Display */}
      <div className="md:w-2/3 w-full flex flex-col items-center justify-center text-center p-8 space-y-8">
        <h2 className="text-5xl font-extrabold text-[#60a5fa] drop-shadow-md">
          {activeSection.title}
        </h2>
        <p className="text-lg max-w-xl text-gray-300 leading-relaxed">
          {activeSection.text}
        </p>
        <div className="relative w-full flex justify-center">
          <div className="relative w-[80%] max-w-lg">
            {activeSection.image && (
              <Image
                src={activeSection.image}
                alt={activeSection.title}
                width={600}
                height={400}
                unoptimized={true} // ✅ Fix: Ensure local images load correctly
                className="rounded-xl shadow-2xl transition-transform duration-300 transform hover:scale-105"
              />
            )}
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-xl blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
