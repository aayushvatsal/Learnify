"use client";
import { useRef } from "react";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
  {
    title: "Web Development Mastery",
    description: "Master HTML, CSS, and JavaScript.",
    image: "/Images/web-development.jpg",
    duration: "3 Months",
    lessons: 20,
    students: "120+",
    level: "Beginner",
    rating: 4.8,
  },
  {
    title: "Python for Beginners",
    description: "Learn Python basics from scratch.",
    image: "/Images/python.jfif",
    duration: "2 Months",
    lessons: 15,
    students: "90+",
    level: "Intermediate",
    rating: 4.7,
  },
  {
    title: "Full-Stack Development",
    description: "Learn React, Node.js, MongoDB.",
    image: "/Images/fullstack.jfif",
    duration: "4 Months",
    lessons: 25,
    students: "150+",
    level: "Advanced",
    rating: 4.9,
  },
  {
    title: "Data Science & AI",
    description: "Explore Machine Learning & Data Analysis.",
    image: "/Images/data-science.jfif",
    duration: "5 Months",
    lessons: 30,
    students: "200+",
    level: "Expert",
    rating: 4.9,
  },
];

export default function CoursesOverview() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-600">
          Courses Overview
        </h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-semibold">
          <span className="text-blue-700 font-extrabold">Explore</span> our top
          courses, carefully crafted to{" "}
          <span className="text-blue-600 font-extrabold">boost</span> your skills and
          accelerate your learning journey.
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Left Button */}
          <button
            className="absolute top-1/2 -left-12 md:-left-10 lg:-left-12 transform -translate-y-1/2 bg-blue-500 p-4 rounded-full shadow-md hover:bg-blue-400 transition z-10 text-white"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeft size={24} />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings}>
            {courses.map((course, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transition transform hover:scale-105">
                  {/* Course Image */}
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <FaClock className="mr-1" /> {course.duration}
                    </span>
                  </div>

                  {/* Course Content */}
                  <div className="p-5 text-gray-800">
                    {/* Rating */}
                    <div className="flex items-center text-yellow-500 text-sm">
                      {"★".repeat(Math.floor(course.rating))}{" "}
                      <span className="text-gray-600 ml-2">
                        ({course.rating})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mt-2">
                      {course.title}
                    </h3>

                    {/* Course Details */}
                    <div className="flex items-center justify-between text-gray-600 text-sm mt-3">
                      <div className="flex items-center">
                        <FaBookOpen className="mr-1" /> {course.lessons} Lessons
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="mr-1" /> {course.students} Students
                      </div>
                      <div className="flex items-center">
                        <FaChartLine className="mr-1" /> {course.level}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Right Button */}
          <button
            className="absolute top-1/2 -right-12 md:-right-10 lg:-right-12 transform -translate-y-1/2 bg-blue-500 p-4 rounded-full shadow-md hover:bg-blue-400 transition z-10 text-white"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRight size={24} />
          </button>
        </div>

        {/* Browse All Courses Button */}
        <div className="mt-12">
          <a
            href="/courses"
            className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-500 transition"
          >
            Browse All Courses
          </a>
        </div>
      </div>
    </section>
  );
}
