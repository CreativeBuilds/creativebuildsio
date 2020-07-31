import React, { ReactElement, ComponentProps } from "react";
import styled from "styled-components";
import TriplePanel from "./TriplePanel";

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps {
  title?: string;
  centered?: boolean;
}

const Project: React.FC<IProps> = ({
  title = null,
  centered = false,
  children,
}): ReactElement => {
  return (
    <ProjectWrapper>
      <TriplePanel centered={centered} title={title}>
        {children}
      </TriplePanel>
    </ProjectWrapper>
  );
};

export default Project;
