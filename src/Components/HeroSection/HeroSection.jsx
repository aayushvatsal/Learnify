import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-10 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Hero Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Learn to Code{" "}
              <span className="text-yellow-400">Anytime, Anywhere!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed animate-fadeInUp">
              Master programming with interactive lessons and real-time coding.
              Start your journey today and build real-world projects.Unlock the
              power of coding with our online compiler. Our platform provides a seamless
              experience to write, compile, and execute code directly in your
              browser, without the need for any installation.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg cursor-pointer shadow-lg transition duration-300 animate-fadeIn">
              Start Learning for Free
            </button>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center animate-fadeInRight">
            <Image
              className="rounded-lg shadow-xl"
              src="/Images/banner.webp"
              alt="Online Compiler Banner"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//     return (
//       <section className="relative w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-24 bg-gradient-to-r from-blue-100 via-blue-50 to-white">
//         {/* Left Side - Text Content */}
//         <div className="text-center lg:text-left max-w-2xl">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
//             Learn to Code <span className="text-blue-600">Anytime, Anywhere!</span>
//           </h1>
//           <p className="mt-4 text-lg md:text-xl text-gray-600">
//             Master programming with interactive lessons and real-time coding.
//             Start your journey today and build real-world projects.
//           </p>
//           <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300 hover:bg-blue-700">
//             Start Learning for Free
//           </button>
//         </div>

//         {/* Right Side - Illustration */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <img
//              src="/Images/HeroSection.jpg"
//             alt="Student Coding"
//             className="w-full max-w-lg lg:max-w-xl animate-fadeIn"

//           />
//         </div>
//       </section>
//     );
//   };

//   export default HeroSection;
