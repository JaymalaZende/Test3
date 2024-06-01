import React from 'react';
import { Link } from 'react-router-dom';
// import { SwitchLayoutGroupContext, motion } from 'framer-motion'; // Import motion from framer-motion

// import video2 from "video2"

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const cardsData = [
    {
      image: "https://img.freepik.com/free-photo/model-wearing-beautiful-shade-clothing_23-2151428054.jpg?t=st=1717128907~exp=1717132507~hmac=2279a708a62d3ab7ca083af4dc1834c4afc7e2e00386627a7d9ccb8b7b90c96b&w=740",
      title: "Mr. Sandip Shete",
      description: "( Founder and Managing Head of Prabhuram Gurukul )"
    },
    {
      image: "https://img.freepik.com/free-photo/businesswoman-posing_23-2148142829.jpg?t=st=1717129110~exp=1717132710~hmac=1ff5ed0279ba8cafe045a5a28e1adfb7eb212c7af8541d884ea30c840dc7891c&w=740",
      title: "Mrs. Sunita Shete",
      description: "( Founder and Principal of Prabhuram Gurukul )"
    },
    {
      image: "https://img.freepik.com/free-photo/elegant-man-with-folded-arms_1262-727.jpg?t=st=1717129066~exp=1717132666~hmac=3d2e84b84a622f2794618d96b28c43ff07a91f10f8ad088e8df4044e7168e1c3&w=996",
      title: "Dr. Shubham Shete",
      description: "( Founder and Chief Advisor of Prabhuram Gurukul )"
    },
    {
      image: "https://img.freepik.com/free-photo/beautiful-businesswoman-posing-interior-office_144627-28115.jpg?t=st=1717129145~exp=1717132745~hmac=f31274e6bd7b3ca011f091974199fba5b025235393cd39c6453bea6bbd103913&w=740",
      title: "Miss Suhani Shete",
      description: "( Yoga and Meditation Practitioner )"
    }
  ];

  const firstHalf = cardsData.slice(0, 4);

  return (
    <div className=" container  bg-gray-100 max-w-full px-8 py-6 mx-auto" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-8">About Us</h1>
      <p className="text-xl text-center mb-12">
        Welcome to Prabhuram Gurukul, where ancient wisdom meets modern education to cultivate well-rounded, value-driven individuals. Our curriculum integrates stories from the Ramayana, Mahabharata, Vedas, and Puranas, promoting both theoretical and applied knowledge. We focus on holistic development through sports, yoga, meditation, music, and dance, while providing dedicated healthcare facilities. Language proficiency in Sanskrit, English, Marathi, and Hindi is emphasized for effective communication. Join us on a journey of self-discovery, cultural enrichment, and lifelong learning.
      </p>
      <Link to='/Aboutuspage'><button className='rounded-md text-3xl  bg-blue-300 text-black h-16 my-6 mt-0' onClick={scrollToTop} >Read More</button> </Link>
      <div className="flex flex-wrap justify-center">
        {firstHalf.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105" data-aos="zoom-in">
              <img src={card.image} alt={card.title} className="w-full h-96 object-cover" />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        {/* Use motion.video for video */}
        {/* <motion.video
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          loop autoPlay muted
          className="w-80 rounded-lg mb-1"
          controls
        > */}
          {/* Use source tag to specify the video file */}
          {/* <source src={video2} type="video2/mp4" /> */}
        {/* </motion.video> */}
      </div>
    </div>
  );
};

export default AboutUs;
