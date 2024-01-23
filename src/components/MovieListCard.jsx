/* eslint-disable react/prop-types */
import Star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { removeHtmlTags } from "../context/useMovieContext";
const MovieListCard = ({ movie }) => {
  const navigate = useNavigate();
  // Navigate to detail Page and pass id
  const getMovieDetails = () => {
    navigate(`/moviedetail/${movie.id}`);
  };

  return (
    <div className="card-normal bg-base-100 shadow-xl rounded-xl overflow-hidden">
      <figure>
        <img
          src={movie.image?.medium}
          alt="movie"
          className="w-full h-60 object-fill"
        />
      </figure>
      <div className="card-body max-h-64">
        <h2 className="card-title flex w-full bg-sky-500 rounded-lg justify-center">
          {movie.name}
        </h2>
        <p className="line-clamp-3 font-semibold">
          {removeHtmlTags(movie.summary)}
        </p>
        <div className="card-actions justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src={Star} alt="rating" className="h-6 w-6" />
            <p className="font-semibold">{movie.rating?.average}</p>
          </div>
          <Button className="btn btn-primary" click={getMovieDetails}>
            Get Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieListCard;
