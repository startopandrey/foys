import { Box, Button, Grid, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "next-i18next";

const HomeContact = () => {
  const { t: translate } = useTranslation("home");
  return (
    <section className="home_contact">
      <Box className="video_container">
        <Container></Container>
      </Box>
      <Box className="home_contact_container">
        <Container>
          {" "}
          <Grid sx={{ display: "flex" }} container spacing={10}>
            <Grid item lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                spacing={4}
              >
                <Box className="header">
                  <h3>{translate("home.contact.header.title")}</h3>
                  <h1>{translate("home.contact.header.description")}</h1>
                </Box>

                <Grid container spacing={2}>
                  <Grid item lg="6">
                    <TextField
                      id="outlined-basic"
                      label="Your Name*"
                      variant="outlined"
                      sx={{ background: "#fff", width: "100%" }}
                    />
                  </Grid>
                  <Grid item lg="6">
                    <TextField
                      sx={{ background: "#fff", width: "100%" }}
                      id="outlined-basic"
                      label="Your Company*"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg="12">
                    <TextField
                      sx={{ background: "#fff", width: "100%" }}
                      id="outlined-basic"
                      label="Your Email*"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item lg="12">
                    {" "}
                    <TextField
                      sx={{ background: "#fff" }}
                      fullWidth
                      id="outlined-multiline-flexible"
                      label="Your Message*"
                      multiline
                      // maxRows={8}
                      rows="6"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Button sx={{width: 150, mt: 2}} variant="outlined" size="large">
                Submit
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Box className="home_contact_address">
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Address :</h3>
                  <h3 className={"address_item_content"}>
                    Vorderthiersee 75, 6335, Austia
                  </h3>
                </Box>
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Phone :</h3>
                  <h3 className={"address_item_content"}>+43 676 4312048</h3>
                </Box>
                <Box className={"address_item"}>
                  <h3 className={"address_item_title"}>Email :</h3>
                  <h3 className={"address_item_content"}>
                    foyb.development@gmail.com
                  </h3>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default HomeContact;
