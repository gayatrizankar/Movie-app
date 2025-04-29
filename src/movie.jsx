import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movies }) => {
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
      <div className="h-screen w-full bg-black flex justify-center">
        <div className="relative">
          <img
            className="h-screen w-screen object-cover opacity-40"
            src="https://wallpaperaccess.com/full/88632.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-[100px] left-0">
          <p className="text-white text-4xl font-bold font-serif p-5">
            SPIDER MAN
          </p>
          <p className="text-white italic text-xl pl-5">
            Spider-Man is a thrilling superhero film series that showcases the
            journey of Peter Parker balancing life,{" "}
          </p>
          <p className="text-white italic text-xl pl-5">
            love, and saving the world with great power and responsibility.
          </p>
          <button className="h-[60px] w-[150px] bg-yellow-700 text-white font-bold text-xl rounded-xl m-5">
            Watch Now
          </button>
        </div>
        <div className="absolute top-[350px] flex flex-wrap justify-center gap-10 p-5 pb-2 ">
          {movies.slice(5, 10).map((movie) => (
            <div
              key={movie.id}
              className=" h-[200px] w-[200px] rounded-xl overflow-hidden group"
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <div>
                <img
                  className="cursor-pointer rounded-xl border-4 border-yellow-700 bg-yellow-700 w-full h-full object-contain opacity-75 transform transition-transform duration-300 group-hover:scale-90"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>

              <p className=" left-0 text-white font-bold text-xl pl-5">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => navigate("/movies/popular")}
        className="absolute bottom-0 right-0 h-[30px] w-[100px] bg-yellow-700 text-white font-bold text-xl rounded-xl m-5 pl-2 cursor-pointer"
      >
        More...
      </div>

      <div className=" bg-black flex justify-center items-center">
        <div>
        <video className="h-max-full w-max-full" autoPlay muted loop>
          <source
            src="/videos/WhatsApp Video 2025-01-17 at 13.23.05_e89f71b6.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </div>
        <div>
          <p className="text-white text-4xl font-bold p-5 pb-1 font-serif">Free Movies to Watch, </p>
          <p className="text-white text-4xl font-bold p-5 pt-1 font-serif">Anytime Anywhere.</p>
          <p className="text-white text-xl italic pl-5">The search is over! Let Plex help you find the perfect</p>
          <p className="text-white text-xl italic pl-5">movie to watch tonight for free.</p>
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

export default Movie;
