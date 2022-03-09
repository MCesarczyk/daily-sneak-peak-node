import { Divider, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./styled";

const DialogHeader = ({ child }) => (
  <Wrapper>
    <Typography variant="h5">
      {child?.name + ' ' + child?.surname}
    </Typography>
    <Divider />
  </Wrapper>
);

export default DialogHeader;