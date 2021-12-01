import { Grid, Typography, Modal, Fade, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Card.css";
import CloseIcon from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const style = {
  position: "absolute",
  height: "85vh",
  width: "90vw",
  background: "#fff",
  borderRadius: "20px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProjectCard = (props) => {
  const {
    codeClient,
    codeServer,
    img1,
    img2,
    img3,
    liveSite,
    name,
    des1,
    des2,
    des3,
    des4,
    des5,
    technologies,
  } = props.project;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={6} lg={4} sx={{ my: 5, textAlign: "start" }}>
        <div class="project-wrapper">
          <div class="project-card">
            <img src={img1} alt="" />
            <div class="info">
              <Typography
                variant="h4"
                className="poppins-400"
                sx={{ color: "white" }}
              >
                {name}
              </Typography>
              <Button onClick={handleOpen}>Learn More</Button>
            </div>
          </div>
        </div>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <CloseIcon
              style={{
                position: "absolute",
                top: "40px",
                right: "40px",
                fontSize: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleClose();
              }}
            />
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={12} lg={6}>
                <Typography variant="h3" className="poppins-400" sx={{ mb: 5 }}>
                  {name}
                </Typography>
                <>
                  <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={img1} alt="" style={{ width: "100%" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img2} alt="" style={{ width: "100%" }} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={img3} alt="" style={{ width: "100%" }} />
                    </SwiperSlide>
                  </Swiper>
                  <Box sx={{ mt: 3, display: "flex" }}>
                    <a href={liveSite} target="blank">
                      <div className="button-regular">
                        <div
                          className="button-regular-text"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <ArrowForwardIcon sx={{ mx: 1 }} /> Live Site
                        </div>
                      </div>
                    </a>
                    <a href={codeClient} target="blank">
                      <div
                        className="button-regular"
                        style={{ width: "170px", margin: "0 20px" }}
                      >
                        <div
                          className="button-regular-text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <CodeIcon sx={{ mx: 1 }} /> Client Code
                        </div>
                      </div>
                    </a>
                    <a href={codeServer} target="blank">
                      <div
                        className="button-regular"
                        style={{ width: "170px", margin: "0 20px" }}
                      >
                        <div
                          className="button-regular-text"
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <StorageIcon sx={{ mx: 1 }} /> Server Code
                        </div>
                      </div>
                    </a>
                  </Box>
                </>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ul>
                  <li className="poppins-400">{des1}</li>
                  <li className="poppins-400">{des2}</li>
                  <li className="poppins-400">{des3}</li>
                  <li className="poppins-400">{des4}</li>
                  <li className="poppins-400">{des5}</li>
                </ul>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ mt: 10, display: "flex", alignItems: "center" }}
                    className="poppins-400"
                  >
                    Technologies used to make this website{" "}
                    <ArrowForwardIcon sx={{ ml: 1 }} />
                  </Typography>
                  <Typography
                    className="poppins-400"
                    variant="body1"
                    sx={{ mt: 3 }}
                  >
                    {technologies}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectCard;
