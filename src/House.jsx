import React, { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import LocomotiveScroll from 'locomotive-scroll';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useMediaQuery } from 'react-responsive';

function House() {
  const [small,setSmall] = useState('false')
  const isMediumUp = useMediaQuery({ minWidth: 768 });

  return (
    <div>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
      {isMediumUp ? 
        <Parallax pages={4.3}>
      
        <ParallaxLayer speed={-0.22} >
          <Navbar/>
          <LandingPage/></ParallaxLayer>
        
        <ParallaxLayer offset={0.99} speed={0.7}><Marquee/></ParallaxLayer>
        
        <ParallaxLayer  offset={0.99} speed={0.15}><About/></ParallaxLayer>
  
        {isMediumUp ? 
          <ParallaxLayer offset={2.1} speed={0.1}>
            <Eyes />
          </ParallaxLayer>
          :
          <></>
        }
        {isMediumUp ? 
          <ParallaxLayer offset={3}speed={0.1}><Features/></ParallaxLayer>
          :
          <ParallaxLayer offset={1.6}speed={0.1}><Features/></ParallaxLayer>
        }
                
        </Parallax>
        :
        <Parallax pages={2.8}>
      
      <ParallaxLayer speed={-0.22} >
        <Navbar/>
        <LandingPage/></ParallaxLayer>
      
      <ParallaxLayer offset={0.99} speed={0.7}><Marquee/></ParallaxLayer>
      
      <ParallaxLayer  offset={0.99} speed={0.15}><About/></ParallaxLayer>

      {isMediumUp ? 
        <ParallaxLayer offset={2.1} speed={0.1}>
          <Eyes />
        </ParallaxLayer>
        :
        <></>
      }
      {isMediumUp ? 
        <ParallaxLayer offset={3}speed={0.1}><Features/></ParallaxLayer>
        :
        <ParallaxLayer offset={1.6}speed={0.1}><Features/></ParallaxLayer>
      }
              
      </Parallax>
      }
      
    </div>
    </div>
  )
}

export default House
