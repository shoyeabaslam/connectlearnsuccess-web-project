import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between py-2 px-28 items-center'>
        <h2 className='font-Eczar text-2xl w-44 text-center'>
            Connect Learn Succeed
        </h2>
        <ul className='flex space-x-10 items-center text-gray-600'>
            <Link href={"/"}><li className='hover:text-black cursor-pointer hover:underline'>Home</li></Link>
           <Link href={"/about"}><li className='hover:text-black cursor-pointer hover:underline'>About</li></Link>
           <Link href={"/courses"}> <li className='hover:text-black cursor-pointer hover:underline'>Courses</li></Link>
           <Link href={"/contact"}> <li className='hover:text-black cursor-pointer hover:underline'>Contact</li></Link>
        </ul>
        <SearchBar/>
        <Link href={"/login"}><button className='border px-3 py-1 h-9  bg-secondary-color font-sm text-white rounded-lg'>
             Login/Register
        </button></Link>
      </nav> 
    </div>
  )
}

export default Navbar