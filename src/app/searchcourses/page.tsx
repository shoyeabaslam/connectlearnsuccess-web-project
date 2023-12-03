"use client"
import React, { useState,useEffect } from 'react';
import courseData from '@/data/coursesdata';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const [originalData] = useState(courseData);
    const [data, setData] = useState(originalData);
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('search') ?? ''; // Provide a default value if searchTerm is null
  
    useEffect(() => {
      // Filter data when searchTerm changes
      const filteredData = originalData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setData(filteredData);
    }, [searchTerm]); // Include searchTerm in the dependency array

  return (
    data.length !== 0 ?  <div className='flex flex-col px-20 mt-10 overflow-hidden w-full min-h-screen'>
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
  :
  <div className='flex justify-center h-[70vh] items-center'>
    <h1 className='text-center font-Alegreya font-semibold text-green-900 text-2xl'>Oops! No courses found.</h1>
  </div>
  );
};

export default Page;
