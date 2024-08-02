"use client";
import { Button, Grid, Rating, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import React, { useEffect } from "react";
import react from "../assets/images/reactjs.png";
import next from "../assets/images/nextjs.png";
import node from "../assets/images/nodejs.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/JavaScript.png";
import mui from "../assets/images/mui.png";
import ra from "../assets/images/ra.png";
import bootstrap from "../assets/images/bootstrap.png";
import java from "../assets/images/java.png";
import psql from "../assets/images/postgres.jpg";
import python from "../assets/images/python.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const boxStyle = {
    position: "relative",
    boxShadow: 10,
    borderRadius: 3,
    overflow: "hidden",
    "&:hover .overlay": {
      opacity: 1,
    },
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // semi-transparent background
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.5s",
  };
  return (
    <>
      <Grid container justifyContent={"center"} bgcolor={"white"}>
        <Typography
          color={purple[500]}
          variant="h4"
          fontWeight={"bold"}
          className="testfont"
        >
          My key technical skills
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} pt={1.5} bgcolor={"white"}>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button
            variant="text"
            className="testfont"
            sx={{
              color: purple[500],
              "&:hover": {
                color: "black",
              },
            }}
          >
            All
          </Button>
          <Button
            variant="text"
            className="testfont"
            sx={{
              color: purple[400],
              "&:hover": {
                color: "black",
              },
            }}
          >
            Speciality
          </Button>
          <Button
            variant="text"
            className="testfont"
            sx={{
              color: purple[400],
              "&:hover": {
                color: "black",
              },
            }}
          >
            Other
          </Button>
        </Stack>
      </Grid>
      <Grid container justifyContent={"center"} bgcolor={"white"}>
        <Grid container width={"90%"} justifyContent={"space-around"} my={2}>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={react} alt="react js" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  React js
                </Typography>
              </Grid>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={next} alt="react js" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Next js
                </Typography>
              </Grid>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={html} alt="react js" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  HTML
                </Typography>
              </Grid>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={css} alt="css" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  CSS
                </Typography>
              </Grid>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
        </Grid>
        <Grid container width={"90%"} justifyContent={"space-around"} my={2}>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={mui} alt="react js" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Material UI
                </Typography>
              </Grid>
              <Rating name="read-only" value={5} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={bootstrap} alt="bootstrap" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Bootstrap
                </Typography>
              </Grid>
              <Rating name="read-only" value={3} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={ra} alt="react admin" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  React Admin
                </Typography>
              </Grid>
              <Rating name="read-only" value={4} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={node} alt="node" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Node js
                </Typography>
              </Grid>
              <Rating name="read-only" value={2} readOnly />
            </Grid>
          </Grid>
        </Grid>{" "}
        <Grid container width={"90%"} justifyContent={"space-around"} my={2}>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={js} alt="javascript" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Javascript
                </Typography>
              </Grid>
              <Rating name="read-only" value={4} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={java} alt="java" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  java
                </Typography>
              </Grid>
              <Rating name="read-only" value={3} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={psql} alt="psql" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  React js
                </Typography>
              </Grid>
              <Rating name="read-only" value={4} readOnly />
            </Grid>
          </Grid>
          <Grid container justifyContent={"center"} sm={2.5} data-aos="fade-up">
            <Grid
              boxShadow={10}
              borderRadius={3}
              overflow={"hidden"}
              sx={boxStyle}
            >
              <Image src={python} alt="python" width={300} height={300} />
              <Grid className="overlay" sx={overlayStyle}>
                <Typography
                  variant="h4"
                  color={"white"}
                  className="hover"
                  fontWeight={"bold"}
                >
                  Phyton
                </Typography>
              </Grid>
              <Rating name="read-only" value={1.5} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Skills;
