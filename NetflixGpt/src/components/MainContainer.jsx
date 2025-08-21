import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if(!movies) return;

  const newMovie = movies[0];
  const {title, overview, id} = newMovie;
  return (
   <div>
     <VideoTitle title={title} overview={overview} />
     <VideoBackground moviesId={id} />
   </div>
  )
}

export default MainContainer;