import React, { useState } from 'react'
import AuthImg from '../../assets/images/auth.jpg'
function Auth() {
  const [status, setStatus] = useState('LOGIN')
  const [formData,setFormData] = useState({
    email:'',
    password:''
  })
  const handleInput = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className='flex justify-center items-center bg-white h-screen w-screen bg-cover ' style={{ backgroundImage: `url(${AuthImg})` }}>
        <div className='flex flex-col items-center px-3 py-6 bg-slate-50 rounded-md w-60'>
            <h1 className='text-2xl font-semibold'>{status==="LOGIN"?"LOGIN":"REGISTER"}</h1>
            <input type='email' placeholder='Email' className='p-2 text-sm m-2 rounded-md w-full border border-orange-400 hover:scale-105 transition-transform duration-75 ease-in-out' required value={formData.email} onChange={handleInput}/>
            <input type='password' placeholder='Password' className='p-2 text-sm m-2 rounded-md w-full border border-orange-400 hover:scale-105 transition-transform duration-75 ease-in-out' required value={formData.password} onChange={handleInput}/>
            <button className='bg-orange-400 w-full text-white p-2 m-2 rounded-md hover:scale-105 transition-transform duration-75 ease-in-out'>{status==="LOGIN"?"Login":"Register"}</button>
            <div className='flex flex-row text-xs font-medium gap-1'>{status==="LOGIN"?'Don\'t have an account':'Allready have an account'}<span className='text-orange-400 cursor-pointer' onClick={()=>(setStatus(prev=>prev==="LOGIN"?"REGISTER":"LOGIN"))}>{status==="LOGIN"?'Register':'Login'}</span></div>
        </div>

    </div>
  )
}

export default Auth