import React from "react";
import { Button, Typography } from "@mui/material";
import { Space } from "../../../../components/Space";
import { useSelector } from "react-redux";
import { selectDialogType } from "../../dialogSlice";

const DialogPopupFooter = ({ onFinish }) => {
  const type = useSelector(selectDialogType);

  return(
  <Space justify="space-between" >
    <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
      *Enter all necessary data and click 'save'.
    </Typography>
    <div>
      <Button onClick={onFinish} >
        Save
      </Button>
    </div>
  </Space>
)};

export default DialogPopupFooter;