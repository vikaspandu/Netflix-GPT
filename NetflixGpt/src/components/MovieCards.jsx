import React from 'react'
import { IMG_CARDS_CDN } from '../utils/constant'

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CARDS_CDN + posterPath} alt="cards img" />
    </div>
  )
}

export default MovieCards