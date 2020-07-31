import React, { ReactElement } from "react";
import styled, { keyframes } from "styled-components";
import PanelBase from "./PanelBase";
import PanelTitle from "./PanelTitle";
import PanelBackgrounds from "./PanelBackgrounds";
import PanelWrap from "./PanelWrap";

interface IProps {
  title?: string;
  centered?: boolean;
}

const TriplePanel: React.FC<IProps> = ({
  children,
  centered = false,
  title = "",
}): ReactElement => {
  return (
    <PanelWrap>
      <PanelTitle> {title} </PanelTitle>
      <PanelBackgrounds />
      <PanelBase centered={centered}>{children}</PanelBase>
    </PanelWrap>
  );
};

export default TriplePanel;
