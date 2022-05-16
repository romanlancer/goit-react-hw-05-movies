import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import AccentButton from "UI/AccentButton";

const NavigateBackButton = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [from, setFrom] = useState(null);

  useEffect(() => {
    if (state?.from) {
      const { pathname, search } = state.from;
      setFrom(`${pathname}${search}`);
    } else {
      setFrom("/");
    }
  }, [state?.from]);

  const handleBack = () => navigate(from);

  return (
    <Wrapper>
      <AccentButton title="Back" onClick={handleBack} type="button" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export default NavigateBackButton;
