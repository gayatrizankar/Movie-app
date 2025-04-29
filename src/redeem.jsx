import React from 'react'
import { useNavigate } from 'react-router-dom';

const Redeem = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="h-[50px] w-full bg-gray-800 relative mt-0 flex gap-[400px] items-center">
        <div className="flex gap-10 items-center">
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
          <p onClick={()=>{navigate('/myplaza')}} className="text-xl text-white font-bold cursor-pointer">My Plaza</p>

        </div>
        <div className="flex gap-10 items-center">
        <p onClick={()=>navigate('/redeem')} className="text-xl text-white font-bold cursor-pointer">Redeem</p>
        <p
            onClick={() => {
              navigate(`/signin`);
            }}
            className="cursor-pointer h-[30px] w-[80px] rounded-xl text-gray-800 font-bold flex items-center justify-center bg-white"
          >
            Sign in
          </p>
        </div>
      </div>
      <div className='h-screen w-full bg-gray-800 flex flex-col items-center justify-center'>
        <p className='text-2xl font-bold text-white font-serif'>Redeem a Digital Code</p>
        <p className='text-white'>Grow your Movies Anywhere collection and watch digitally by redeeming codes from DVD or </p>
        <p className='text-white'>Blu-ray™ inserts, emails, and more</p>
        <img className='h-[300px] w-[300px] object-contain' src="https://web-static.moviesanywhere.com/src/assets/redeem/redeem-start-page-image@2xf32fbc30dd260534d647a9b82235fc62.png" alt="" />
        <p className='text-white font-bold font-serif text-xl p-5 '>Enter Code</p>
        <input className='bg-gray-700 opacity-100 w-[500px] h-[40px]' type="text" />
        <button onClick={()=>{navigate('/movies/popular')}} className="h-[60px] w-[150px] bg-yellow-700 text-white font-bold text-xl rounded-xl m-5">
            ENTER
          </button>
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

export default Redeem
