import { Container, Typography } from "@mui/material";
import React from "react";
import "./Hero.css";
import Hamburger from "../Hamburger/Hamburger";
import { Box } from "@mui/system";

const Hero = () => {
  return (
    <Box id="hero">
      <Hamburger></Hamburger>
      <div
        style={{
          backgroundColor: "#155263",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        className="hero-section"
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              textAlign: "start",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "white" }}
              className="poppins-400"
            >
              Hello, I'm Suplob Roy
            </Typography>
            <span className="heading-wrapper">
              <p className="heading-inside">A Web Developer</p>
            </span>
            <div className="button-regular-hero" style={{ marginTop: "15px" }}>
              <div className="button-regular-text">Hire Me</div>
            </div>
          </div>
        </Container>
      </div>
      <div className="pointy-bottom"></div>
    </Box>
  );
};

export default Hero;
