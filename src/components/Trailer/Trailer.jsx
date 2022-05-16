import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchFilmVideo } from "Services/movieApi";
import ReactPlayer from "react-player/lazy";
import { breakpoints } from "utils/breakpoints";

const Trailer = ({ id }) => {
  const [trailer, setTrailer] = useState([]);

  Loading.standard("Loading...", {
    backgroundColor: "rgba(0,0,0,0.8)",
    svgSize: "100px",
    svgColor: "#F66B0E",
    messageFontSize: "18px",
    messageColor: "#F66B0E",
  });

  useEffect(() => {
    fetchFilmVideo(id).then((data) => setTrailer(data.results));
  }, [id]);
  console.log(trailer);
  const renderTrailer = () =>
    trailer.map((item) => (
      <li key={item.id}>
        <ReactPlayer
          src={`'https://www.youtube.com/watch?v=${item.key}'`}
          width="100%"
          height="100%"
        />
      </li>
    ));
  Loading.remove();
  return <List>{trailer ? renderTrailer() : "no trailers"}</List>;
};

export default Trailer;

const List = styled.ul`
  display: grid;
  color: black;
  gap: 30px;
  grid-template-columns: 1fr;
  @media ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
