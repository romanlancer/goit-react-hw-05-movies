import { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchGenres } from "Services/movieApi";
const HomePage = lazy(() =>
  import("pages/HomePage" /* webpackChunkName: "home-view" */)
);
const MoviesPage = lazy(() =>
  import("pages/MoviesPage" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsPage = lazy(() =>
  import("pages/MovieDetailsPage" /* webpackChunkName: "movie-details-view" */)
);

const App = () => {
  const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    fetchGenres().then((data) => setGenresList(data.genres));
  }, []);

  return (
    <Suspense
      fallback={Loading.standard("Loading...", {
        backgroundColor: "rgba(0,0,0,0.8)",
        svgSize: "100px",
        svgColor: "#F66B0E",
        messageFontSize: "18px",
        messageColor: "#F66B0E",
      })}
    >
      {Loading.remove()}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage genresList={genresList} />} />
          <Route path="movies/:movieID/*" element={<MovieDetailsPage />} />
          <Route
            path="movies"
            element={<MoviesPage genresList={genresList} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
