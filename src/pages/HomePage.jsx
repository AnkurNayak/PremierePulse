/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full h-full  p-4">
      <div className="flex">
        <h1 className="text-slate-400 text-3xl font-black mb-3">
          Premier Pulse
        </h1>
        <span className="text-white text-xs font-bold"> © Ancode</span>
      </div>
      <SearchBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default HomePage;
