import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route
          path="/goit-react-hw-05-movies"
          element={
            <div>Видаліть "goit-react-hw-05-movies" з пошукової стрічки</div>
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}
