import { createSlice } from "@reduxjs/toolkit";
const gptSlice= createSlice({
    name:"gpt",
    initialState:{
        showGptSearchView:false,
        movieResults: null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearchView=!state.showGptSearchView
        },
        addGptMovieResult: (state, action) => {
            const { movieResults } = action.payload;
            state.movieResults = movieResults;
        }
    }
})
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer
