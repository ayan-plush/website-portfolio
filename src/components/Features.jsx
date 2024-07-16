import React from 'react'

function Features() {
  return (
    <div className='w-full bg-zinc-900 rounded-tl-3xl border-t-[2px] border-zinc-100 rounded-tr-3xl'>
      <div className='w-full px-10 py-10 uppercase font-["Neue_Montreal"]'>
       <h1 className='border-b-[1px] pb-5 border-zinc-600 text-[10vh] tracking-tighter'>projects</h1>         
        <div className="cards w-full flex gap-10 px-20 py-10">
            <div className='cont cont w-1/2 h-[80vh]'>
            <h1 className="px-5 py-3 text-[3vh] font-['Neue_Montreal']"> Machine learning project</h1>
            <div className="cardcontainer w-full  rounded-3xl h-[70vh] overflow-hidden ">
            <div className="card w-full h-full rounded-3xl hover:scale-95 bg-cover bg-[url('..\assets\mllung.jpeg')] bg-center"></div>
            </div>
            </div>
            <div className='cont cont w-1/2 h-[80vh]'>
            <h1 className="px-5 py-3 text-[3vh] font-['Neue_Montreal']"> web devlopment react project</h1>
            <div className="cardcontainer w-full rounded-3xl h-[70vh] overflow-hidden">
            <div className="card w-full h-full bg-zinc-800 rounded-3xl hover:scale-95 bg-cover bg-[url('..\assets\compon.png')] bg-center "></div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features
