"use client"
import { useRouter } from 'next/navigation';
// components/SearchBar.js
import React,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [text, setText] = useState('')
  const router = useRouter();
  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      // Redirect to another website with URL encoding
      setText('')
      const encodedSearchTerm = encodeURIComponent(text);
      router.push(`/searchcourses?search=${encodedSearchTerm}`);
      // console.log(encodedSearchTerm)
    }
  };
  return (
    <div className="flex items-center bg-gray-200 py-2 px-4 rounded-full">
      <input
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        type="text"
        placeholder="Search..."
        onKeyUp={handleKeyPress}
        className="w-full bg-transparent border-none focus:outline-none"
      />
      <FaSearch className="text-gray-500 mr-2 cursor-pointer" />
    </div>
  );
};

export default SearchBar;
