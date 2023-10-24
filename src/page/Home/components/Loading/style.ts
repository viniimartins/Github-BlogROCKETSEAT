import { AiOutlineReload } from "react-icons/ai";

import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledIcon = styled(AiOutlineReload)`
  animation: spin 1s infinite linear;
`;
