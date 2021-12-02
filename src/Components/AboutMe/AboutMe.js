import { Container, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import img from "../../utilities/img/me.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <Container className="about-me-section-wrapper">
        <Typography variant="h2" sx={{ mb: 4 }} data-aos="fade-up">
          About <span style={{ color: "#FF6F3C" }}>Me</span>
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          id="about-me"
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              py: 5,
              margin: "0 auto",
            }}
            data-aos="fade-right"
          >
            <img src={img} alt="" className="hero-img" />
            <div>
              <Typography variant="h2" className="poppins-400">
                Suplob Roy
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#5f6769", textAlign: "start", mt: 2 }}
              >
                I'm a tech enthusiast focusing to learn amazing technologies and
                develop unique products and solve problems and bugs. Designing
                and programming have been my passion since the day I started
                working with computers. I find myself enjoying coding since the
                day I started doing it. I enjoy creating beautifully designed,
                intuitive and functional websites.
              </Typography>
              <div className="socials">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/suplob-roy-b790451bb/"
                  className="linkedin social"
                  target="blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/Suplob"
                  className="github social"
                  target="blank"
                >
                  <i class="fab fa-github"></i>
                </a>
                <Tooltip title="parbaroy30@gmail.com" placement="top">
                  <a
                    style={{ textDecoration: "none" }}
                    href="mailto:parbaroy30@gmail.com"
                    className="mail social"
                  >
                    <i class="fas fa-envelope-open"></i>
                  </a>
                </Tooltip>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <div class="skill-bars">
              <div class="bar">
                <div class="info">
                  <span>HTML</span>
                </div>
                <div class="progress-line html">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>CSS</span>
                </div>
                <div class="progress-line css">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>JavaScript</span>
                </div>
                <div class="progress-line jquery">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>Python</span>
                </div>
                <div class="progress-line python">
                  <span></span>
                </div>
              </div>
              <div class="bar">
                <div class="info">
                  <span>React JS</span>
                </div>
                <div class="progress-line mysql">
                  <span></span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutMe;
