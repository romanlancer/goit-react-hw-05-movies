import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const HomePage = lazy(() =>
  import("../pages/HomePage" /* webpackChunkName: "home-view" */)
);
const MoviesPage = lazy(() =>
  import("../pages/MoviesPage" /* webpackChunkName: "movies-view" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../pages/MovieDetailsPage" /* webpackChunkName: "movie-details-view" */
  )
);

const App = () => {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
