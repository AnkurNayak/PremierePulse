/* eslint-disable no-unused-vars */
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Loading Spinner
import Loading from "./components/Loading";
import { MovieProvider } from "./context/AppContext";

// Lazy Load Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieListPage = lazy(() => import("./pages/MovieList"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetail"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <MovieProvider>
      <div className="">
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="" element={<HomePage />}>
                <Route index element={<Navigate replace to="movielist" />} />
                <Route path="movielist" element={<MovieListPage />} />
                <Route path="moviedetail/:id" element={<MovieDetailPage />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </MovieProvider>
  );
};

export default App;
