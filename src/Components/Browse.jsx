import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies } from '../utils/movieSlice';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import axios from "axios"
import GPT_search from './GPT_search';
const Browse = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearchView);
  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await axios.get(
          'https://api.themoviedb.org/3/movie/now_playing?page=1',
          API_OPTIONS
        );
        dispatch(addNowPlayingMovies(data.data.results));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };
    getNowPlayingMovies();
  }, [dispatch]);


  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          API_OPTIONS
        );
        dispatch(addPopularMovies(data.data.results));
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    };
    getPopularMovies();
  }, [dispatch]);
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPT_search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
