import React, { ReactElement, Fragment } from "react";
import ProjectsBelow from "../components/ProjectsBelow";
import LandingBox from "../components/LandingBox";
import Grid from "../components/Grid";
import Project from "../components/Project";
import ScrollDown from "../helpers/ScrollDown";
import ReactPlayerStyled from "../components/ReactPlayerStyled";
import CreativeBot from "../components/CreativeBot";

const Home = (): ReactElement => {
  return (
    <Fragment>
      <LandingBox innerText="CreativeBuilds.io">
        <ProjectsBelow innerText="Projects Below 👇" onClick={ScrollDown} />
      </LandingBox>
      <Grid id="projects">
        <Project centered title="Youtube 📺 CreativeBuilds">
          <ReactPlayerStyled url="https://www.youtube.com/watch?v=EocZzXb_7SY" />
        </Project>
        <Project title="CreativeBot">
          <CreativeBot />
        </Project>
      </Grid>
    </Fragment>
  );
};

export default Home;
