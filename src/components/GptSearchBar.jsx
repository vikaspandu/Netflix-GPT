import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import openai from '../utils/openai';
import React, { useRef } from 'react'
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();
    return json.results;
  }

  const handleOnclickEvent = async () => {
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Raone";

    const gptResults = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: "user", content: gptQuery }],
    });

    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9 rounded-lg' placeholder='What would you like to watch today?' />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleOnclickEvent}>Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar

//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