import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import React from "react";
import ButtonDrawer from "@/components/Drawer";
import { useWindowScroll } from 'react-use';

function NavbarSm() {
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
        <Grid container xs={9} alignContent={"center"} alignItems={"flex-end"}>
          <Image src={logo} alt="logo" width={30} height={10} />
          <Typography
            fontSize={18}
            color={"white"}
            className="testfont"
            fontWeight={"bold"}
            ml={2}
          >
            Portfolio
          </Typography>
        </Grid>
        <Grid container xs={3} justifyContent={"flex-end"}>
          <ButtonDrawer />
        </Grid>
      </Grid>
    </>
  );
}

export default NavbarSm;
