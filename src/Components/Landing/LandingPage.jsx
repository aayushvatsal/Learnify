import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import KeyFeatures from '../KeyFeatures/KeyFeatures'
import CoursesOverview from '../CoursesOverview/Courseoverview'
import Testimonials from '../Testimonials/Testimonials'
import FAQs from '../FAQs/Faq'
// import ThePlatform from "../ThePlatform/platform"
import ContactForm from '../Contacts/Contacts'
import FooterComponent from '../FooterSection/Footer'


const LandingPage = () => {
  return (
    <div>
       <Navbar/>
       <HeroSection/>
       <KeyFeatures/>
       {/* <ThePlatform/> */}
       <CoursesOverview/>
       <Testimonials/>
       <FAQs/>
       <ContactForm/>
       <FooterComponent/>
      
       
       
       
       
       
    </div>
  )
}

export default LandingPage