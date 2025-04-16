import React, { useEffect,useState } from 'react'

function Eyes() {
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
    <div className=" w-full h-[120vh] overflow-hidden  flex justify-center items-center bg-zinc-100 ">
        <div className=' absolute w-[90vw] h-[120vh] bg-zinc-800 flex justify-center items-center rounded-3xl'>
      <div className="relative -translate-y-[8%] w-[70vw] h-[85vh] ">
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
  )
}

export default Eyes
