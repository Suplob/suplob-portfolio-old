import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("fakedata.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography variant="h3" className="poppins-400">
        My Latest <span style={{ color: "#FF6F3C" }}>Projects</span>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project}></ProjectCard>
          ))}
        </Grid>
      </Typography>
    </Container>
  );
};

export default Projects;
