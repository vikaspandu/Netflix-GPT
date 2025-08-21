import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({moviesId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(moviesId);
  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen h-[120vh]'
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key+ "?&autoplay=1&mute=1"} 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground


// {
//   "id": 755898,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "d9erkpdh5o0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-07-24T18:40:00.000Z",
//       "id": "6882cabfdaa869ed6516b8a5"
//     }
//   ]
// }