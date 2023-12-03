// components/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="glass p-10 border shadow-lg shadow-green-300 w-96 bg-green-100  border-green-200 h-fit rounded-xl">
        <h1 className="text-3xl font-bold mb-5 text-green-700">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-900 block mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-900 block mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="text-gray-900 block mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Type your message here"
          ></textarea>
        </div>
        <button
          className='border px-3 py-1 h-9  bg-secondary-color font-sm text-white rounded-lg'
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
