// components/Notepad.js
"use client"
import React, { useState } from 'react';

const Notepad = () => {
  const [notes,setNotes] = useState('');
  const clearNotes = ()=>{
    setNotes("")
  }
  const handleSendNotes = ()=>{
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(notes)}`;
    window.open(whatsappLink,'_blank')
  }
  return (
    <div>
        <h3 className='text-center font-bold'>Make A Note</h3>
      <textarea
      className='flex-1 h-96 ml-6 w-full p-2 border rounded-lg border-secondary-color outline-secondary-color '
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Take notes here..."
      />
     <div className='flex justify-between pl-10'>
     <button className='mt-5 border-green-600 px-3 py-1 h-9  bg-green-600 font-sm text-white rounded-lg' onClick={handleSendNotes}>Send Notes</button>
     <button className='mt-5 border px-3 py-1 h-9  border-green-600 font-sm text-green-600 rounded-lg' onClick={clearNotes}>Clear Notes</button>
     </div>
    </div>
  );
};

export default Notepad;
