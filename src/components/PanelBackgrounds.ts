import PanelBase from "./PanelBase";
import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0% {
    transform: translate(0rem, 0rem)
  }

  100% {
    transform: translate(5px, 5px)
  }
`;

export default styled(PanelBase)`
  position: absolute;
  &::after,
  &::before {
    content: "Test!";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -0.75rem;
    right: -0.75rem;
    background: inherit;
    border-radius: 1rem;
    opacity: 0.33;
    animation: ${breathe} 1s ease-in-out alternate infinite;
  }
  &::after {
  }
  &::before {
    animation-delay: 0.2s;

    right: -1.5rem;
    bottom: -1.5rem;
  }
`;
