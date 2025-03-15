"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-8 py-16">
      {/* Contact Form */}
      <motion.div
        className="w-full md:w-1/2 p-10 rounded-3xl shadow-lg bg-[#162032] border border-gray-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-400 to-purple-500 text-transparent bg-clip-text mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-6 text-lg">
          Have a question or want to work together? Fill out the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 bg-gray-900 text-white rounded-xl border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } focus:border-teal-400 focus:ring focus:ring-teal-300 transition-all`}
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 bg-gray-900 text-white rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } focus:border-teal-400 focus:ring focus:ring-teal-300 transition-all`}
                placeholder="Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-teal-400 focus:ring focus:ring-teal-300 transition-all"
            placeholder="Subject"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-teal-400 focus:ring focus:ring-teal-300 transition-all"
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-xl transition-all"
          >
            {submitted ? "Message Sent ✅" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* Location Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 text-center space-y-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MapPin size={50} className="text-teal-400 mb-4" />
        <h2 className="text-3xl font-bold">Our Location</h2>
        <p className="text-lg text-gray-300">1234 Street Name, City, Country</p>
        <p className="text-lg text-gray-300">Phone: +1 234 567 890</p>
        <p className="text-lg text-gray-300">Email: contact@yourwebsite.com</p>

        {/* Google Map Embed */}
        <div className="w-full max-w-lg h-64 mt-6">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509582!2d144.95373531550434!3d-37.81627944202133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1596199021245!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
