import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";


function LandingPage() {
  return (
    <div className=' data-scroll data-scroll-speed="-.8" w-full h-screen bg-zinc-900 pt-1'>
      <div className=' landi flex items-center '>
      <div className='textstructure p-[5vw]'>
        {["Welcome","everyone","all set to begin ?"].map((item,index)=>{
            return <div className='masker'><div className='w-fit flex items-center'>
            <h1 className="uppercase leading-[5.5vw] tracking-tighter text-[6.7vw]  font-['Founders_Grotesk_X-Condensed' src:'my-finalwebapp\public\fonts'] font-medium">{item}</h1>
        </div></div>
        })}
      </div>
      <div className=" w-[30vw] h-[30vw] mt-20 bg-cover hover:bg-[url('/assets/compon.png')] bg-[url('/assets/compoff.png')] "></div>
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-[3vh] flex justify-between item-center py-[5vh] px-[5vw]'>
        {["Online Portfolio",'Ayan Jyotir Khajuria'].map((item,index)=><p className='text-md font-light tracking-tight text-[1vw] leading-none'>{item}</p>)}
        <div className='start flex items-center gap-5'>
            <div className='px-[1vw] py-[1vh] border-[2px] border-zinc-500 font-light text-sm rounded-full text-[1vw] uppercase'>scroll down</div>
            <div className='w-9 h-9 rounded-full border-[2px] border-zinc-500 flex justify-center items-center'>
                <span className='rotate-[180deg]'><FaLongArrowAltUp /></span>
                </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
