import React from 'react'
import img from '../../assets/images/auth.jpg'
function Card() {
  return (
    <div className='flex flex-col max-w-48 sm:max-w-60 rounded-md  shadow-lg'>
        <img src={img} alt="food" className='w-full h-32 sm:h-48 object-cover'/>
        <div className='flex flex-col gap-2 sm:gap-4 px-3 py-4'>
            <h1 className='text-xl font-semibold'>Title</h1>
            <p className='text-sm text-gray-500 line-clamp-2 sm:line-clamp-3  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repellendus voluptatem et inventore tempora nesciunt eos, corporis incidunt cupiditate illo.</p>
            <div className='flex flex-row justify-between'>
                <button className='flex justify-center items-center w-16 sm:w-20 bg-green-400 font-medium text-white px-3 py-2 text-xs sm:text-sm  rounded-md'>update</button>
                <button className='flex justify-center items-center w-16 sm:w-20 bg-red-400 font-medium text-white px-3 py-1 text-xs sm:text-sm  rounded-md'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card