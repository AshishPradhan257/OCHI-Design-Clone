import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-black pt-1'>
        <div className='textstructure mt-40 px-10'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
                return (
                    <div className='masker '>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index === 1 && (
                                <motion.div 
                                    initial={{width: 0}} 
                                    animate={{width: "8vw"}} 
                                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
                                    className='mr-[1vw] w-[8vw] h-[4.5vw] rounded-md relative -top-[1vw] bg-red-500'></motion.div>
                            )}
                            <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[7vw] leading-[6vw]  tracking-tighter font-["Founders_Grotesk"] font-semibold'>
                                {item}
                            </h1>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className='border-t-[.5px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20' >
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