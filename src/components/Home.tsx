"use client";
import React, { useState } from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import bannerImage2 from "../assets/images/banier.jpg";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import { DownloadForOffline } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
const Home: React.FC = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.screenY >= 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <>
      <Grid
        container
        minHeight={"100vh"}
        justifyContent={"center"}
        alignContent={"center"}
        bgcolor={"white"}
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
              position={"relative"}
              overflow={"hidden"}
              className={fix ? "fixed" : "not-fixed"}
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
                        color: purple[500],
                      },
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[500],
                      },
                    }}
                  >
                    Skills
                  </Button>
                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[500],
                      },
                    }}
                  >
                    About Me
                  </Button>

                  <Button
                    variant="text"
                    className="testfont"
                    sx={{
                      color: "white",
                      "&:hover": {
                        color: purple[500],
                      },
                    }}
                  >
                    Project
                  </Button>
                </Stack>
              </Grid>
            </Grid>
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
                    >
                      Donwload cv
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
