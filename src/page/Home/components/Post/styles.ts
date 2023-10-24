import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ContainerPost = styled(Link)`
  max-width: 26rem;
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  margin-bottom: 2rem;

  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme["base-post"]};
  text-decoration: none;

  div {
    display: flex;
  }

  div > h3 {
    color: ${(props) => props.theme["base-title"]};

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;

    width: 80%;
  }

  div > span {
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-span"]};
  }

  p {
    font-family: Nunito;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
