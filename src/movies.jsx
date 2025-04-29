import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movies = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div>
        <div className="h-[50px] w-full bg-gray-800 relative mt-0 flex gap-[400px] items-center ">
        <div className="flex gap-10 items-center">
          <p  className="text-3xl font-bold text-white pl-4">PopcornPlaza</p>
          <p onClick={() => navigate(`/`)} className="text-xl text-white font-bold cursor-pointer cursor-pointer"> Home</p>
          <p onClick={()=>navigate(`/movies/popular`)} className="text-xl text-white font-bold cursor-pointer">TV</p>
          <p onClick={()=>{navigate('/myplaza')}} className="text-xl text-white font-bold cursor-pointer">My Plaza</p>
        </div>
        <div className="flex gap-10 items-center">
        <p onClick={()=>navigate('/redeem')} className="text-xl text-white font-bold cursor-pointer">Redeem</p>
        <p onClick={()=>{navigate(`/signin`)}} className="cursor-pointer h-[30px] w-[80px] rounded-xl text-gray-800 font-bold flex items-center justify-center bg-white">
            Sign in
          </p>
        </div>
      </div>
      <div className='bg-black flex justify-center'>
        <p className='italic text-2xl font-bold bg-black p-5 text-yellow-700'>MOST POPULAR MOVIES</p>
      </div>
      <div className="relative flex flex-wrap justify-center gap-10 bg-black p-5 pb-2 ">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="relative h-[350px] w-[300px] rounded-xl overflow-hidden group"
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              className="cursor-pointer h-full w-full object-cover opacity-100 transform transition-transform duration-300 group-hover:scale-90"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="absolute top-0 left-0 bg-yellow-700 bg-opacity-75 text-white font-bold text-xl p-1 rounded-xl">
              {movie.vote_average}
            </p>
            <p className="absolute bottom-[100px] left-0 text-white font-bold text-xl pl-5">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
