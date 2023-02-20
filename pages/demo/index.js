import { Box, Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const Demo = () => {
  return (
    <div className="demo">
      <Container>
        <Box >
          <Image layout="fill" src={"/demoAdmin.png"} className="image" />
        </Box>
      </Container>
    </div>
  );
};

export default Demo;
