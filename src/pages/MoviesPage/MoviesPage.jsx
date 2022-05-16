import { useState } from "react";
import PropTypes from "prop-types";
import { fetchSearch } from "Services/movieApi";
import MoviesGallery from "components/MoviesGallery";
import Container from "UI/container";
import Section from "UI/section";
import SearchBar from "components/SearchBar";
import { Loading } from "notiflix/build/notiflix-loading-aio";

import { mappedMovies } from "utils/mappedMoviesList";

const MoviePage = ({ genresList }) => {
  const [moviesList, setMoviesList] = useState([]);

  const handleSearch = (query) => {
    Loading.standard("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "100px",
      svgColor: "#F66B0E",
      messageFontSize: "18px",
      messageColor: "#F66B0E",
    });
    fetchSearch(query)
      .then((data) => {
        setMoviesList(mappedMovies(genresList, data.results));
      })
      .catch((err) => {
        console.error(err);
      });
    Loading.remove();
  };

  return (
    <Section>
      <Container>
        <SearchBar onSearch={handleSearch} />
      </Container>

      <Container>
        <MoviesGallery list={moviesList} />
      </Container>
    </Section>
  );
};

MoviePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MoviePage;