import React from 'react'
import img from '../../assets/images/auth.jpg'
function Details() {
  return (
    <div className='flex flex-col w-[80%] gap-5 mx-auto my-10 md:w-[80%]  lg:w-[60%] '>
      <div className='flex flex-col sm:flex-row gap-5'>
        <div className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] '>
          <img src={img} alt="food" className='w-full h-full object-cover'/>
        </div>
        <div className='flex-1  '>
          <h1 className='text-2xl sm:text-3xl font-medium mb-3'>Title</h1>
          <p className='text-xs sm:text-sm text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum facilis odit accusamus unde? Autem architecto maxime fugiat nemo quisquam! Placeat numquam maxime quibusdam, ad nihil culpa ratione perferendis quod. Laboriosam officiis maxime sequi harum corporis laudantium omnis obcaecati dolorem.</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-xl sm:text-2xl font-medium'>Ingredients</h1>
        <ul className='text-xs sm:text-sm list-disc list-inside'>
          <li className=' text-gray-500 ' >oil<span className='ml-2'>2cups</span></li>
          <li className=' text-gray-500 ' >oil<span className='ml-2'>2cups</span></li>
          <li className=' text-gray-500 ' >oil<span className='ml-2'>2cups</span></li>
          <li className=' text-gray-500 ' >oil<span className='ml-2'>2cups</span></li>
         
        </ul>
      </div>
    </div>
  )
}

export default Details