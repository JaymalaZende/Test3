import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    mobileNumber: '',
    gender: '',
    bloodGroup: '',
    transportOption: '',
    standard: '',
    address: '',
    terms: false,
    newField: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: val,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/phpmyadmin/index.php?route=/&route=%2F&db=school&table=admission', formData);
      console.log('Response:', response.data);
      if (response.data === "SUCCESS") {
        setSubmitted('success');
        setFormData(initialFormData); // Reset form data after successful submission
      } else {
        setSubmitted('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmitted('error');
    }
    // console.log('hello')
  };

  return (
    <div className='bg-slate-200'>
      <div className="text-lg text-gray-700 mb-6 text-center">
        <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6">Admission Process</h1>
        <p className="text-xl text-center mb-12">
          We're delighted that you're considering Prabhuram Gurukul School for your child's education. Prabhuram Gurukul aims to create a nurturing and holistic educational environment that promotes intellectual growth, cultural appreciation, personal development, and overall well-being of students, preparing them to become responsible, confident, and capable individuals.
        </p>
        <p className='text-xl text-center mb-12'>
          To begin the admission process, please fill out the form below
        </p>
      </div>
      <div className="max-w-md mx-auto text-left mt-8">
        <form onSubmit={handleSubmit} className="bg-sky-950 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Name */}
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
              pattern="^[A-Za-z\s]+$"
              title="Enter only alphabets."
            />
          </div>
          {/* Email */}
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
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Enter a valid email address in the format test@gmail.com."
            />
          </div>
          {/* Mobile Number */}
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
              required
              pattern="[0-9]{10}"
              title="Enter a 10-digit mobile number."
            />
          </div>
          {/* Gender */}
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
          {/* Blood Group */}
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="bloodGroup">
              Blood Group
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bloodGroup"
              type="text"
              placeholder="Blood Group"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>
          {/* Transport Option */}
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="transportOption">
              Transport Option
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transportOption"
              name="transportOption"
              value={formData.transportOption}
              onChange={handleChange}
              required
            >
              <option value="">Select Transport Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* Standard */}
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="standard">
              Standard
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            >
              <option value="">Select Standard</option>
              <option value="Playgroup">Playgroup</option>
              <option value="Nursery">Nursery</option>
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
          {/* Address */}
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          {/* New Field */}
          <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="newField">
              New Field
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newField"
              type="text"
              placeholder="New Field"
              name="newField"
              value={formData.newField}
              onChange={handleChange}
            />
          </div>
          {/* Terms and Conditions */}
          <div className="block text-white text-lg font-serif font-bold mb-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2 leading-tight"
              required
            />
            <label htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white object-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              name="Send"
              id="Send"
              value="Send"
            >
              Submit
            </button>
          </div>
          {/* Submission Confirmation */}
          {submitted && (
            <div className={`bg-${submitted === 'success' ? 'green' : 'red'}-200 text-${submitted === 'success' ? 'green' : 'red'}-800 px-4 py-2 rounded-md mt-4 text-center`}>
              {submitted === 'success' ? 'Form submitted successfully!' : 'There was an error submitting the form.'}
            </div>
          )}
        </form>
      </div>
      {/* Additional content */}
      <div>
        <div className="bg-slate-100 rounded-lg text-left shadow-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold text-gray-800 font-serif mb-4">Eligibility</h2>
          <p className="text-gray-700 mb-4">
            Children Age Group 5 years to 7 years
          </p>
        </div>
        <div className="bg-slate-100 rounded-lg text-left shadow-lg p-6 ">
          <h2 className="text-2xl font-semibold text-gray-800 font-serif mb-4">Documents for Submission</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Filled up registration form</li>
            <li>Copy of birth certificate</li>
            <li>Copy of Aadhar card</li>
            <li>Transfer certificate, progress sheet of the last examination taken</li>
            <li>Official copy of reports/marks card from previous school</li>
            <li>Eight passport size photographs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
