"use client";
import { Button, Grid, Rating, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import "../css/index.css";

function Skills() {
  const [show, setShow] = useState<any>("all");
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
      <Grid
        container
        justifyContent={"center"}
        bgcolor={"white"}
        id="skills"
        pt={8}
        >
        <Typography
          color={purple[500]}
          textAlign={'center'}
          variant="h4"
          fontWeight={"bold"}
          className="testfont"
          data-aos="fade-up"
        >
          My key technical skills
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} pt={1.5} bgcolor={"white"}>
        <Stack direction={"row"} justifyContent={"center"} data-aos="fade-up">
          <Button
            variant="text"
            className="testfont"
            sx={{
              "&:hover": {
                color: "black",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "3px",
              },
              color: show === 'all' ? purple[500] : 'black' 
            }}
            
            onClick={() => {
              setShow("all");
            }}
          >
            All
          </Button>
          <Button
            variant="text"
            className="testfont"
            sx={{
              "&:hover": {
                color: "black",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "3px",
              },
              color: show === 'spec' ? purple[500] : 'black' 
            }}
            onClick={() => {
              setShow("spec");
            }}
          >
            Speciality
          </Button>
          <Button
            variant="text"
            className="testfont"
            sx={{
              "&:hover": {
                color: "black",
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "3px",
              },
              color: show === 'other' ? purple[500] : 'black' 
            }}
            onClick={() => {
              setShow("other");
            }}
          >
            Other
          </Button>
        </Stack>
      </Grid>
      <Grid container justifyContent={"center"} bgcolor={"white"}>
        {(show === "all" || show === "spec") && (
          <Grid container width={"90%"} justifyContent={"space-around"} >
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={react} alt="react js" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    React js
                  </Typography>
                </Grid>
                <Rating name="read-only" value={5} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={next} alt="react js" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Next js
                  </Typography>
                </Grid>
                <Rating name="read-only" value={5} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={html} alt="react js" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    HTML
                  </Typography>
                </Grid>
                <Rating name="read-only" value={5} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={css} alt="css" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    CSS
                  </Typography>
                </Grid>
                <Rating name="read-only" value={5} readOnly />
              </Grid>
            </Grid>
          </Grid>
        )}
        {(show === "all" || show === "spec") && (
          <Grid container width={"90%"} justifyContent={"space-around"} >
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={mui} alt="react js" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Material UI
                  </Typography>
                </Grid>
                <Rating name="read-only" value={5} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image
                  src={bootstrap}
                  alt="bootstrap"
                  width={300}
                  height={300}
                />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Bootstrap
                  </Typography>
                </Grid>
                <Rating name="read-only" value={3} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={ra} alt="react admin" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    React Admin
                  </Typography>
                </Grid>
                <Rating name="read-only" value={4} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={js} alt="js" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Javascript
                  </Typography>
                </Grid>
                <Rating name="read-only" value={4} readOnly />
              </Grid>
            </Grid>
          </Grid>
        )}
        {(show === "all" || show === "other") && (
          <Grid
            container
            width={"90%"}
            justifyContent={"space-around"}
            sx={{ display: show === "spec" ? "none" : "flex" }}
          >
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={node} alt="node" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Node js
                  </Typography>
                </Grid>
                <Rating name="read-only" value={2} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={java} alt="java" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    java
                  </Typography>
                </Grid>
                <Rating name="read-only" value={3} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={psql} alt="psql" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    PostgresSQL
                  </Typography>
                </Grid>
                <Rating name="read-only" value={4} readOnly />
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sm={5.5}
              md={2.5}
              data-aos="fade-up"
            >
              <Grid
                boxShadow={10}
                borderRadius={3}
                overflow={"hidden"}
                sx={boxStyle}
                my={2}
              >
                <Image src={python} alt="python" width={300} height={300} />
                <Grid className="overlay" sx={overlayStyle}>
                  <Typography
                    variant="h4"
                    color={"white"}
                    className="testfont"
                    fontWeight={"bold"}
                  >
                    Phyton
                  </Typography>
                </Grid>
                <Rating name="read-only" value={1.5} readOnly />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Skills;
