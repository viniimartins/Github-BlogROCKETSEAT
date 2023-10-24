import { styled } from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;

  max-width: 54rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const PostContainer = styled.section`
  display: grid;

  grid-template-columns: 1fr 1fr;
`;
