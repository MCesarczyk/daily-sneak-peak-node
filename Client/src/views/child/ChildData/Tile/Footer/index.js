import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteChildData, selectChildData } from "../../../childSlice";

const TileFooter = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);

  return (
    <StyledFooter>
      <Divider />
      <ButtonsWrapper>
      </ButtonsWrapper>
    </StyledFooter>
  )
};

export default TileFooter;