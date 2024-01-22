/* eslint-disable no-unused-vars */
import axios from "axios";

// Get Movie;
const getMovie = (response) => {
  const MovieDetail = [];
  // Get Show From API
  const movie = response.data.map((item) => item.show);
  Object.assign(MovieDetail, movie);
  // Iterate again and assign to required movie detail
  const requiredMovieDetail = MovieDetail.map((movie) => {
    const {
      id,
      name,
      image,
      summary,
      network,
      schedule,
      status,
      type,
      genres,
      officialSite,
      rating,
    } = movie;
    return {
      id,
      name,
      image,
      summary,
      network,
      schedule,
      status,
      type,
      genres,
      officialSite,
      rating,
    };
  });
  //   console.log(requiredMovieDetail);
  return requiredMovieDetail;
};
// Get Movie List from API
const MovieHandler = () => {
  const handleMovieList = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    const reqDetails = getMovie(response);
    return reqDetails;
  };

  return { handleMovieList };
};

export default MovieHandler;
