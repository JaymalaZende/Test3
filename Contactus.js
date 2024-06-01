import React, { useState } from 'react';
import axios from 'axios';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    queries: '',
    mobile:''
  });
 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (id === 'mobile') {
      validateMobile(value);
    }
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobile: 'Mobile number must be 10 digits long and contain only numbers.',
      }));
    } else {
      setErrors((prevErrors) => {
        const { mobile, ...rest } = prevErrors;
        return rest;
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/prabhuramgurukul.com/contact us.php', formData);
      console.log('Response:', response.data);
      if(response.data === "SUCCESS"){
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', queries: '',mobile:'' });
      }else{
        setSubmissionStatus('error');
      }
      
      // Clear form after successful submission
      // setFormData({ name: '', email: '', queries: '',mobile:'' });
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section className="bg-[#eee2cf] ">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.1583426195327!2d73.75510487705466!3d19.95317983854194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb52e0bbf4d3%3A0x5ce55e9cb804ab85!2sSai%20Darshan%20Society%2C%2010%2C%20Prashant%20Nagar%2C%20Pathardi%20Phata%2C%20Nashik%2C%20Maharashtra%20422010!5e0!3m2!1sen!2sin!4v1716959946187!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%" height="480" style={{ border: '0' }} allowFullScreen="" loading="lazy"
        ></iframe>
      </div>
      <div className="container justify-center px-6 md:px-12 lg:max-w-6xl">
        <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
          {submissionStatus === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
              <p>Form submitted successfully!</p>
            </div>
          )}
          {submissionStatus === 'error' && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p>There was an error submitting the form!</p>
            </div>
          )}
          <div className="bg-black  flex flex-col">
          <h1 className='uppercase md:text-3xl text-2xl  text-center font-serif font-bold  text-white mb-10 '>Contact Us</h1>
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form onSubmit={handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.name ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label
                    className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.name ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.email ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.email ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                    htmlFor="email"
                  >
                    Email address
                  </label>
                </div>

                <div className="relative mb-6">
                    <input
                      type="text"
                      className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary ${formData.mobile ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder=" "
                    />
                    <label
                      className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.mobile ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                      htmlFor="mobile"
                    >
                      Mobile Number
                    </label>
                    {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
                </div>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none ${formData.queries ? 'placeholder-shown:-translate-y-[0.9rem] placeholder-shown:scale-[0.8] placeholder-shown:text-primary' : ''}`}
                    id="queries"
                    rows="3"
                    value={formData.queries}
                    onChange={handleChange}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out ${formData.queries ? '-translate-y-[0.9rem] scale-[0.8] text-primary' : ''}`}
                  >
                    Message
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="flex items-center mb-6">
                  {/* <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div> */}
                  <div className='bg-black'>
                    <p className="pl-14 text-left text-white dark:text-gray-300 align-middle flex justify-end text-lg font-sans">
                    PRABHURAM GURUKUL<br/>
                  B/2, Sai Darshan Row Bungalow,<br />
                  Prashant Nagar, Near Vakratund Hospital,<br/>
                  Pathardi Phata, Nashik 422010
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  {/* <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div> */}
                  <div className='mb-10 text-white pl-14'>
                    <h6 className="text-xl font-semibold pr-56 mb-0">Phone</h6>

                   <p className="text-white dark:text-gray-300 pr-40 text-lg font-sans">+91 8408863840</p>
                  <p className="ttext-white dark:text-gray-300  pr-40 text-lg font-sans">+91 840894840</p>
                  <p className="text-white dark:text-gray-300 text-lg  pr-40 font-sans">+91 8007132800</p>
                  </div>
                </div>
                {/* <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7l9-4 9 4M21 10v4.5a2.42 2.42 0 0 1-2.42 2.5H5.42A2.42 2.42 0 0 1 3 14.5V10m18 4h-2v-2c0-3.31-2.69-6-6-6s-6 2.69-6 6v2H5c-1.11 0-1.99.89-1.99 2L3 20c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2l-.01-4c0-1.11-.88-2-1.99-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold mb-0">Email</h6>
                    <p className="text-sm text-neutral-600">
                      info@example.com
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
