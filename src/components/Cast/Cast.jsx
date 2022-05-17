import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import CastItem from "./CastItem";
import { fetchCast } from "Services/movieApi";
import { mappedCast } from "utils/mappedCast";
import noCredits from "components/Cast/no-credits.webp";

const MovieCast = ({ id }) => {
  const [cast, setCast] = useState([]);
  Loading.standard("Loading...", {
    backgroundColor: "rgba(0,0,0,0.8)",
    svgSize: "100px",
    svgColor: "#F66B0E",
    messageFontSize: "18px",
    messageColor: "#F66B0E",
  });
  useEffect(() => {
    fetchCast(id).then((data) => {
      console.log(data);
      setCast(mappedCast(data.cast));
    });
  }, [id]);

  Loading.remove();

  return (
    <List>
      {cast.length > 0 ? (
        cast.map((item) => (
          <Item key={item.id}>
            <CastItem {...item} />
          </Item>
        ))
      ) : (
        <div className="noCredits">
          <img width="180px" src={noCredits} alt="no credits" />
          <p>Sorry no credits available</p>
        </div>
      )}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${(p) => p.theme.mainColor};
  border-radius: 10px;
  & .noCredits {
    margin-right: auto;
    font-size: 20px;
  }
`;

const Item = styled.li`
  padding: 5px;
`;

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieCast;
