import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
      <div className='notfoundpage'>
        <div>
          <h2>Ooops!</h2>
        <div>Rick and Morty Page is Not Found</div>
          <Link to="/">
            <button type='button'>Go Back Home</button>
          </Link>
        </div>
        <img src='https://the-rich-and-morty.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F404-2.455fda9c.png&w=640&q=75' alt="errorlogo" />
      </div>
    )
  }
  
  export default NotFound