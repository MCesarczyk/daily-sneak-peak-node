import React from "react";
import { Divider } from "@mui/material";
import { ButtonsWrapper, StyledFooter } from "./styled";
import DialogPopup from "../../../../dialog/DialogPopup";
import Confirmation from "../../../../../components/Confirmation";
import { useDispatch, useSelector } from "react-redux";
import { deleteChildData, selectChildData } from "../../../childSlice";

const TileFooter = () => {
  const dispatch = useDispatch();
  const child = useSelector(selectChildData);

  return (
    <StyledFooter>
      <Divider />
      <ButtonsWrapper>
        <Confirmation
          buttonLabel="Delete child"
          popupContent={`You're about to delete ${child?.name} ${child?.surname}`}
          onActionCall={() => dispatch(deleteChildData(child?.id))}
        />
        <DialogPopup
          form='edit'
          buttonLabel="Edit child"
        />
      </ButtonsWrapper>
    </StyledFooter>
  )
};

export default TileFooter;