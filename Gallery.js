import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const photos = [
  'https://images.pexels.com/photos/8429915/pexels-photo-8429915.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8617771/pexels-photo-8617771.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg',
  'https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/5427668/pexels-photo-5427668.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8613306/pexels-photo-8613306.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/8923570/pexels-photo-8923570.jpeg?auto=compress&cs=tinysrgb&w=600'
];

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto max-w-full px-8 py-6 bg-gray-100 shadow-lg rounded-lg" data-aos="fade-up">
      <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6">Photo Gallery</h1>
      <div className="flex flex-wrap justify-center">
        {photos.map((url, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden" data-aos="zoom-in">
              <img src={url} alt={`Gallery ${index}`} className="w-full h-48 object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
