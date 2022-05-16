import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import CastItem from "./CastItem";
import { fetchCast } from "Services/movieApi";
import { mappedCast } from "utils/mappedCast";

const MovieCast = ({ id }) => {
  const [cast, setCast] = useState(null);
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

  const renderCast = () =>
    cast.map((item) => (
      <Item key={item.id}>
        <CastItem {...item} />
      </Item>
    ));

  return <List>{cast ? renderCast() : "no credits"}</List>;
};

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${(p) => p.theme.mainColor};
  border-radius: 10px;
`;

const Item = styled.li`
  padding: 5px;
`;

MovieCast.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieCast;
