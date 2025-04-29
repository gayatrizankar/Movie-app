import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mylist = () => {
    const navigate = useNavigate();
  return (
    <div>
         <div className="h-[50px] w-full bg-gray-800 relative mt-0 flex gap-[400px] items-center">
        <div className="flex gap-16 items-center">
          <p className="text-3xl font-bold text-white pl-4">PopcornPlaza</p>
          <p
            onClick={() => navigate(`/`)}
            className="text-xl text-white font-bold cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => navigate(`/movies/popular`)}
            className="text-xl text-white font-bold cursor-pointer"
          >
            TV
          </p>
          <p className="text-xl text-white font-bold cursor-pointer">
            My Plaza
          </p>
        </div>
        <div className="flex gap-10 items-center">
        <p onClick={()=>navigate('/redeem')} className="text-xl text-white font-bold cursor-pointer">Redeem</p>
        
        </div>
      </div>
      <div className='h-full w-full bg-gray-800'>
      <div className='flex'>
            <div onClick={()=>navigate('/myplaza')} className='hover:underline hover:underline-offset-4 h-[50px] w-[100px] rounded-3xl text-xl font-bold hover:text-white hover:bg-gray-400 pt-3  flex item-center justify-center cursor-pointer  m-5'>
                <p className='text-white '>My Plaza</p>
            </div>
            <div onClick={()=>{navigate('/mylist')}} className='hover:underline hover:underline-offset-4 h-[50px] w-[100px] rounded-3xl text-xl font-bold hover:text-white hover:bg-gray-400 pt-3  flex item-center justify-center cursor-pointer  m-5'>
                <p className='text-white '>My List</p>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src="https://web-static.moviesanywhere.com/src/assets/library-management/create-your-own-lists4b7fe6a2efc0cdc296a08545d2176a89.png" alt="" />
            <p className='text-2xl font-bold p-5 pb-1 text-white'>Create Your Own List</p>
            <p className='text-white'>Organize your movies into customized lists.</p>
            <button onClick={()=>{navigate('/signin')}} className='h-[50px] w-[100px] rounded-xl p-2 bg-yellow-700 m-10 mb-3 font-bold text-white'>Sign In</button>

        </div>

      </div>
      <div className="bg-gray-700 h-[300px] w-full">
        <div className="flex gap-10">
          <div className="flex items-center">
            <p className="text-3xl font-bold text-yellow-700 p-5">
              PopcornPlaza
            </p>
          </div>
          <div className="p-5">
            <p className="text-xl font-bold text-white">Company</p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              About
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Careers
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Our Culture
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Giving
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Partners
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              News
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex Gear
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              The Plex Blog
            </p>
            <p className="text-white text-md hover:text-yellow-400 cursor-pointer">
              Advertise with Us
            </p>
          </div>

          <div className="p-5">
            <p className="text-xl font-bold text-white">Plex Pass</p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Go Premium
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plexamp
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex Labs
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Get Perks
            </p>
          </div>

          <div className="p-5">
            <p className="text-xl font-bold text-white"> Downloads</p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex Media Server
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plexamp
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex Photos
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Plex Dash
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Where to Watch
            </p>
          </div>

          <div className="p-5">
            <p className="text-xl font-bold text-white">Support</p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Finding Help
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Support Library
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Community Forums
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Community Guidelines
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Billing Questions
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Status
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Bug Bounty
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              CordCutter
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Get in Touch
            </p>
          </div>

          <div className="p-5">
            <p className="text-xl font-bold text-white">Watch Free</p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Discover on Plex
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              TV Channel Finder
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              What to Watch
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              What To Watch on Netflix
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              What To Watch on Hulu
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              A24 movies
            </p>
            <p className="text-white text-md  hover:text-yellow-400 cursor-pointer">
              Christmas Movies
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-gray-700">
          <p className="italic text-xl font-bold">
            Copyright@ <span className="text-serif non-italic">Content</span>{" "}
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default Mylist
