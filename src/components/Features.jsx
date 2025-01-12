import { motion, useAnimation } from 'framer-motion'
import { Power4 } from "gsap/all"
import React, { useState } from 'react'

function Features() {

  const cards = [useAnimation(), useAnimation()];
  
  const handleHover = (index)=>{
    cards[index].start({y: "0"});
  };

  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100%"});
  };
    
  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 pb-10 border-b-[1px] border-zinc-700'>
            <h1 className='text-[3.5vw] tracking-tighter font-["Neue_Montreal"]'>Featured projects</h1>
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>

                <motion.div onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative card w-1/2 h-[75vh]'>
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 uppercase leading-none tracking-tighter z-[9] text-8xl'>
                            {"VISE".split('').map((item, index)=>(
                                <motion.span 
                                    initial={{y: "100%"}}
                                    animate={cards[0]}
                                    transition={{ease: [0.22,1,0.36,1], delay: index*.06}}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                    </h1>
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </motion.div>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)} className='relative cardcontainer card w-1/2 h-[75vh]'>
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 uppercase leading-none tracking-tighter z-[9] text-8xl'>
                            {"TRAWA".split('').map((item, index)=>(
                                <motion.span 
                                    initial={{y: "100%"}}
                                    animate={cards[1]}
                                    transition={{ease: [0.22,1,0.36,1], delay: index*.06}}
                                    className='inline-block'>{item}
                                </motion.span>
                            ))}
                        </h1>
        
                        <img 
                            className='w-full h-full bg-cover' 
                            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
        
         
    </div>


    
  )
}

export default Features