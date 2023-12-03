/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Notepad from '@/components/Notepad';
import { usePathname, useSearchParams } from 'next/navigation'
import React ,{useState} from 'react'

const page = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [url, setUrl] = useState(searchParams.get('id'))
    
   
    
  return (
    <div className='px-16 py-10 mt-10 flex'>
       <iframe width="700" height="400" src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       <div className='flex-1 -mt-6'><Notepad/></div>
    </div>
  )
}

export default page