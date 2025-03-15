import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import KeyFeatures from '../KeyFeatures/KeyFeatures'
import CoursesOverview from '../CoursesOverview/Courseoverview'
import Testimonials from '../Testimonials/Testimonials'
import FAQs from '../FAQs/Faq'
import ContactForm from '../Contacts/Contacts'
import FooterComponent from '../FooterSection/Footer'
import Features from '../OurFeatures/Features'


const LandingPage = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <KeyFeatures/>
       <Features/>
       <CoursesOverview/>
       <Testimonials/>
       <FAQs/>
       <ContactForm/>
       <FooterComponent/>
      
       
       
       
       
       
    </div>
  )
}

export default LandingPage