import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const ProfileContainer = styled.article`
  width: 100%;
  position: relative;
  height: 13.25rem;

  display: flex;
  gap: 2rem;
  margin: 0 auto;
  margin-top: -6rem;

  background-color: ${(props) => props.theme["base-profile"]};

  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  padding: 2rem 2.5rem;
`;

export const ProfileImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;

  h2 {
    color: ${(props) => props.theme["base-title"]};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }

`;

export const PostHeaderLink = styled(Link)`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  align-items: center;
  text-transform: uppercase;

  color: ${(props) => props.theme["blue"]};
`;

export const ProfileContent = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    gap: 0.5rem;
  }
`;
