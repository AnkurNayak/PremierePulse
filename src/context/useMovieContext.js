import { useContext } from "react";
import { MovieContext } from "./AppContext";
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

//Remove Summary tags coming from server 
export const removeHtmlTags = (summary) => {
  return summary.replace(/<[^>]*>/g, "");
};
