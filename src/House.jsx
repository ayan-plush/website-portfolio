import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import LocomotiveScroll from 'locomotive-scroll';

function House() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
    </div>
    </div>
  )
}

export default House
