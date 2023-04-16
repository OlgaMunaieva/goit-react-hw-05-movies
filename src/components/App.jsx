// import Home from 'pages/Home';
// import MovieDetails from 'components/movieDetails/MovieDetails';
// import Movies from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
// import Cast from './cast/Cast';
// import Review from './review/Review';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() =>
  import('../components/movieDetails/MovieDetails')
);
const Movies = lazy(() => import('../pages/Movies'));
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
