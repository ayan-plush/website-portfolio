import {motion} from "framer-motion";
import React from 'react';

function Marquee() {
  return (
      <div className='w-full h-[13vw] border-t-2 border-b-2 border-zinc-100 rounded-tl-3xl rounded-tr-3xl bg-[#9CEE73] text-[#ffffff]'>
      <div className='text  pt-2 -mb-[1vw] flex overflow-hidden whitespace-nowrap '>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration:8}} className="text-[10vw]  uppercase leading-none font-bold tracking-tighter font-['Founders_Grotesk_X-Condensed' src:'C:\Users\AYAN KHAJURIA\my-finalwebapp\public\fonts'] pr-10"> have fun 𐙚꒰ᐢ. .ᐢ꒱｡⋆ </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat: Infinity,duration:8}}  className="text-[10vw]  uppercase leading-none font-bold tracking-tighter font-['Founders_Grotesk_X-Condensed' src:'C:\Users\AYAN KHAJURIA\my-finalwebapp\public\fonts'] pr-10"> have fun 𐙚꒰ᐢ. .ᐢ꒱｡⋆ </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
