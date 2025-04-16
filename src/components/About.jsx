import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='w-full max-md:h-[600px] h-[150vh] px-[2vw]  py-[3vw] max-md:text-lg bg-[#DFF56C] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"] text-[3vw]'>
      <h1>
      My name is Ayan, and I'm a third-year software engineering student with a passion for technology, art, and literature. This is my online portfolio that was built,designed and illustrated by me.
      </h1>
      <div className='w-full mt-[10vh] max-md:flex-col max-md:items-center border-t-[1px] pt-10 flex gap-5 border-[#9daf41]'>
        <div className=' max-md:flex max-md:justify-center max-md:items-center max-md:w-full w-1/2'>
        <h1 className='text-[5vw] max-md:text-3xl max-md:font-bold mt-3 mb-5'>ABOUT ME</h1>
        <Link to="/aboutme" className=" max-md:hidden px-4 py-2 max-md:w-[120px] max-md:justify-between max-md:text-[10px] w-[10vw] bg-zinc-900 text-[1vw] mt-3 flex items-center rounded-full text-zinc-100">
          READ MORE
          <div className="ml-[1vw] w-[0.5vw] h-[0.5vw] max-md:w-[9px] max-md:h-[9px] bg-white rounded-full"></div>
        </Link>

        </div>
        <div className="w-1/2 h-[40vw] bg-[url('/assets/mememe.jpeg')] bg-cover bg-center rounded-3xl"></div>
      </div>
    </div>
  )
}

export default About
