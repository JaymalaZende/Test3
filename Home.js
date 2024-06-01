import React from 'react'
import HeroSection from './HeroSection'
import AboutUs from './Aboutus'
import EducationAndDevelopmentProgram from './Education'
import Gallery from './Gallery'
import Login from './login'

function Home() {
  return (
    <div>
     <HeroSection/>
     <AboutUs/>
     <EducationAndDevelopmentProgram/>
     <Gallery/>
     {/* <School /> */}
     {/* <Login /> */}
     
      </div>
  )
}

export default Home ;