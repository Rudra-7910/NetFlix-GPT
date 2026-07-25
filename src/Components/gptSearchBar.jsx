import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import axios from 'axios';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async (movie) => {
        const data = await axios(
            "https://api.themoviedb.org/3/search/movie?query=" +
                movie +
                "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        return data.data.results;
    };
    const handleGptSearchClick = async () => {
        const query = searchText.current.value;
        if (!query) return;
        try {
            const results = await searchMovieTMDB(query);
            dispatch(addGptMovieResult({ movieResults: results }));
        } catch (error) {
            console.error("Search Error: ", error);
        }
    };

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center relative z-10 px-4 md:px-0">
            <form className="w-full md:w-1/2 bg-black/80 flex flex-col md:grid md:grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input 
                    ref={searchText}
                    type="text" 
                    className="p-4 m-4 md:col-span-9 bg-white text-black rounded-lg focus:outline-none" 
                    placeholder={lang[langKey].searchPlaceholder} 
                />
                <button 
                    className="m-4 mt-0 md:mt-4 md:col-span-3 py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold text-lg transition-colors"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].searchButton}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;