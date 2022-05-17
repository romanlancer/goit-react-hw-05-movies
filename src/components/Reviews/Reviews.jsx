import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import ReviewItem from "./ReviewItem";
import { fetchReviews } from "Services/movieApi";
import { mappedReviews } from "utils/mappedReviews";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  Loading.standard("Loading...", {
    backgroundColor: "rgba(0,0,0,0.8)",
    svgSize: "100px",
    svgColor: "#F66B0E",
    messageFontSize: "18px",
    messageColor: "#F66B0E",
  });
  useEffect(() => {
    fetchReviews(id).then((data) => setReviews(mappedReviews(data.results)));
  }, [id]);
  Loading.remove();

  // const noReviews = () => <p>no reviews</p>

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map((item) => (
          <Item key={item.id}>
            <ReviewItem {...item} />
          </Item>
        ))
      ) : (
        <p>no reviews</p>
      )}
    </List>
  );
};

const List = styled.ul`
  margin-top: 2px;
`;

const Item = styled.li`
  margin-top: 8px;
`;

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
