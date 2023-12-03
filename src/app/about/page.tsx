"use client"
import React, { useContext, useState } from 'react';
import courseData from '@/data/coursesdata';
const Page = () => {
  const [data,setData] = useState(courseData);

  return (
    <div>
      <h2>All Courses</h2>
      <div></div>
    </div>
  );
};

export default Page;
