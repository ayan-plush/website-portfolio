import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import LocomotiveScroll from 'locomotive-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function House() {
  return (
    <div>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Parallax pages={4.3}>
      
      <ParallaxLayer speed={-0.2} ><LandingPage/></ParallaxLayer>
      
      <ParallaxLayer offset={0.99} speed={0.5}><Marquee/></ParallaxLayer>
      
      <ParallaxLayer offset={0.99} speed={0.15}><About/></ParallaxLayer>
      
      <ParallaxLayer offset={2.1}speed={0.1}><Eyes/></ParallaxLayer>
      
      <ParallaxLayer offset={3}speed={0.1}><Features/></ParallaxLayer>
      
      </Parallax>
    </div>
    </div>
  )
}

export default House
