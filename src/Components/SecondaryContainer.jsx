import React from 'react'
import MovieList from './MovieList'
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  return (
    <div className=" bg-black">
      <div className='relative -mt-20 md:-mt-60 z-10'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.nowPlayingMovies} />
      </div>

      {/*
        MovieList - popular 
        MovieList- NowPlaying
        MovieList- Trending 
        MovieList- horror
        
       */}
    </div>
  )
}

export default SecondaryContainer
