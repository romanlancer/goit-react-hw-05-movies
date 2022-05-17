import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchFilmVideo } from "Services/movieApi";
import ReactPlayer from "react-player";
import { breakpoints } from "utils/breakpoints";
import { YoutubeVideo } from "@wbe/react-video-player";
import Iframe from "react-iframe";
console.log(ReactPlayer);
const Trailers = ({ id }) => {
  const [trailers, setTrailers] = useState([]);

  Loading.standard("Loading...", {
    backgroundColor: "rgba(0,0,0,0.8)",
    svgSize: "100px",
    svgColor: "#F66B0E",
    messageFontSize: "18px",
    messageColor: "#F66B0E",
  });

  useEffect(() => {
    fetchFilmVideo(id).then((data) => setTrailers(data.results));
  }, [id]);

  const renderTrailer = () =>
    trailers.map((item) => (
      <li key={item.id}>
        <Iframe
          url={`https://www.youtube.com/embed/${item.key}`}
          width="100%"
          height="250px"
          allowFullScreen
        />
      </li>
    ));
  Loading.remove();
  return <List>{trailers ? renderTrailer() : "no trailers"}</List>;
};

export default Trailers;

const List = styled.ul`
  margin-top: 10px;
  display: grid;
  color: black;
  gap: 20px;
  grid-template-columns: 1fr;
  @media ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${breakpoints.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
