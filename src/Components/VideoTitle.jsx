import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full absolute inset-0 pt-[25%] md:pt-[15%] px-6 md:px-24 text-white bg-gradient-to-r from-black z-10 aspect-video'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-2 md:my-0'>
        <button className='bg-white text-black font-medium p-2 md:p-4 px-6 md:px-10 text-lg md:text-xl rounded-lg hover:bg-gray-300 cursor-pointer'>
          Play
        </button>
        <button className='hidden md:inline-block bg-gray-500/50 mx-3 text-white p-4 px-10 text-xl rounded-lg'>
          More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
