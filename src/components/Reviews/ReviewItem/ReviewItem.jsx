import PropTypes from "prop-types";
import styled from "styled-components";
import { breakpoints } from "utils/breakpoints";

const ReviewItem = ({ name, avatar, text }) => {
  return (
    <Wrapper>
      <Author>
        {avatar ? <Avatar src={avatar} /> : <NoAvatar />}
        <AuthorName>{name}</AuthorName>
      </Author>

      <Text>{text}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.mainColor};
  border: 1px solid ${(p) => p.theme.lightBG};
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const AuthorName = styled.span`
  margin-left: 20px;
  text-transform: uppercase;
  color: ${(p) => p.theme.accentColor};
  font-size: 14px;
  font-weight: 700;
  font-family: "Comfortaa", sans-serif;
`;

const Text = styled.p`
  color: ${(p) => p.theme.lightBG};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  font-family: "Comfortaa", sans-serif;
  @media ${breakpoints.laptop} {
    font-size: 16px;
  }
`;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #000;
`;

const NoAvatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: aqua;
`;

ReviewItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  text: PropTypes.string,
};

export default ReviewItem;
