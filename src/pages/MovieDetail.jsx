/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useMovieContext } from "../context/useMovieContext";
import MovieDetailCard from "../components/MovieDetailCard";

const MovieDetail = () => {
  // Get id from param
  const { id } = useParams();
  // Get Movie List from Context
  const { movieList } = useMovieContext();

  // Find Movie by id
  // As id is type of string convert it to string typeof(id)
  const movieId = parseInt(id);
  const matchedMovies = movieList.filter((movie) => movie.id === movieId); // result Array

  return (
    <div className="flex bg-white h-full w-full rounded-xl overflow-hidden">
      {matchedMovies.map((movie) => (
        <div key={movie.id}>
          <MovieDetailCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieDetail;
