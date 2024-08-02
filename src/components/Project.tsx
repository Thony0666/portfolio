"use client"
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container justifyContent={"center"} bgcolor={"white"} data-aos="fade-up">
        <Typography
          color={purple[500]}
          variant="h4"
          fontWeight={"bold"}
          className="testfont"
        >
          Project
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} pt={1.5} bgcolor={"white"} data-aos="fade-up">
        <Stack direction={"row"} justifyContent={"center"}>
          <Link href={"https://bibliotheque.tafomihaavo.mg/"} target="_blank">
            {" "}
            <Typography
              color={purple[500]}
              variant="body1"
              fontWeight={"bold"}
              className="testfont"
            >
              Bibliothèque Numérique
            </Typography>
          </Link>
        </Stack>
      </Grid>

      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Grid container px={16} data-aos="fade-up">
            <Typography variant="body1" className="testfont">
              The{" "}
              <Link
                href={"https://bibliotheque.tafomihaavo.mg/"}
                target="_blank"
              >
                <span style={{ fontWeight: "bold" }}>
                  ``Bibliothèque Numérique``
                </span>
              </Link>
              is a comprehensive digital library platform designed to give users
              easy access to a vast array of books and resources. This project
              aims to modernize traditional library functions by offering an
              array of features, including a robust book search, a seamless
              borrowing system, and efficient user management. It serves as a
              scalable and user-friendly solution for digital libraries,
              enhancing the accessibility and convenience of library services.
            </Typography>
          </Grid>
          <Grid container mt={3} justifyContent={"center"}>
            <Grid container sm={5} justifyContent={"flex-start"}>
              <Grid container data-aos="fade-up">
                <Typography
                  variant="h6"
                  className="testfont"
                  fontWeight={"bold"}
                >
                  Technologies Used
                </Typography>
              </Grid>
              <Grid container data-aos="fade-up">
                <Typography variant="body2" paragraph className="testfont">
                  <span style={{ fontWeight: "bold" }}>Frontend:</span>{" "}
                  React.js, Next.js, MUI (Material-UI)
                  <br />
                  <span style={{ fontWeight: "bold" }}>Backend:</span> Java,
                  PostgreSQL
                  <br />
                  <span style={{ fontWeight: "bold" }}>Other Tools:</span>{" "}
                  React-Admin, Formik
                </Typography>
              </Grid>
              <Grid container data-aos="fade-up">
                <Typography
                  variant="h6"
                  className="testfont"
                  fontWeight={"bold"}
                >
                  Challenges and Solutions
                </Typography>
              </Grid>
              <Grid container pr={2} data-aos="fade-up">
                <Typography variant="body2" paragraph className="testfont">
                  During the development of the ``Bibliothèque Numérique,`` I
                  overcame challenges like implementing user authentication and
                  efficient database management using React-Admin, Formik, and
                  PostgreSQL. Effective collaboration and version control were
                  ensured with Git.
                </Typography>
              </Grid>
            </Grid>
            <Grid container sm={5}>
              <Grid container data-aos="fade-up">
                <Typography
                  variant="h6"
                  className="testfont"
                  fontWeight={"bold"}
                >
                  Key Featuresd
                </Typography>
              </Grid>
              <Grid container data-aos="fade-up">
                <Typography variant="body2" paragraph className="testfont">
                  - User Authentication and Management <br /> - Book Catalog
                  <br />
                  - Borrowing System
                  <br />- Admin Dashboard
                </Typography>
              </Grid>
              <Grid container data-aos="fade-up">
                <Typography
                  variant="h6"
                  className="testfont"
                  fontWeight={"bold"}
                >
                  Project Impact and Future Plans
                </Typography>
              </Grid>
              <Grid container pr={2} data-aos="fade-up">
                <Typography variant="body2" paragraph className="testfont">
                  The ``Bibliothèque Numérique`` has provided a scalable and
                  user-friendly solution for digital libraries. Moving forward,
                  I plan to add more features, such as advanced search filters,
                  user reviews, and integration with external APIs for expanded
                  book databases.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Project;
