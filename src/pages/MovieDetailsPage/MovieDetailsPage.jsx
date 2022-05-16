import { useState, useEffect } from "react";
import { Routes, Route, Outlet, useParams } from "react-router-dom";
import MovieDetails from "components/MovieDetails";
import Container from "UI/container";
import Section from "UI/section";
import MovieDetailsNavigation from "components/MovieDetails/MovieDetailsNavigation";
import Cast from "components/Cast";
import Reviews from "components/Reviews";
import Trailer from "components/Trailer";
import NavigateBackButton from "components/NavigateBackButton";
import { movieDetails } from "utils/movieDetails";
import { fetchFilmDetails } from "Services/movieApi";
import { Loading } from "notiflix/build/notiflix-loading-aio";

const MovieDetailsPage = () => {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    Loading.standard("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "100px",
      svgColor: "#F66B0E",
      messageFontSize: "18px",
      messageColor: "#F66B0E",
    });
    fetchFilmDetails(movieID).then((res) => {
      setMovieData(movieDetails(res));
    });
    Loading.remove();
  }, [movieID]);

  return (
    <Section>
      <Container>
        <NavigateBackButton />
        {movieData && <MovieDetails {...movieData} />}
      </Container>

      <Container>
        <MovieDetailsNavigation id={movieID} />

        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="credits" element={<Cast id={movieID} />} />
            <Route path="reviews" element={<Reviews id={movieID} />} />
            <Route path="trailer" element={<Trailer id={movieID} />} />
          </Route>
        </Routes>
      </Container>
    </Section>
  );
};

export default MovieDetailsPage;
