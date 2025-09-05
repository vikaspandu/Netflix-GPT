import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-6 md:px-20 text-white bg-gradient-to-r from-black ">
      <h1 className="text-3xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-3 text-lg w-2/6">{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white text-white py-1 px-4 md:py-4 md:px-12 text-xl bg-opacity-50 rounded-lg'> Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}
export default VideoTitle