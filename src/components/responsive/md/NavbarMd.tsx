import { Button, Grid, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useWindowScroll } from 'react-use';

function NavbarMd() {
  const { y } = useWindowScroll();
  const isSticky = y > 30;
  return (
    <>
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
    </>
  );
}

export default NavbarMd;
