import React from 'react'
import Card from '../../component/Card/Card'

function Home() {
  return (
    <div className='grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 w-[80%] mx-auto my-10'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Home