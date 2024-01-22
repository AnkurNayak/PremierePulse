import { createContext, useState, useEffect } from "react";
import MovieHandler from "../handlers/MovieApiHandler";
import useErrorState from "../hooks/useErrorState";

export const MovieContext = createContext();
// Search Input and Movies Share
// eslint-disable-next-line react/prop-types
const MovieProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const { handleMovieList } = MovieHandler();
  // Set error
  const { errorMessage, errorSet } = useErrorState();

  const searchFunction = (e) => {
    setSearchInput(e.target.value);
  };

  // Get Movies
  const getMovieList = async () => {
    try {
      // Response : Get the required details which returned by handleMovieList()
      const reqDetails = await handleMovieList();
      // Set the detail to movie list
      setMovieList(reqDetails);
    } catch (err) {
      console.log("Error Fetching Movie", err);
      // Error message set
      errorSet(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <MovieContext.Provider
      value={{ searchInput, searchFunction, movieList, errorMessage, errorSet }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieProvider };
