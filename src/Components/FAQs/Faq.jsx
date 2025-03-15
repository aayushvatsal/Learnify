"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is this platform about?",
    answer:
      "This real-time learning platform offers interactive courses, live coding sessions, and expert mentorship to help you master new skills efficiently.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "Simply sign up, browse the available courses, and click on 'Enroll Now' to start learning instantly.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We provide free trial access to selected courses so you can explore before making a decision.",
  },
  {
    question: "Can I access courses on mobile?",
    answer:
      "Absolutely! Our platform is fully responsive and accessible on mobile, tablet, and desktop devices.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes! Upon successful completion of a course, you'll receive an industry-recognized certificate.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Have questions? We’ve got answers! Browse our most common inquiries below.
      </p>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-500" : "text-gray-500"
                }`}
              />
            </button>

            {/* Animated Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
