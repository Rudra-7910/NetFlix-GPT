import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_OPTIONS } from '../utils/constants';
import axios from 'axios';

const WatchMovie = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const [trailerId, setTrailerId] = useState(null);

    useEffect(() => {
        const fetchMovieTrailer = async () => {
            try {
                const data = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
                const filterData = data.data.results.filter(video => video.type === "Trailer");
                const trailer = filterData.length ? filterData[0] : data.data.results[0];
                setTrailerId(trailer?.key);
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
        };

        fetchMovieTrailer();
    }, [movieId]);

    return (
        <div className="w-screen h-screen bg-black">
            <button 
                onClick={() => navigate(-1)} 
                className="absolute top-4 left-4 z-50 p-2 px-4 bg-black/50 text-white rounded-lg hover:bg-black/80 font-bold"
            >
                ← Back
            </button>
            {trailerId ? (
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=0&controls=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            ) : (
                <div className="flex items-center justify-center h-full text-white">
                    <p className="text-2xl">Loading Trailer...</p>
                </div>
            )}
        </div>
    );
};

export default WatchMovie;
