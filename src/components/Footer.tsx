"use client"
import React, { useEffect } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
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
        <Grid container sm={4} p={2}>
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
            <TextField
              variant="filled"
              size="small"
              color="secondary"
              sx={{
                borderRadius: "5px",
                bgcolor: "white",
              }}
              label="Feed back"
            />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ ml: 2 }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Grid container sm={3} p={2}>
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
            <Grid container>
              <Mail style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                tafitasoanthonyo@gmail.com
              </Typography>
            </Grid>
            <Grid container>
              <GitHub style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                Thony0666
              </Typography>
            </Grid>
            <Grid container>
              <Phone style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                +261 33 20 586 65
              </Typography>
            </Grid>
            <Grid container>
              <Facebook style={{ color: "white" }} />
              <Typography className="testfont" color={"white"} pl={2}>
                Thony 666
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sm={5} p={2}>
          <Grid container>
            <Typography
              className="testfont"
              variant="h5"
              fontWeight={"bold"}
              color={"white"}
            >
              Directly contacte
            </Typography>
          </Grid>
          <Grid container justifyContent={'space-around'}>
            <Grid container direction={"column"} sm={5.5}>
              <Grid>
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
                  type="date"
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
            <Grid container sm={5.5}>
              <Grid>
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
              <Grid >
               <Button variant="contained" size="large" color="secondary">Send</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
