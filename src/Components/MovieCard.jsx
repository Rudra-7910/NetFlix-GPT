import React from 'react'
import { IMG_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath, movieId}) => {
  const navigate = useNavigate();

  if(!posterPath) return null;

  return (
    <div className='w-48 pr-4' onClick={() => navigate(`/watch/${movieId}`)}>
        <img alt="Movie Card" src={IMG_CDN+posterPath} />
    </div>
  )
}

export default MovieCard
