import HomeView from "../pages/Home/Home";
import Movies from "../pages/Movie/Movies";
import NotFoundView from "../pages/NotFoundPage/NotFoundPage";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Cast from "../pages/Cast/Cast";
import Reviews from "../pages/Reviews/Reviews";

import { Route, Routes } from "react-router-dom";

export default function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}
