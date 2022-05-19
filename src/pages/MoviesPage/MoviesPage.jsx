import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchSearch } from "Services/movieApi";
import MoviesGallery from "components/MoviesGallery";
import Container from "UI/container";
import Section from "UI/section";
import SearchBar from "components/SearchBar";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { mappedMovies } from "utils/mappedMoviesList";
import { useSearchParams } from "react-router-dom";

const PARAM_QUERY = "query";

const MoviePage = ({ genresList }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [queryParam, setQueryParam] = useSearchParams({});

  useEffect(() => {
    const query = queryParam.get(PARAM_QUERY);

    if (query) handleSearch(query);
  }, []);

  const handleSearch = (query) => {
    setQueryParam({ [PARAM_QUERY]: query });

    Loading.standard("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "100px",
      svgColor: "#F66B0E",
      messageFontSize: "18px",
      messageColor: "#F66B0E",
    });
    fetchSearch(query)
      .then((data) => {
        if (data.results.length === 0) {
          Notify.failure("Sorry nothing found on your query", {
            fontSize: "18px",
            cssAnimationStyle: "from-right",
          });
        }

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
