import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='w-full px-20 py-10 bg-[#DFF56C] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"] text-[3vw]'>
      <h1>
      My name is Ayan, and I'm a second-year software engineering student with a passion for technology, art, and literature. This is my online portfolio that was built,designed and illustrated by me.
      </h1>
      <div className='w-full mt-10 border-t-[1px] pt-10 flex gap-5 border-[#9daf41]'>
        <div className='w-1/2'>
        <h1 className='text-3xl mt-3 mb-5'>ABOUT ME</h1>
        <Link to="/aboutme" className="px-4 py-2 w-[9.5vw] bg-zinc-900 text-[1vw] mt-3 flex items-center rounded-full text-zinc-100">
          READ MORE
          <div className="ml-3 w-3 h-3 bg-white rounded-full"></div>
          </Link>

        </div>
        <div className="w-1/2 h-[70vh] bg-[url('/assets/mememe.jpeg')] bg-cover rounded-3xl"></div>
      </div>
    </div>
  )
}

export default About
