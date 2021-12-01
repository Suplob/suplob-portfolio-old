import { Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#155263",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "start" }}>
          <Typography
            variant="h3"
            sx={{ color: "white" }}
            className="poppins-400"
          >
            Hello, I'm Suplob Roy
          </Typography>
          <Typography
            variant="h4"
            sx={{ color: "#ff6f3c", pt: 2 }}
            className="poppins-400"
          >
            A Web Developer
          </Typography>
          <div className="button-regular-hero" style={{ marginTop: "15px" }}>
            <div className="button-regular-text">Resume</div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#155263",
          marginTop: "-1px",
          height: "40vh",
          clipPath: "polygon(51% 100%, 0 0, 100% 0)",
        }}
      ></div>
    </>
  );
};

export default Hero;
