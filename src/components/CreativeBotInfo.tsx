import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import OpenWindow from "../helpers/OpenWindow";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 1rem;
  background: var(--darker);
  position: absolute;
  border: 4px solid var(--dark-brighter);
  border-radius: 1rem;
  clip-path: circle(5% at 95% 10%);
  transition: clip-path 0.5s;
  color: var(--light);
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  span {
    float: right;
    font-weight: bold;
    position: absolute;
    top: calc(0.8rem - 4px);
    right: calc(1.4rem - 4px);
    font-size: 1.6rem;
    color: var(--lighter);
  }

  button {
    width: fit-content;
    padding: 0.5rem 1rem 0.5rem 1rem;
    background: var(--dark-brighter);
    border: none;
    outline: none;
    margin: 0 auto 0 auto;
    border-radius: 0.25rem;
    color: var(--light);
    transition: all 0.33s ease-in-out;

    &:hover {
      background: var(--darker);
      color: var(--lighter);
      cursor: pointer;
      box-shadow: 0px 0px 4px var(--darker);
    }
  }

  h3 {
    margin-bottom: 1rem;
    flex: 1;
  }

  p {
    flex: 2;

    a {
      color: var(--lighter);
      text-decoration: underline;
    }
  }

  &:hover,
  &:active,
  &.open {
    background: var(--dark);
    clip-path: circle(70%);
  }

  @media screen and (max-width: 750px) {
    span {
      font-size: 0.8rem;
      right: calc(1rem - 4px);
      top: calc(0.7rem - 4px);
    }
  }
`;

const open_creativebot_github = () => {
  OpenWindow("https://github.com/creativebuilds/creativebot");
};

export default (): ReactElement => {
  const [toggled, setToggled] = useState(false);

  const swap_toggled = () => {
    setToggled(!toggled);
  };

  return (
    <Wrapper className={toggled ? "open" : ""} onClick={swap_toggled}>
      <span>i</span>
      <h3>What is CreativeBot?</h3>
      <p>
        CreativeBot is a chatbot that I made for a streaming site called{" "}
        <a href="https://dlive.tv" target="_blank">
          DLive
        </a>
        . I have since stopped maintaining it, but for historical purposes you
        can view it on github.
      </p>
      <button onClick={open_creativebot_github}>View on Github</button>
    </Wrapper>
  );
};
