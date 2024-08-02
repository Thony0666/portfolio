import { Button, Grid, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import logo from "../../../assets/images/logo.png";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ButtonDrawer from "@/components/Drawer";

function NavbarSm() {
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
        <Grid container xs={3}  justifyContent={'flex-end'}>
          <ButtonDrawer />
        </Grid>
      </Grid>
    </>
  );
}

export default NavbarSm;
