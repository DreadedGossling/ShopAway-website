import React from 'react'
import { BiError } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen' >
      <div>
        <div className='text-6xl flex justify-center w-full'>
          <BiError className=' text-red-600' />
        </div>
        <h1 className='text-center font-semibold'>404 - Page Not Found</h1>
        <p className='text-red-600 my-2'>Sorry, the page you are looking for could not be found.</p>
        <Link to={'/'} className='flex justify-center w-full'>
          <span className='text-lg mt-1 text-blue-700 font-semibold hover:text-sky-700'>Go to Home</span>
          <FaHome className='text-blue-700 text-3xl ml-2 hover:text-sky-700' />
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
