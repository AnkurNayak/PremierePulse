import SearchSVG from "../assets/search.svg";
import { useMovieContext } from "../context/useMovieContext";

// SearchBarComponent
// eslint-disable-next-line react/prop-types
const SearchBar = () => {
  const { searchInput, searchFunction } = useMovieContext();
  return (
    <div className="w-full">
      <form className="mb-4">
        <div className="bg-white rounded-lg overflow-hidden text-slate-700">
          <div className="border-b border-slate-500 flex items-center">
            <img className="h-6 w-6 mx-2" src={SearchSVG} alt="search.ico" />
            <input
              type="text"
              className="flex w-full py-2 focus:outline-none bg-transparent whitespace-nowrap text-ellipsis overflow-hidden"
              placeholder="Search for a movie...."
              value={searchInput}
              onChange={(e) => searchFunction(e)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
