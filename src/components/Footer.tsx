"use client";
import React, { useEffect } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Facebook, GitHub, Mail, Phone } from "@mui/icons-material";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Grid container justifyContent={"center"} data-aos="fade-up">
      <Grid
        container
        width={"90%"}
        bgcolor={"#0B1136"}
        minHeight={100}
        borderRadius={"10px 10px 0 0"}
        p={2}
      >
        <Grid container sm={7} md={4} p={2}>
          <Grid container>
            <Typography
              className="testfont"
              variant="h5"
              fontWeight={"bold"}
              color={"white"}
            >
              About Me
            </Typography>
          </Grid>
          <Grid container>
            <Typography className="testfont" variant="body1" color={"white"}>
              . I am a web developer specializing in React.js and Next.js with a
              passion for creating intuitive and responsive user interfaces.
              With experience in various frameworks like MUI, Bootstrap, and
              Formik, I strive to deliver innovative and effective web
              solutions.
            </Typography>
          </Grid>
          <Grid container mt={3}>
            <Grid  xs={8}>
              <TextField
                variant="filled"
                size="small"
                color="secondary"
                fullWidth
                sx={{
                  borderRadius: "5px",
                  bgcolor: "white",
                }}
                label="Feed back"
              />
            </Grid>
            <Grid  xs={4} pl={1}>
              {" "}
              <Button
                variant="contained"
                color="secondary"
                size="large"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sm={5} md={4.5} p={2}>
          <Grid container>
            <Grid container>
              <Typography
                className="testfont"
                variant="h5"
                fontWeight={"bold"}
                color={"white"}
              >
                Social media
              </Typography>
            </Grid>
            <Grid container mt={2}>
              <Mail style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                tafitasoanthonyo@gmail.com
              </Typography>
            </Grid>
            <Grid container mt={2}>
              <GitHub style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                Thony0666
              </Typography>
            </Grid>
            <Grid container mt={2}>
              <Phone style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                +261 33 20 586 65
              </Typography>
            </Grid>
            <Grid container mt={2}>
              <Facebook style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                Thony 666
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sm={12} md={3.5} py={2}>
          <Grid container>
            <Typography
              className="testfont"
              variant="h5"
              fontWeight={"bold"}
              color={"white"}
            >
             Appointment
            </Typography>
          </Grid>
          <Grid container justifyContent={"space-around"}>
            <Grid container direction={"column"} >
              <Grid  mt={2}>
                <TextField
                  fullWidth
                  color="secondary"
                  size="small"
                  sx={{
                    borderRadius: "5px",
                    bgcolor: "white",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: purple[500],
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                  }}
                  label="Name"
                />
              </Grid>
              <Grid mt={2}>
                <TextField
                  color="secondary"
                  size="small"
                  fullWidth
                  sx={{
                    borderRadius: "5px",
                    bgcolor: "white",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: purple[500],
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                  }}
                  label="Email"
                />
              </Grid>
              <Grid mt={2}>
                <TextField
                  color="secondary"
                  size="small"
                  fullWidth
                  type="datetime-local"
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    borderRadius: "5px",
                    bgcolor: "white",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: purple[500],
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: purple[500],
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                  }}
                  label="Date"
                />
              </Grid>
            </Grid>
            <Grid container xs={12}  mt={2} >
              <Grid container>
                <TextField
                  fullWidth
                  color="secondary"
                  size="small"
                  multiline
                  rows={3.5}
                  sx={{
                    borderRadius: "5px",
                    bgcolor: "white",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                    "& .MuiFilledInput-root": {
                      backgroundColor: "white",
                    },
                    "& .MuiInputLabel-root": {
                      color: "black",
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: purple[500],
                      fontFamily: "monospace",
                      bgcolor: "white",
                      px: 1.2,
                      borderRadius: 1,
                      ml: -1,
                      fontWeight: "bold",
                    },
                  }}
                  label="Description"
                />
              </Grid>
              <Grid container px={2} pt={2} justifyContent={'flex-end'}>
                <Button variant="contained" size="large" color="secondary">
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
