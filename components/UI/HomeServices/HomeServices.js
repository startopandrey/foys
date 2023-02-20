import { Box, Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useTranslation } from "next-i18next";
const HomeServices = () => {
  const { t: translate } = useTranslation("home");
  return (
    <section className="home_services">
      <Container>
        <Grid
          //   justifyContent="center"
          //   alignItems="center"
          sx={{ height: "100%", mb: 5 }}
          container
          spacing={8}
        >
          <Grid sx={{ height: "100%" }} item lg={6}>
            <Box className="services__left">
              <img src={"/graph.png"}></img>
            </Box>
          </Grid>
          <Grid item lg={6}>
            {" "}
            <Box className="header">
              <h3>{translate("home.services.left.header1.title")}</h3>
              <h1>{translate("home.services.left.header1.text")}</h1>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.left.header2.title")}</h2>
              <p>{translate("home.services.left.header2.text")}</p>
            </Box>
            <Button
              style={{ width: 180, marginTop: "1rem" }}
              size="large"
              variant="outlined"
            >
              More Services
            </Button>
          </Grid>
        </Grid>
        <Grid
          //   justifyContent="center"
          //   alignItems="center"
          sx={{ height: "100%" }}
          container
          spacing={8}
        >
          <Grid sx={{ height: "100%" }} item lg={6}>
            {" "}
            <Box className="header">
              <h3>{translate("home.services.right.header1.title")}</h3>
              <h1>{translate("home.services.right.header1.text")}</h1>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.right.header2.title")}</h2>
              <p>{translate("home.services.right.header2.text")}</p>
            </Box>
            <Box className="header_bottom">
              <h2>{translate("home.services.right.header3.title")}</h2>
              <p>{translate("home.services.right.header3.text")}</p>
            </Box>
            <Button
              style={{ width: 220, marginTop: "1rem" }}
              size="large"
              variant="outlined"
            >
              {translate("button_more_services")}
            </Button>
          </Grid>
          <Grid item lg={6}>
            {" "}
            <Box className="services__left">
              <img src={"/home_2.png"}></img>
            </Box>
          </Grid>{" "}
        </Grid>
      </Container>
    </section>
  );
};

export default HomeServices;
