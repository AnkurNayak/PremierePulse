/* eslint-disable no-unused-vars */
import MovieListCard from "../components/MovieListCard";
import { useMovieContext } from "../context/useMovieContext";
// eslint-disable-next-line react/prop-types
const MovieList = () => {
  // Import shared values
  const { searchInput, movieList } = useMovieContext();

  // Function to filter movies based on search input
  const filterMovies = () => {
    if (!searchInput) {
      // If search input is empty, show all movies
      return movieList;
    }
    const filteredMovies = movieList.filter((movie) =>
      movie.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredMovies;
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 max-md:grid-cols-1">
      {filterMovies().map((movie) => (
        <div key={movie.id} className="mb-4">
          <MovieListCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
