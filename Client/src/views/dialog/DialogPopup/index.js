import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDialogOpen, selectDialogType, setDialogClosed, setDialogOpen, setDialogType
} from "../dialogSlice";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import ChildForm from "./ChildForm";
import { Space } from "../../../components/Space";
import { Dialog } from "./styled";
import { modal } from "../../../assets/fixtures";

const DialogPopup = ({ form }) => {
  const dispatch = useDispatch();
  const open = useSelector(selectDialogOpen);
  const type = useSelector(selectDialogType);

  const handleOpen = () => {
    dispatch(setDialogType(form));
    dispatch(setDialogOpen());
  };

  const handleClose = () => {
    dispatch(setDialogClosed());
  };

  return (
    <>
      <Button onClick={handleOpen}>
        {modal[form]?.buttonText}
      </Button>

      <Modal
        open={open}
        role="dialog"
      >
        <Dialog>
          <Space justify="space-between" >
            <Typography id="modal-title" variant="h6" component="h2">
              {modal[form]?.title}
            </Typography>
            <Button onClick={handleClose} >
              <CloseIcon />
            </Button>
          </Space>
          {type === 'add' &&
            <ChildForm />
          }
        </Dialog>
      </Modal>
    </>
  );
};

export default DialogPopup;