import React from 'react'

function About() {
  return (
    <div className='w-full pt-20 pl-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[3.5vw] tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking 
            businesses that need to raise funds, sell products, 
            explain complex ideas, and hire great people.
        </h1>
        <div className='w-full border-t-[1px] pt-5 mt-20 border-[#505c27] flex gap-5'>
            <div className='w-1/2 '>
                <h1 className='text-[4vw]'>Our approach:</h1>
                <button className='flex gap-5 items-center px-10 py-4 uppercase mt-3 bg-zinc-900 rounded-full text-white' >Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>

            </div>
            <div className='w-1/2 h-[70vh] bg-[#7f913c] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About