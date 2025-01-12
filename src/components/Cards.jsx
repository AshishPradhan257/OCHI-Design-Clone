import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className=' relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy; 2019-2024</button>
            </div>
        </div>
        <div className='relative cardcontainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy; 2019-2024</button>
            </div>
            <div className='relative card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border left-10 bottom-10'>&copy; 2019-2024</button>
            </div>
        </div>
    </div>
     
  )
}

export default Cards