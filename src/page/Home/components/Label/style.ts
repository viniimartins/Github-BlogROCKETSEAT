import { styled } from "styled-components";

export const LabelContainer = styled.label`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  color: ${props => props.theme["base-subtitle"]}
`;
