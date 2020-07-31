/* Sections take up atleast 1 full screen (height & width) on devices */
import styled from "styled-components";

export default styled.div`
  & {
    min-height: 100vh;
    min-width: 100vw;
    padding: 2rem;
  }
`;
