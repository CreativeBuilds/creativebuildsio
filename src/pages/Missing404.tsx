import React, { ReactElement } from "react";
import Center from "../components/Center";
import styled from "styled-components";
import { flicker } from "../components/LandingBox";

const CenterStyled = styled(Center)`
  color: var(--dark);
  height: 100vh;
  font-size: 3rem;
  /* text-shadow: 0px 0px 4px var(--lighter); */
  animation: ${flicker} 0.5s ease forwards;
  animation-delay: 1s;
`;

const Missing404 = (): ReactElement => {
  return <CenterStyled>404 Page not found :(</CenterStyled>;
};

export default Missing404;
