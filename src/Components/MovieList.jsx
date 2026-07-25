import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <section className="px-10 py-5">
      <h2 className="text-3xl font-semibold text-white mb-5">
        {title}
      </h2>

      <div className="flex overflow-x-auto gap-5 no-scrollbar">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <MovieCard posterPath={movie.poster_path} movieId={movie.id} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;