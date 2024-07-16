import React from 'react'

function Features() {
  return (
    <div className='w-full bg-zinc-900 rounded-tl-3xl border-t-[2px] border-zinc-100 rounded-tr-3xl'>
      <div className='w-full px-[7vw] py-[5vh] uppercase font-["Neue_Montreal"]'>
       <h1 className='border-b-[1px] pb-5 border-zinc-600 text-[10vh] tracking-tighter'>projects</h1>         
        <div className="cards w-full flex gap-10 px-20 py-10">
            <a href="https://github.com/ayan-plush/lung-cancer-detection-using-ML" className='cont cont w-1/2 h-[60vw]'>
            <h1 className="px-5 py-3 text-[1vw] font-['Neue_Montreal']"> Machine learning project</h1>
            <div className="cardcontainer w-full  rounded-3xl h-[40vw] overflow-hidden ">
            <div className="card w-full h-full rounded-3xl hover:scale-95 bg-cover bg-[url('/assets/mllung.jpeg')] bg-center"></div>
            </div>
            </a>
            <a href="https://github.com/ayan-plush/website-portfolio" className='cont cont w-1/2 h-[60vw]'>
            <h1 className="px-5 py-3 text-[1vw] font-['Neue_Montreal']"> react web development project</h1>
            <div className="cardcontainer w-full rounded-3xl h-[40vw] overflow-hidden">
            <div className="card w-full h-full bg-zinc-800 rounded-3xl hover:scale-95 bg-cover bg-[url('/assets/compon.png')] bg-center "></div>
            </div>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Features
