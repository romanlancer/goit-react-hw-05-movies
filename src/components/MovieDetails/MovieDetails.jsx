import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";
import noPoster from "UI/movie-poster-coming-soon.jpg";

const MovieDetails = ({
  title,
  qoute,
  release,
  overview,
  genres,
  posterPath,
}) => {
  console.log(posterPath);
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
              src={`https://themoviedb.org/t/p/w${posterPath}`}
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
        <Paragraph>{release}</Paragraph>

        <BlockTitle>Genres</BlockTitle>
        <Paragraph>{genres}</Paragraph>

        <BlockTitle>Overview</BlockTitle>
        <Paragraph>{overview}</Paragraph>
      </Information>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${breakpoints.tablet} {
    display: flex;
  }
  padding: 20px;
  margin-top: 10px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #b1a2a3, 5px 5px 15px 5px rgba(181, 181, 181, 0);
  box-shadow: 0px 0px 0px 5px #a0a0a0, inset 0px 10px 27px -8px #141414,
    inset 0px -10px 27px -8px #b1a2a3, 5px 5px 15px 5px rgba(181, 181, 181, 0);
`;

const Thumb = styled.div`
  & img {
    margin: 0 auto;
    border-radius: 5px;
    width: 100%;
    @media ${breakpoints.tablet} {
      width: 340px;
    }
    @media ${breakpoints.laptop} {
      width: 400px;
    }
  }
`;

const Information = styled.div`
  margin-left: 0;
  margin-top: 20px;
  @media ${breakpoints.tablet} {
    margin-top: 0;
    margin-left: 20px;
  }
  @media ${breakpoints.laptop} {
    margin-left: 25px;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  color: ${(p) => p.theme.accentColor};
  font-size: 25px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.laptop} {
    font-size: 30px;
  }
`;

const Subtitle = styled.p`
  margin-top: 4px;
  margin-bottom: 30px;
  color: ${(p) => p.theme.lightBG};
  font-size: 20px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.laptop} {
    font-size: 22px;
  }
`;

const BlockTitle = styled.h3`
  margin-top: 20px;
  color: ${(p) => p.theme.accentColor};
  font-size: 18px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.laptop} {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  margin-top: 10px;
  color: ${(p) => p.theme.altBG};
  font-size: 14px;
  font-weight: 400;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.laptop} {
    font-size: 16px;
  }
`;

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  qoute: PropTypes.string,
  release: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.string,
  posterPath: PropTypes.string,
  backdropPath: PropTypes.string,
};

export default MovieDetails;
