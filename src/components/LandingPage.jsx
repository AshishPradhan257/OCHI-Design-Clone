import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return <div className='masker'>
                        <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tighter font-["Calibri"] font-semibold'>
                            {item}
                        </h1>
                    </div>
            })}
        </div>
        <div className='border-t-[.5px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20' >
            {["For public and private companies", 
              "From the first pitch to IPO",
             ].map((item, index) => (
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md'>START THE PROJECT</div>
                <div className='w-9 h-9  border-[2px] flex items-center justify-center border-zinc-500 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default LandingPage