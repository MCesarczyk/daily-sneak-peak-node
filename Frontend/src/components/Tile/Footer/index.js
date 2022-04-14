import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../views/dialog/DialogPopup";
import Confirmation from "../../Confirmation";

const TileFooter = ({ data }) => (
  <StyledFooter>
    <Divider />
    <ButtonsWrapper>
      <Confirmation
        buttonLabel={data?.buttonLabel}
        popupContent={data?.onDeleteWarning}
        onActionCall={data?.onActionCall}
      />
      <DialogPopup
        form={data?.popupFormType}
      />
    </ButtonsWrapper>
  </StyledFooter>
);

export default TileFooter;