import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video absolute pt-[15%] px-20 text-white bg-gradient-to-r from-black ">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-3 text-lg w-2/6">{overview}</p>
      <div className=''>
        <button className='bg-white text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'> Play</button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More Info</button>
      </div>
    </div>
  )
}
export default VideoTitle