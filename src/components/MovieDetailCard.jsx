/* eslint-disable no-unused-vars */
import StarSVG from "../assets/star.svg";
import FormModal from "./Form";
import React, { useEffect, useState } from "react";
import { removeHtmlTags } from "../context/useMovieContext";

/* eslint-disable react/prop-types */
const MovieDetailCard = ({ movie }) => {
  const [successBook, setSuccessBook] = useState(false);

  // Store and retrieve data from localStorage
  const localStorageKey = movie.id;
  const getLocalStorageById = JSON.parse(localStorage.getItem(localStorageKey));

  // Remove data if cancel book
  const cancelBooking = () => {
    localStorage.removeItem(localStorageKey);
    setSuccessBook(false);
  };

  const checkIfBooked = () => {
    if (getLocalStorageById !== null) {
      setSuccessBook(true);
    } else {
      setSuccessBook(false);
    }
  };

  // Re render on localStorage
  useEffect(() => {
    checkIfBooked();
  }, [localStorageKey]);

  return (
    <div className="flex gap-3 min-h-96 h-full p-4 items-center max-md:flex-col">
      <div className="h-full w-full flex items-center justify-center">
        <img src={movie.image?.medium} alt={movie.name} />
      </div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">{movie.name}</h1>
        <p>{removeHtmlTags(movie.summary)}</p>
        <div className="flex font-smibold mt-4 gap-2 items-center">
          <p className="font-bold">{movie.network?.name}</p>
          {movie.genres.map((item, i) => (
            <div key={i}>
              <p className="bg-sky-500 text-white rounded-md p-1">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <img src={StarSVG} alt="" className="h-6 w-6" />
          {movie.rating?.average}
        </div>
        <div className="font-semibold flex gap-2 p-2 bg-gray-200 rounded-lg">
          <p>Schedule: {movie.schedule?.time}</p>
          {movie.schedule?.days.map((day, ind) => (
            <div key={ind} className="flex gap-1">
              {day}
            </div>
          ))}
        </div>
        {successBook && (
          <>
            <p className="bg-green-500 animate__animated animate__bounceInLeft p-2 text-white font-bold">
              Show Booked Successfully : {movie.name}
            </p>
            <button className="btn" onClick={() => cancelBooking()}>
              Cancel Booking
            </button>
          </>
        )}
        {!successBook && (
          <FormModal movie={movie} setSuccessBook={setSuccessBook} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailCard;
