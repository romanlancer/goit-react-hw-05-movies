import { fetchTrends } from "Services/movieApi";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MoviesGallery from "components/MoviesGallery";
import { mappedMovies } from "utils/mappedMoviesList";
import Container from "UI/container";
import Section from "UI/section";
const HomePage = ({ genresList }) => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (genresList.length)
      fetchTrends().then((data) => {
        setMoviesList(mappedMovies(genresList, data.results));
      });
  }, [genresList]);

  return (
    <Section>
      <Container>
        <MoviesGallery list={moviesList} />
      </Container>
    </Section>
  );
};

HomePage.propTypes = {
  genresList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomePage;
