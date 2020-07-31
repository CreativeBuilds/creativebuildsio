import React, { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import TransformTextForContent from "../helpers/TransformTextForContent";
import Section from "./Section";

interface IProps {
  innerText: string;
}

const spin = keyframes`
  0% {
    transform: translateY(-10%) translateX(-5%) rotate(-40deg);
  }

  100% {
    transform: translateY(-100%) translate(5%) rotate(400deg);
  }
`;

const flicker = keyframes`
  0%,
  6%,
  15%,
  26% {
    color: var(--dark);
    text-shadow: 0px 0px 4px var(--dark);

  }

  10%,
  20% {
    color: var(--light);
    t    text-shadow: 0px 0px 4px var(--lighter), 0px 0px 15px var(--light);


  }

  100% {
    color: var(--lighter);
    overflow: auto;
    text-shadow: 0px 0px 4px var(--light);
    
  }
  `;

export default styled(Section)<IProps>`
  & {
    position: relative;
    background: var(--darker);
    border: 0.5rem solid var(--darker);
    height: 100vh;
    width: 100vw;
    outline: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::before {
    content: ${(props: IProps) => TransformTextForContent(props.innerText)};
    /* height: 100%;
    width: 100%; */

    color: var(--dark);
    font-size: 4rem;
    font-family: "Quicksand", sans-serif;
    animation: ${flicker} 0.5s ease forwards;
    animation-delay: 3.5s;
    /* text-shadow: 0px 0px 4px var(--light); */
  }

  &::after {
    content: "";
    position: absolute;
    height: 200vh;
    width: 200vh;
    min-width: 200vw;
    min-height: 200vw;
    background: var(--dark);
    bottom: -50%;
    left: -50%;
    border-radius: 40%;
    animation: ${spin} 6s ease-out forwards;
    border: 5px solid var(--dark);
  }

  @media (max-width: 600px) {
    &::before {
      font-size: 2rem;
    }
  }
`;
