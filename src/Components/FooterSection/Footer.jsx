'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function FooterComponent() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl font-semibold">Learnify</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">Empowering your learning experience</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Courses</h2>
            <nav className="list-none mb-6">
              <li><Link href="/courses/web-development" className="text-gray-600 hover:text-gray-800">Web Development</Link></li>
              <li><Link href="/courses/data-science" className="text-gray-600 hover:text-gray-800">Data Science</Link></li>
              <li><Link href="/courses/design" className="text-gray-600 hover:text-gray-800">Graphic Design</Link></li>
              <li><Link href="/courses/marketing" className="text-gray-600 hover:text-gray-800">Digital Marketing</Link></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
            <nav className="list-none mb-6">
              <li><Link href="/resources/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
              <li><Link href="/resources/tutorials" className="text-gray-600 hover:text-gray-800">Tutorials</Link></li>
              <li><Link href="/resources/webinars" className="text-gray-600 hover:text-gray-800">Webinars</Link></li>
              <li><Link href="/resources/certifications" className="text-gray-600 hover:text-gray-800">Certifications</Link></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-6">
              <li><Link href="/about-us" className="text-gray-600 hover:text-gray-800">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-800">Careers</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-gray-800">Press</Link></li>
              <li><Link href="/partners" className="text-gray-600 hover:text-gray-800">Partners</Link></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Support</h2>
            <nav className="list-none mb-6">
              <li><Link href="/support/contact" className="text-gray-600 hover:text-gray-800">Contact Support</Link></li>
              <li><Link href="/support/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link></li>
              <li><Link href="/support/terms" className="text-gray-600 hover:text-gray-800">Terms of Service</Link></li>
              <li><Link href="/support/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</Link></li>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Learnify — All Rights Reserved.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-gray-700">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-gray-700">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-gray-700">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-gray-700">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
