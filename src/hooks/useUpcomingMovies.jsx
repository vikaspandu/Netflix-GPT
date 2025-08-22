import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch(); 
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  },[])
  
}

export default useUpcomingMovies;