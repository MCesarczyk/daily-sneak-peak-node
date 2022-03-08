import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";
import { useDispatch, useSelector } from "react-redux";
import { deleteChildData, selectChildData } from "../../../childSlice";

const TileFooter = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);

  return (
    <StyledFooter>
      <Divider />
      <ButtonsWrapper>
        <DialogPopup
          form='edit'
          buttonLabel="Edit child"
        />
      </ButtonsWrapper>
    </StyledFooter>
  )
};

export default TileFooter;