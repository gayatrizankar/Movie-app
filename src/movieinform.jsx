import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const MovieInform = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies?.find((m) => m.id === parseInt(id)); // Find movie by ID

  if (!movie) {
    return <p className="text-white text-center mt-10">Movie not found or data is loading.</p>;
  }

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
        <p onClick={()=>{navigate(`/signin`)}} className="cursor-pointer h-[30px] w-[80px] rounded-xl text-gray-800 font-bold flex items-center justify-center bg-white">
            Sign in
          </p>
        </div>
      </div>
     
      <div className='flex flex-col bg-black min-h-screen'>
      <div  className=" flex gap-10 items-center">
        <div className='h-[400px] w-[500px]'>
        <img
        className="h-[450px] w-[450px] object-cover rounded-xl p-10  pr-0 rounded-xl "
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
        </div>
        <div className='h-[500px] w-[500px] flex items-center justify-center flex-col'>
        <h1 className="text-4xl font-bold text-white mt-5">{movie.title}</h1>
     
     <p className="text-xl text-white mt-5 px-5 text-center">{movie.overview}</p>
     <p className="text-2xl text-white font-bold mt-5">Rating: {movie.vote_average}</p>
        </div>
      </div>
      <div className='h-[100px] flex items-center justify-center'>
      <button onClick={()=>{navigate('/movies/popular')}} className="h-[60px] w-[150px] bg-yellow-700 text-white font-bold text-xl rounded-xl m-5">
            Watch Free
          </button>
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
  );
};

export default MovieInform;
