import React, { ReactElement } from "react";
import styled, { css, keyframes } from "styled-components";
import TransformTextForContent from "../helpers/TransformTextForContent";

interface IProps {
  innerText: string;
}

const breath = keyframes`
  0%,
  100% {
    margin-left: -4rem;
    width: 12rem;
    background: var(--dark);
  }

  50% {
    margin-left: -5rem;
    width: 14rem;
  }
`;

const slide_in = keyframes`
  0% {
      background: rgba(0, 0, 0, 0);
      margin-top: 5rem;
      width: 0rem;
      height: 0rem;
    }

  10% {
      width: 4rem;
      height: 4rem;
    }

  33% {
      margin-top: -2rem;
      width: 4rem;
      margin-left: 0rem;
      background: var(--dark);
    }

  66% {
      color: rgba(0, 0, 0, 0);
    }

  66%,
  100% {
      margin-top: -2rem;
      width: 12rem;
      height: 4rem;
      margin-left: -4rem;
      background: var(--dark);
    }

  100% {
      color: var(--lighter);
      font-size: 1rem;
    }
  `;

export default styled.div<IProps>`
  & {
    position: absolute;
    top: 100vh;
    margin-top: -5rem;
    margin-left: calc(50vw - 2rem);
    z-index: 2;
    left: -5px;
    bottom: 0;
  }

  &::before {
    width: 4rem;
    height: 4rem;
    margin-top: -5rem;
    margin-left: calc(50vw - 2rem);
    border-radius: 50%;
    background: blue;
  }

  &::after {
    color: rgba(0, 0, 0, 0);
    content: ${(props: IProps) => TransformTextForContent(props.innerText)};
    position: absolute;
    width: 0rem;
    height: 0rem;
    margin-top: 5rem;
    border-radius: 4rem;
    animation-name: ${slide_in}, ${breath};
    animation-duration: 2s, 3.1s;
    animation-direction: normal, normal;
    animation-iteration-count: 1, infinite;
    animation-fill-mode: forwards, forwards;
    animation-timing-function: ease, ease-in-out;
    animation-delay: 4.5s, 6.11s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: margin-top 0.5s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }
`;
