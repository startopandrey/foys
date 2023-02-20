import React from "react";
// import "../../styles/hero.scss";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// export async function getStaticProps({ locale }) {
//   console.log(locale);
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }

import { useTranslation } from "next-i18next";
const Hero = (props) => {
  // console.log(props);
  const { t: translate } = useTranslation("home");

  return (
    <section className={"hero_section"}>
      {" "}
      <Container>
        <Grid
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
          container
          spacing={2}
        >
          <Grid sx={{ height: "100%" }} item lg={6}>
            <Box className="hero__left">
              <h1 className="hero__left_title">
                <span>{translate("home.hero.title.Unlock")}</span>{" "}
                {translate("home.hero.title.main")}
              </h1>
              <p className="hero__left_description">
                {translate("home.hero.description")}
              </p>
              <Button
                style={{ width: 220, marginTop: "2rem" }}
                size="large"
                variant="contained"
              >
                {translate("button_more_services")}
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6}></Grid>
        </Grid>{" "}
      </Container>
      <Box className="hero__right">
        <img
          layout="fill"
          // width={1000}
          // height={1000}
          src={"/home_1.jpg"}
          className={"home_img"}
        ></img>
      </Box>
    </section>
  );
};
// export async function getStaticProps({ locale }) {
//   console.log(locale);
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["home"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
export default Hero;
