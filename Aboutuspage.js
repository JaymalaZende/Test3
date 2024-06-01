import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Navbar from './Navbar';
import HeroSection from './HeroSection';

const AboutUsPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false }); // Initialize AOS with animations reset on scroll
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <div className="max-h-72"></div>
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">
            PRABHURAM GURUKUL<br className='pt-10'/> Nurturing Excellence and Values
          </h1>
          <p className="text-xl text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            Welcome to Prabhuram Gurukul, a sanctuary of holistic learning where ancient wisdom meets modern education. Our mission is to cultivate well-rounded individuals through a unique blend of value-based education, theoretical and applied knowledge, and a deep connection to our cultural heritage.
          </p>

          <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <Section
              title="Our Core Philosophy"
              text="At Prabhuram Gurukul, we believe that education extends beyond textbooks. Our approach is rooted in the principles of value-based education, ensuring that our students not only excel academically but also grow into morally upright and socially responsible individuals. We strive to instill virtues such as self-discipline, self-confidence, respect for elders, and effective communication skills."
              image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3VyJTIwQ29yZSUyMFBoaWxvc29waHklMjBpbiUyMHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D"
              imagePosition="right"
            />
            <Section
              title="Wisdom from Ancient Texts"
              text="Our curriculum is enriched with fascinating stories and lessons from the Ramayana, Mahabharata, Vedas, and Puranas. These timeless epics and scriptures are not just tales of the past but are treasure troves of life-changing lessons. Through engaging narratives and thoughtful discussions, we help students uncover profound insights and apply them to their daily lives."
              image="https://plus.unsplash.com/premium_photo-1682284079705-dd1631f76f3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVhcm5pbmd8ZW58MHx8MHx8fDA%3D%3D"
              imagePosition="left"
            />
            <Section
              title="Comprehensive Student Development"
              text="Prabhuram Gurukul is dedicated to nurturing the multidimensional personalities of our students. We believe in the importance of a balanced education that includes physical fitness, mental clarity, emotional balance, and cultural and artistic expression."
              image="https://cdn.pixabay.com/photo/2016/06/03/06/13/japan-1432826_640.jpg"
              imagePosition="right"
            />
            <Section
              title="Dedicated Healthcare Services"
              text="Understanding the importance of health in a student's life, we provide separate healthcare facilities within the Gurukul. Our dedicated health professionals ensure that every student receives the necessary medical attention and guidance to maintain their physical health."
              image="https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_640.jpg"
              imagePosition="left"
            />
            <Section
              title="Mastery of Languages"
              text="In today's globalized world, language skills are essential. At Prabhuram Gurukul, we offer comprehensive language education, focusing on Sanskrit, English, Marathi, and Hindi."
              image="https://cdn.pixabay.com/photo/2019/12/30/13/28/english-4729683_640.jpg"
              imagePosition="right"
            />
            <Section
              title="Join Prabhuram Gurukul"
              text="Embark on a journey of holistic education, cultural enrichment, and personal growth with Prabhuram Gurukul. Join us in nurturing the leaders and visionaries of tomorrow. Admissions open for the upcoming academic year. Take the first step towards excellence today!"
              image="https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg"
              imagePosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, text, image, imagePosition }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-12">
    {imagePosition === 'left' ? (
      <>
        <div className="flex-1 md:mr-8 text-left" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-lg text-black">{text}</p>
        </div>
        <div className="flex-1 mt-8 md:mt-0 md:ml-8" data-aos="fade-up" data-aos-delay="200">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
          />
        </div>
      </>
    ) : (
      <>
        <div className="flex-1 mt-8 md:mt-0 md:mr-8" data-aos="fade-up" data-aos-delay="200">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-md object-cover hover:scale-110 transition-transform duration-500 ease-in-out transform hover:rotate-3 hover:translate-y-2"
          />
        </div>
        <div className="flex-1 md:ml-8 text-left" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">{title}</h2>
          <p className="text-lg text-black">{text}</p>
        </div>
      </>
    )}
  </div>
);

export default AboutUsPage;
