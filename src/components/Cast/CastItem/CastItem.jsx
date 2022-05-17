import PropTypes from "prop-types";
import styled from "styled-components";
import noPhoto from "../CastItem/No-photo-m.png";
const CastItem = ({ name, character, photo }) => {
  return (
    <Wrapper>
      {photo ? (
        <Photo src={`https://themoviedb.org/t/p/w185${photo}`} alt={name} />
      ) : (
        <NoPhoto src={noPhoto} alt={name} />
      )}

      <Title>{name}</Title>
      <Subtitle>{character}</Subtitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 124px;
`;

const Photo = styled.img`
  border-radius: 5px;
`;

const NoPhoto = styled.img`
  width: 124px;
  height: 186px;
  object-fit: cover;
  background-color: ${(p) => p.theme.altColor};
  border-radius: 5px;
`;

const Title = styled.h4`
  margin-top: 5px;
  padding: 0 2px;
  color: ${(p) => p.theme.accentColor};
  font-family: ${(p) => p.theme.mainFF};
  font-size: 14px;
`;

const Subtitle = styled.p`
  margin-top: 5px;
  padding: 0 2px;
  color: ${(p) => p.theme.accentBG};
  font-family: ${(p) => p.theme.mainFF};
  font-size: 13px;
  font-weight: bold;
`;

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default CastItem;
