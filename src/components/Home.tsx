"use client";
import React, { useEffect, useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import bannerImage2 from "../assets/images/banier.jpg";

import cv from "../assets/cv/cvfr.png";
import { DownloadForOffline } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import NavbarMd from "./responsive/md/NavbarMd";
import NavbarSm from "./responsive/sm/NavbarSm";
import '../css/index.css'

const Home: React.FC = () => {
  const [isSticky, setIsSticky] = useState<any>(false);
  const [largeurEcran, setLargeurEcran] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setLargeurEcran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
            {largeurEcran < 900.99 && <NavbarSm />}
            {largeurEcran > 900.99 && <NavbarMd />}
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
                    variant='h4'
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
