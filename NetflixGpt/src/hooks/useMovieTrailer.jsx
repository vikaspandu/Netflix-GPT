import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (moviesId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/videos", API_OPTIONS)

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMoviesVideos();
  }, [])
}

export default useMovieTrailer;