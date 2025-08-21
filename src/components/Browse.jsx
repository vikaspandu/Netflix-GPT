
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './mainContainer';
import { useSelector } from 'react-redux';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  const showGptSearch= useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch /> : 
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse