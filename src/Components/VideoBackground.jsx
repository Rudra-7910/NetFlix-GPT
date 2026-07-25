import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import axios from "axios";

const VideoBackground = ({ movieId }) => {
  const [trailer, setTrailer] = useState(null);
  const getMovieVideos = async () => {
    try {
      const data = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const filterData = data.data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      const trailerVideo = filterData.length > 0 ? filterData[0] : data.data.results[0];
      setTrailer(trailerVideo);
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
    }
  };
  useEffect(() => {
    if (!movieId) return;
    getMovieVideos();
  }, [movieId]);

  if (!trailer) return null;

  return (
    <div className="w-screen">
      <iframe className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&loop=1&playlist=${trailer.key}&controls=0&showinfo=0&rel=0&modestbranding=1`}
        title={trailer.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;