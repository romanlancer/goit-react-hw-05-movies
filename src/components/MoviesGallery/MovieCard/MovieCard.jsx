import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";
import NoPoster from "UI/movie-poster-coming-soon.jpg";

const MovieCard = ({ title, posterPath, genres }) => (
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
          <Picture
            alt={title}
            loading="lazy"
            src={`https://themoviedb.org/t/p/w342${posterPath}`}
          />
        </picture>
      ) : (
        <Picture alt={title} loading="lazy" src={NoPoster} />
      )}
    </Thumb>

    <Title>{title}</Title>
    <Genres>{genres}</Genres>
  </Wrapper>
);

const Wrapper = styled.div`
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 260px;
  transform: scale(1);
  transition: transform ${(p) => p.theme.transition};
  @media ${breakpoints.tablet} {
    width: 300px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 8px 6px ${(p) => p.theme.accentColor};
    transform: scale(1.04);
  }
`;

const Thumb = styled.div`
  margin-bottom: 5px;

  background-color: ${(p) => p.theme.skeletonFrom};
`;

const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px / 14px;
  color: ${(p) => p.theme.accentBG};
`;

const Genres = styled.p`
  margin-top: 4px;
  font-size: 12px;
  line-height: 12px / 14px;
  font-weight: 500;
  color: ${(p) => p.theme.accentColor};
`;

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  genres: PropTypes.string,
};

export default MovieCard;
