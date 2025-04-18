import React from 'react'
import { useEffect,useState } from 'react'

function Contacts() {
        const [rotate, setRotate] = useState(0);
        useEffect(()=>{
            window.addEventListener("mousemove",(e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
    
                let deltaX = mouseX - window.innerWidth/2;
                let deltaY = mouseY - window.innerHeight/2;
    
                var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
                setRotate(angle-180);
            })
        })
  return (
    <div className=" w-full h-screen bg-[#DFF56C] font-['Founders_Grotesk_X-Condensed' src:'my-finalwebapp\public\fonts'] font-bold uppercase">
    <div className=" w-full h-[30vh] rounded-tl-3xl rounded-tr-3xl flex justify-center items-center pt-[30vh] ">
        <div className=' absolute w-[90vw] h-[25vh]  flex justify-center items-center rounded-3xl'>
      <div className="relative -translate-y-[8%] w-[70vw] h-[30vh] ">
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className=' relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-[3vw] h-[3vw] rounded-full bg-zinc-100'></div>
                </div>
                </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-white rounded-full'>
                <div className=' relative  w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform: `translate(-50%,-50%) rotate(${rotate+20}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10'>
                <div className='w-[3vw] h-[3vw] rounded-full bg-zinc-100'></div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className="lineone flex justify-between text-[10vw] items-center p-[5vw]">
        <a href="https://www.linkedin.com/in/ayan-khajuria-46904b275/" className='hover:scale-95'>LINKEDIN</a>
        <a href="https://github.com/ayan-plush" className='pr-[2vw] hover:scale-95' >GITHUB</a>
    </div>
    <div className="linetwo flex justify-between px-[30vw] text-[1vw] font-medium items-center">
    <a>fwd.ayan@gmail.com</a>
    <a>+919958050129</a>
    </div>
    </div>
  )
}

export default Contacts
