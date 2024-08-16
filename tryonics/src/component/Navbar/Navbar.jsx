import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between px-5 py-2 w-full bg-orange-400'>
        <span className='flex flex-row items-baseline text-2xl font-bold text-white gap-1'>FOOD<span className='text-sm  text-black'>RECIPIES</span></span>
        <div className='flex flex-row gap-5 text-white font-medium text-sm'>
            <span className='cursor-pointer'>ADD</span>
            <span className='cursor-pointer'>LIST</span>
        </div>
        <span className='text-white font-medium'>H! name</span>
    </div>
  )
}

export default Navbar