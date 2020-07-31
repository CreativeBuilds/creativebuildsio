import styled from "styled-components";
import React, { ReactElement } from "react";
import Center from "./Center";
import CreativeBotInfo from "./CreativeBotInfo";

const CreativeBotImg = styled.img`
  /* height: 33% !important; */
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  border: 4px solid var(--dark-brighter);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  cursor: pointer;
  position: absolute;
  overflow: hidden;
`;

export default (): ReactElement => {
  return (
    <Wrapper>
      <CreativeBotImg src="https://i.imgur.com/9ku9Ihf.png" />
      <CreativeBotInfo />
    </Wrapper>
  );
};
