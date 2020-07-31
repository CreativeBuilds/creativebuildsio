import styled from "styled-components";

export default styled.div`
  height: 18rem;
  width: 32rem;
  position: relative;
  max-width: 100%;
  transition: all 0.25s;

  @media screen and (max-width: 750px) {
    & {
      height: 12rem;
      width: calc(32rem / 3 * 2);
    }
  }

  @media screen and (max-width: 450px) {
    & {
      height: 12rem;
      width: calc(32rem / 3 * 2);
    }
  }
`;
