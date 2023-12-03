"use client"

import React, { useState } from 'react';
import courseData from '@/data/coursesdata';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [originalData] = useState(courseData);
  const [data, setData] = useState(originalData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: { target: { value: string; }; }) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredData = originalData.filter((item) =>
      item.title.toLowerCase().includes(term)
    );
    setData(filteredData);
  };

  return (
    <div className='flex flex-col px-20 mt-10 overflow-hidden w-full min-h-screen'>
      <h2 className='text-center text-4xl font-Alegreya text-green-900'>All Courses</h2>
      <div>
        <div className='flex justify-between m-4 flex-wrap'>
          {data.map((item, index) => (
            <Link href={item.url} key={index}>
              <div className='w-72 hover:shadow-2xl mt-6 cursor-pointer hover:shadow-gray-600 h-80 shadow-lg rounded-xl overflow-hidden flex bg-green-100  p-3 flex-col items-center shadow-gray-400'>
                <Image
                  className='rounded-xl w-[100%] h-36 bg-contain'
                  src={item.image}
                  width={200}
                  height={200}
                  alt='cover image'
                />
                <div className=''>
                  <h2 className='mt-4 text-center truncate font-semibold'>{item.title}</h2>
                  <h4 className='text-xs mt-2'>{item.description}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
