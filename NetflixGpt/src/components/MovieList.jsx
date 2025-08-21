import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
  console.log(movies);
  if (!movies || movies.length === 0) {
  return <h2 className="text-white">Loading movies...</h2>;
}
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-6 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        
        <div className='flex mx-2'>
          {movies.map(movie => <MovieCards key={movie.id} posterPath={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList