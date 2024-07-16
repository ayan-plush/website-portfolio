import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="fixed  backdrop-filter:blur(10px) z-[999] h-[13vh] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className='logo'>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8571 12C15.8571 14.1302 14.1302 15.8571 12 15.8571C9.86972 15.8571 8.14282 14.1302 8.14282 12C8.14282 9.86972 9.86972 8.14282 12 8.14282C14.1302 8.14282 15.8571 9.86972 15.8571 12ZM15.8571 12L15.8571 13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868" stroke="white" fill="balck" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <div className='links flex gap-10'>
    <Link to="/" className="text-lg capitalize font-light">home</Link>
    <Link to="/aboutme" className="text-lg capitalize font-light">about me</Link>
    <Link to="/gallery" className="text-lg capitalize font-light">gallery</Link>
    <Link to="/contact" className="text-lg capitalize font-light ml-32">contact me</Link>
      </div>
    </div>
  )
}

export default Navbar
