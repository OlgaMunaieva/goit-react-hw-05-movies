import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/home/Home'));
const MovieDetails = lazy(() =>
  import('../components/movieDetails/MovieDetails')
);
const Movies = lazy(() => import('../pages/movies/Movies'));
const Cast = lazy(() => import('../components/cast/Cast'));
const Review = lazy(() => import('../components/review/Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
      </Route>
    </Routes>
  );
};
