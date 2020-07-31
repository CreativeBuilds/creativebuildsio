import styled, { css } from "styled-components";

interface IProps {
  centered?: boolean;
}

export default styled.div`
  height: 100%;
  width: 100%;
  background: var(--dark-brighter);
  border-radius: 1rem;
  position: absolute;

  ${(props: IProps) =>
    props.centered
      ? `
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ""}
`;
