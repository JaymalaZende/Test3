import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './Aboutus';
import EducationAndDevelopmentProgram from './Education';
import FooterWithLogo, { FooterWithSocialLinks } from './Footer';
import Gallery from './Gallery';
import AboutUsPage from './Aboutuspage';
import AdmissionForm from './Information';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdmissionProcess from './Information';
import ContactUs from './Contactus';
import Home from './Home';
import Footer from './Footer';
import Information from './Information';
import Contactus from './Contactus';

function Homepage() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutuspage" element={<AboutUsPage />} />
          <Route path="/admission" element={<Information/>} />
          <Route path="/Contact-us" element={<Contactus />} />
          </Routes>
         <Footer/>
      </Router>
    </div>
  );
}

export default Homepage;
