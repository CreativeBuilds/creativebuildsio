import styled from "styled-components";
import Section from "./Section";

export default styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 1250px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
