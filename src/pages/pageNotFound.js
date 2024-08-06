import React from 'react'
import { BiError } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30vh' }}>
      <div>
        <div style={{ textAlign: 'center', fontSize: '75px', marginBottom: '-20px' }}>
          <BiError style={{ color: 'red' }} />
        </div>
        <h1 style={{ textAlign: 'center' }}>404 - Page Not Found</h1>
        <p style={{ color: 'red' }}>Sorry, the page you are looking for could not be found.</p>
        <p style={{ textAlign: 'center', fontSize: '25px'}}>
          <Link to={'/'} style={{ textDecoration:'none'}}> Go to Home <FaHome /></Link>
        </p>
      </div>
    </div>
  )
}

export default PageNotFound
