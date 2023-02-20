import { Fragment } from "react";
// import Hero from "../components/UI/Hero";
// import Services from "../components/UI/Services";
// import About from "../components/UI/About";
// import Portfolio from "../components/UI/Portfolio";
// import Testimonial from "../components/UI/Testimonial";
// import Contact from "../components/UI/Contact";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Box, Button, Container, Grid, Paper } from "@mui/material";
import { useTranslation } from "next-i18next";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
export async function getStaticProps({ locale }) {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about-us", "common"])),
      // Will be passed to the page component as props
    },
  };
}
export default function AboutUs(props) {
  const { t: translate } = useTranslation("about-us");
  const { t: translateCommon } = useTranslation("common");
  console.log(props);
  const valuesBlocks = [
    {
      title: "Daily Hard Work",
      desctiption: "We work hard everyday",
      text: "We keep our promises, clear deadlines & functionality",
    },
    {
      title: "Passion before money",
      desctiption: "Work first principle",
      text: "Absolutely free, design, only if you like it we continue working",
    },
    {
      title: "Guarantees",
      desctiption: "Project Assurance",
      text: "After the end of the project, you will have half of the money for 1 month as a deposit if something goes wrong.",
    },
  ];
  return (
    <Fragment className="about_us">
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
                  {translate("hero.header.title")}
                </h1>
                <p className="hero__left_description">
                  {translate("hero.header.description")}
                </p>
                <Button
                  style={{ width: 220, marginTop: "2rem" }}
                  size="large"
                  variant="contained"
                >
                  {translateCommon("button_more_services")}
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
            src={"/about-us-bg-1.jpg"}
            className={"home_img"}
          ></img>
        </Box>
      </section>
      <section className="value">
        <Container>
          <div className="header">
            {" "}
            <h2>{translate("value.header.title")}</h2>
            <p>{translate("value.header.description")}</p>
          </div>
          <div className="value_cards">
            {valuesBlocks.map((el) => (
              <div className="value_card">
                <AutoAwesomeIcon className="icon"></AutoAwesomeIcon>
                <h4>{el.title}</h4>
                <p>{el.desctiption}</p>
                <p className="value_card_p">{el.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Fragment>
  );
}
