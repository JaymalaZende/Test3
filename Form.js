import React from 'react';

function LoginForm() {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2013/09/11/02/02/bloch-school-of-management-181093_640.jpg')" }}
    >
      <form action="/action_page.php" className="container max-w-sm mx-auto p-8 bg-white rounded-lg shadow-lg mr-10">
        <h1 className="text-3xl font-bold mb-6">ADMISSION ENQUIRY FOR THE SESSION 2024-25</h1>

        {/* <label htmlFor="studentname" className="block text-lg font-medium mb-2">Enter Name</label> */}
        <input type="text" placeholder="Enter Name" name="name" required className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* <label htmlFor="email" className="block text-lg font-medium mb-2">Enter Father Email</label> */}
        <input type="text" placeholder="Enter Email" name="email" required className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* <label htmlFor="fathermobile" className="block text-lg font-medium mb-2">Enter Father Mobile Number</label> */}
        <input type="text" placeholder="Enter Father Mobile Number" name="fathermobile" required className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        {/* <label htmlFor="class" className="block text-lg font-medium mb-2">Select Class</label> */}
        <select name="class" className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Select Class</option>
          <option value="playgroup">Playgroup</option>
          <option value="nursery">Nursery</option>
          <option value="kindergarten">Kindergarten</option>
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

        {/* <label htmlFor="pincode" className="block text-lg font-medium mb-2">Enter Pin Code</label> */}
        <input type="text" placeholder="Enter Pin Code" name="pincode" required className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="terms" name="terms" className="mr-2" required />
          <label htmlFor="terms" className="text-lg font-medium">I agree to the terms and conditions</label>
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
