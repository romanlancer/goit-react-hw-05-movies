import { fetchTrends, fetchGenres } from "Services/movieApi";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MoviesGallery from "components/MoviesGallery";
import { mappedMovies } from "utils/mappedMoviesList";
import Container from "UI/container";
import Section from "UI/section";
const HomePage = () => {
  const [genresList, setGenresList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  //   console.log(genresList)
  useEffect(() => {
    fetchGenres().then((data) => setGenresList(data.genres));
  }, []);

  useEffect(() => {
    if (genresList.length)
      fetchTrends().then((data) => {
        setLoading(false);
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
  ),
};

export default HomePage;
