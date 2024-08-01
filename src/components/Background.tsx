import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import bannerImage2 from "../assets/images/bg.jpg";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { purple } from "@mui/material/colors";
import {
  CheckCircleOutline,
  MenuBook,
  PlaylistAddCheck,
  Start,
  Translate,
} from "@mui/icons-material";

const BackGround: React.FC = () => {
  return (
    <>
      <Grid
        container
        minHeight={"90vh"}
        justifyContent={"center"}
        bgcolor={"white"}
      >
        <Grid
          container
          width={"90%"}
          mt={2}
          borderRadius={4}
          height={"60vh"}
          sx={{
            backgroundImage: `url(${bannerImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            // overflow: "hidden",
          }}
        >
          <Grid
            container
            borderRadius={4}
            sx={{
              backdropFilter: "blur(3px)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <Grid
              container
              height={"50%"}
              position={"relative"}
              overflow={"hidden"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Typography
                color={"white"}
                variant="h4"
                fontWeight={"bold"}
                className="testfont"
              >
                About Me
              </Typography>
              <Grid container justifyContent={"center"}>
                <Typography
                  color={"white"}
                  variant="body1"
                  className="testfont"
                >
                  Étudiant dévoué en informatique avec une passion pour la
                  technologie et l’innovation.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              height={"92%"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Grid
                minHeight={350}
                container
                sm={3.4}
                justifyContent={"center"}
                bgcolor={"white"}
                borderRadius={3}
                boxShadow={4}
                p={1}
              >
                <Grid container justifyContent={"center"}>
                  <CheckCircleOutline
                    fontSize="large"
                    style={{ color: purple[500] }}
                  />
                </Grid>
                <Typography
                  variant="h5"
                  color={purple[500]}
                  fontWeight={"bold"}
                  className="testfont"
                >
                  Baccalaureate Series D
                </Typography>
                <Grid container p={2}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    className="testfont"
                  >
                    . Year Obtained :
                    <span style={{ fontWeight: "lighter" }}>2021</span>
                  </Typography>
                </Grid>
                <Grid container px={2}>
                  <Typography
                    variant="body1"
                    // fontWeight={"bold"}
                    className="testfont"
                  >
                    This qualification emphasized natural and physical sciences,
                    offering a strong foundation in mathematics, physics,
                    chemistry, and biology. It built analytical and scientific
                    skills, setting the stage for advanced studies in computer
                    science.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sm={3.4}
                minHeight={350}
                justifyContent={"center"}
                bgcolor={"white"}
                borderRadius={3}
                boxShadow={4}
                p={1}
              >
                <Grid container justifyContent={"center"}>
                  <MenuBook fontSize="large" style={{ color: purple[500] }} />
                </Grid>
                <Typography
                  variant="h5"
                  color={purple[500]}
                  fontWeight={"bold"}
                  className="testfont"
                >
                  Current Studie
                </Typography>
                <Grid container p={2}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    className="testfont"
                  >
                    Currently in the third year of a Bachelor’s in Computer
                    Science.
                  </Typography>
                </Grid>
                <Grid container px={2}>
                  <Typography
                    variant="body1"
                    // fontWeight={"bold"}
                    className="testfont"
                  >
                    As a third-year Computer Science student, I’m enhancing my
                    skills in programming, software development, and system
                    design. My coursework includes algorithms, data structures,
                    and database management, preparing me for a future in
                    software development and technology.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sm={3.4}
                minHeight={350}
                justifyContent={"center"}
                bgcolor={"white"}
                borderRadius={3}
                boxShadow={4}
                p={1}
              >
                <Grid container justifyContent={"center"}>
                  <Translate fontSize="large" style={{ color: purple[500] }} />
                </Grid>
                <Typography
                  variant="h5"
                  color={purple[500]}
                  fontWeight={"bold"}
                  className="testfont"
                >
                  BLanguage Skills
                </Typography>
                <Grid container p={2}>
                  <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    className="testfont"
                  >
                    . Malagasy :
                    <span style={{ fontWeight: "lighter" }}>
                      Fluent in both written and spoken forms, enabling
                      effective communication in Malagasy-speaking regions.
                    </span>
                    <br />. French :
                    <span style={{ fontWeight: "lighter" }}>
                      Proficient at 45%, able to participate in conversations
                      and written communications.
                    </span>{" "}
                    <br />. English :
                    <span style={{ fontWeight: "lighter" }}>
                      Basic proficiency at 10%, with a focus on improving skills
                      for global communication.
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BackGround;
