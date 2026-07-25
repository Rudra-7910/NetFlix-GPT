import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const { movieResults } = useSelector((store) => store.gpt);
  
  if (!movieResults || movieResults.length === 0) return null;

  return (
    <div className="p-4 m-4 bg-black/90 text-white rounded-lg z-10 relative">
      <div>
        <MovieList
          title="Search Results"
          movies={movieResults}
        />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
