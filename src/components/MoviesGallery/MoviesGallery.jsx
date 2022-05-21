import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";

import MovieCard from "./MovieCard";

const MoviesGallery = ({ list }) => {
  const location = useLocation();

  const renderGallery = () =>
    list.map((item) => (
      <Item key={item.id}>
        <Link to={`/movies/${item.id}`} state={{ from: location }}>
          <MovieCard {...item} />
        </Link>
      </Item>
    ));

  return <Wrapper>{list.length ? renderGallery() : null}</Wrapper>;
};

const Wrapper = styled.ul`
  display: grid;
  gap: 25px;
  grid-template-columns: 1fr;
  @media ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Item = styled.li`
  margin: 0 auto;
`;

MoviesGallery.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string,
      genres: PropTypes.string,
    })
  ),
};

export default MoviesGallery;
