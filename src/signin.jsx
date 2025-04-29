import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="h-[50px] w-full bg-gray-800 relative mt-0 flex gap-[400px] items-center">
        <div className="flex gap-10 items-center">
          <p  className="text-3xl font-bold text-white pl-4">PopcornPlaza</p>
          <p onClick={() => navigate(`/`)} className="text-xl text-white font-bold cursor-pointer"> Home</p>
          <p onClick={()=>navigate(`/movies/popular`)} className="text-xl text-white font-bold">TV</p>
          <p onClick={()=>{navigate('/myplaza')}} className="text-xl text-white font-bold cursor-pointer">My Plaza</p>
        </div>
        <div className="flex gap-10 items-center">
        <p onClick={()=>navigate('/redeem')} className="text-xl text-white font-bold cursor-pointer">Redeem</p>
        <p onClick={()=>{navigate('/login')}} className="cursor-pointer h-[30px] w-[80px] rounded-xl text-gray-800 font-bold flex items-center justify-center bg-white">
            Log in
          </p>
        </div>
      </div>
      <div className='h-screen w-full m-2 justify-center  '>
       <div className='flex  gap-10'>
        <div>
          <p className='text-xl text-gray-900 pt-5 font-bold'>NAME</p>
        <input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
        </div>
<div>
  <p className='text-xl text-gray-900 pt-5 font-bold'>Password</p>
<input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
</div>
        </div>     
        <div className='flex  gap-10'>
<div>
  <p className='text-xl text-gray-900 pt-5 font-bold'>Email</p>
<input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
</div>
<div>
  <p className='text-xl text-gray-900 pt-5 font-bold'>Confirm Password</p>
  <input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
</div>
        </div>
        <div className='flex gap-10'>
          <div>
            <p className='text-xl text-gray-900 pt-5 font-bold'>Phone no.</p>
            <input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
          </div>
          <div>
            <p className='text-xl text-gray-900 pt-5 font-bold'>Enter OTP</p>
            <input className='h-[40px] w-[600px] border-2 border-gray-800 rounded-xl bg-gray-500 opacity-50 p-2 ' type="text" />
          </div>
        </div>
        <div  className='flex  justify-center gap-10'>
          <button onClick={()=>navigate('/')} className='h-[60px] w-[150px] bg-gray-500 mt-5 mr-5 text-white font-bold rounded-xl text-xl '>Sign In</button>
        </div>
        <div className='flex justify-center gap-3'>
          <p className='italic text-xl pt-2 font-bold'>Have an Account</p>
          <p onClick={()=>{navigate('/login')}} className='pt-2 text-xl font-bold text-blue-400 cursor-pointer '>Log In</p>
        </div>
        <div className='flex justify-center gap-3'>
          <p className='italic font-bold text-gray-500 p-2'>"Discover a world of stories, where every click takes you closer to the magic of cinema."</p>
        </div>
      </div>
    </div>
  )
}

export default Signin
