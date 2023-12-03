// components/SignIn.js
"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignIn = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Add your sign-in logic here
    router.push("/login");

  };
  const handleSignUp = ()=>{
    router.push("/register");
  }
  return (
    <div className="flex h-screen justify-center m-20">
      <div className="glass p-10 border shadow-lg shadow-green-300 w-96 bg-green-100  border-green-200 h-fit rounded-xl">
        <h1 className="text-3xl font-bold mb-5 text-center text-teal-700">Sign Up</h1>
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-900 block mb-2">
            Name
          </label>
          <input
            type="name"
            id="name"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-900 block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="text-gray-900 block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 rounded-lg border  border-green-300 bg-green-50 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='border px-3 py-1 h-9  bg-secondary-color font-sm text-white rounded-lg'
          onClick={handleSignIn}
        >
          Sign Up
        </button>
        <h4 className='mt-4 text-sm'>Already Registered? <span className='underline cursor-pointer' onClick={handleSignIn}>sign-in</span></h4>
      </div>
    </div>
  );
};

export default SignIn;
