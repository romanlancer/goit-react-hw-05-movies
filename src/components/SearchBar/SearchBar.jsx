import { useState } from "react";
import styled from "styled-components";

import AccentButton from "UI/AccentButton";

const SearchForm = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(query);
      setValue("");
    }
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        value={value}
        placeholder="Search for movies"
        onChange={(e) => setValue(e.target.value)}
      />
      <AccentButton title="Find" type="submit" />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 340px;
  margin-right: 10px;

  background-color: transparent;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  border-bottom: 2px solid ${(p) => p.theme.accentColor};
  color: ${(p) => p.theme.accentBG};
`;

export default SearchForm;
