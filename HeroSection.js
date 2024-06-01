import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Result from 'postcss/lib/result';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobileNumber: '',
    standard: '',
    gender: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submissionStatus, setSubmissionStatus] = useState(null); // State to handle submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://test2/', formData); // Make POST request with Axios
      console.log('Response:', response.data);
      if (response.data === "SUCCESS") {
        setSubmissionStatus('success');
        setFormData(initialFormData); // Reset form data after successful submission
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2013/09/11/02/02/bloch-school-of-management-181093_640.jpg')" }}>
      <form onSubmit={handleSubmit} className="container max-w-sm mx-auto p-8 bg-sky-950 rounded-lg shadow-lg mr-10" data-aos="fade-up">
        <h1 className="text-3xl font-serif text-white font-bold mb-6">ADMISSION ENQUIRY FOR THE SESSION 2024-25</h1>
        <div className='text-left'>
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              pattern="^[A-Za-z\s]+$" // Name pattern for alphabets and spaces
              title="Please enter only alphabets."
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Email pattern
              required
              title="Please enter a valid email address in the format test@gmail.com."
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              pattern="[0-9]{10}" // Mobile number pattern
              required
              title="Please enter a 10-digit mobile number."
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="standard">
              Standard
            </label>
            <select
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select standard</option>
              <option value="playgroup">Playgroup</option>
              <option value="nursery">Nursery</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white justify-center flex font-bold py-2 px-4 ml-28 rounded focus:outline-none focus:shadow-outline"
              type="button"  name='Send' id='Send'  value={"Send"}     >     Submit
            </button>
          </div>
        </div>
      </form>
      <h1>{Result}</h1>
      {submissionStatus === 'success' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-green-500 text-white p-5 rounded-lg shadow-lg">
            Form submitted successfully!
          </div>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-red-500 text-white p-5 rounded-lg shadow-lg">
            There was an error submitting the form. Please try again later.
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
