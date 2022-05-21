import PropTypes from "prop-types";
import noPoster from "UI/movie-poster-coming-soon.jpg";
import {
  Wrapper,
  Thumb,
  Information,
  Title,
  Subtitle,
  BlockTitle,
  Paragraph,
} from "./MovieDetails.styled";

const MovieDetails = ({
  title,
  qoute,
  release,
  overview,
  genres,
  posterPath,
}) => {
  return (
    <Wrapper>
      <Thumb>
        {posterPath !== null ? (
          <picture>
            <source
              srcSet={`https://themoviedb.org/t/p/w500${posterPath}`}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={`https://themoviedb.org/t/p/w342${posterPath}`}
              media="(min-width: 768px)"
            />
            <img
              alt={title}
              loading="lazy"
              src={`https://themoviedb.org/t/p/w342${posterPath}`}
            />
          </picture>
        ) : (
          <img src={noPoster} alt="no poster" loading="lazy" />
        )}
      </Thumb>

      <Information>
        <Title>{title}</Title>
        <Subtitle>{qoute}</Subtitle>

        <BlockTitle>Release</BlockTitle>
        {release === Number ? (
          <Paragraph>{release}</Paragraph>
        ) : (
          <Paragraph></Paragraph>
        )}

        <BlockTitle>Genres</BlockTitle>
        <Paragraph>{genres}</Paragraph>

        <BlockTitle>Overview</BlockTitle>
        <Paragraph>{overview}</Paragraph>
      </Information>
    </Wrapper>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  qoute: PropTypes.string.isRequired,
  release: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  posterPath: PropTypes.string,
};

export default MovieDetails;
