"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import bannerImage2 from "../assets/images/banier.jpg";
import logo from "../assets/images/logo.png";
import cv from "../assets/cv/cvfr.png";
import Image from "next/image";
import { DownloadForOffline } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import Link from "next/link";
const Home: React.FC = (props: any) => {
  const click = props.click;
  const color = "red";
  const [isSticky, setIsSticky] = useState<any>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      }
      if (window.scrollY < 29) {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const style = {
    color: isSticky ? "black" : { color },
    fontWeight: "bold",
    textDecoration: "none",
    position: "relative",
    "&:hover": {
      color: "orange",
      fontSize: "1.2rem",
      "&::after": {
        content: '""',
        position: "absolute",
        width: "100%",
        height: "3px",
        backgroundColor: "orange",
        bottom: "-3px",
        left: 0,
      },
    },
  };
  return (
    <>
      <Grid
        container
        minHeight={"90vh"}
        justifyContent={"center"}
        alignContent={"center"}
        bgcolor={"white"}
        id="home"
        pt={6}
      >
        <Grid
          container
          width={"90%"}
          borderRadius={4}
          height={"90vh"}
          sx={{
            backgroundImage: `url(${bannerImage2.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "inherit",
            overflow: "hidden",
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <Grid
              container
              height={"8%"}
              overflow={"hidden"}
              style={{
                transition: "all 0.5s ease",
                justifyContent: "center",
                position: isSticky ? "fixed" : "relative",
                top: isSticky ? "0" : undefined,
                width: isSticky ? "90%" : "100%",
                background: isSticky ? "#0B1136" : "transparent",
                zIndex: isSticky ? 1000 : 1,
              }}
            >
              <Grid
                container
                sm={5}
                justifyContent={"center"}
                alignContent={"center"}
                alignItems={"flex-end"}
              >
                <Image src={logo} alt="logo" width={50} height={10} />
                <Typography
                  variant="h5"
                  color={"white"}
                  className="testfont"
                  fontWeight={"bold"}
                  ml={2}
                >
                  Portfolio
                </Typography>
              </Grid>
              <Grid container sm={7} justifyContent={"center"}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[200],
                      },
                    }}
                  >
                    <Link href={"#home"}>Home</Link>
                  </Button>
                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[200],
                      },
                    }}
                  >
                    <Link href={"#skills"}>Skills</Link>
                  </Button>
                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[200],
                      },
                    }}
                  >
                    <Link href={"#about"}>About Me</Link>
                  </Button>

                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[200],
                      },
                    }}
                  >
                    <Link href={"#project"}>Project</Link>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
            <Grid
              container
              height={"8%"}
              overflow={"hidden"}
              style={{
                transition: "all 0.5s ease",
                justifyContent: "center",
                position: isSticky ? "relative" : "fixed",
                top: isSticky ? "0" : undefined,
                background: isSticky ? "transparent" : "transparent",
                zIndex: isSticky ? 0 : 0,
                width: isSticky ? "90%" : "100%",
              }}
            ></Grid>
            <Grid
              container
              height={"92%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid container justifyContent={"center"} alignItems={"center"}>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <Typography
                    variant="body1"
                    className="testfont"
                    fontWeight={"bold"}
                    color={purple[500]}
                  >
                    Now you can watch the Talent
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <Typography
                    color={"white"}
                    variant="h3"
                    fontWeight={"bold"}
                    className="testfont"
                  >
                    I`M ANTHONYO <br />
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  mb={1}
                >
                  <Typography
                    color={"white"}
                    variant="h4"
                    fontWeight={"bold"}
                    className="testfont"
                  >
                    WEB DESIGNER
                  </Typography>
                </Grid>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  my={1}
                >
                  <Grid>
                    <Button
                      variant="contained"
                      color="secondary"
                      className="testfont"
                      endIcon={<DownloadForOffline />}
                      component="a"
                      href={cv.src}
                      download="cv_anthonyo.png"
                    >
                      Download CV
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
