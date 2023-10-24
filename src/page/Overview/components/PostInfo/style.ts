import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const PostInfoContainer = styled.article`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 0 auto;
  margin-top: -6rem;

  background-color: ${(props) => props.theme["base-profile"]};

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  padding: 2rem 2.5rem;
`;

export const PostInfoHeader = styled.header`
  display: flex;
  justify-content: space-between;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  color: ${(props) => props.theme["blue"]};

  span {
    display: flex;
    gap: 0.5rem;
  }
`;

export const ContainerLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;

  color: ${(props) => props.theme["blue"]};
`;

export const PostInfoHeaderLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;

  color: ${(props) => props.theme["blue"]};
`;

export const PostInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

export const PostInfoFooter = styled.footer`
  display: flex;
  gap: 2rem;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: ${(props) => props.theme["base-span"]};

  span {
    display: flex;
    gap: 0.5rem;
  }
`;
