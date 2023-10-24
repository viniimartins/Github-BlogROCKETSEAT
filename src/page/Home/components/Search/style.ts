import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
