import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postChildData, selectChildData, updateChildData } from "../../../child/childSlice";
import { selectDialogOpen, selectDialogType } from "../../dialogSlice";
import { groups } from "../../../../assets/fixtures";
import { Typography } from "@mui/material";
import DialogPopupFooter from "../Footer";
import { List, ListItem } from "./styled";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

const ChildForm = () => {
  const dispatch = useDispatch();
  const apiData = useSelector(selectChildData);
  const type = useSelector(selectDialogType);
  const open = useSelector(selectDialogOpen);

  const [child, setChild] = useState({
    name: '',
    surname: '',
    group: ''
  });

  const onFirstChange = ({ target }) => {
    setChild({
      ...child,
      name: target.value,
    });
  };

  const onLastChange = ({ target }) => {
    setChild({
      ...child,
      surname: target.value,
    });
  };

  const onGroupChange = ({ target }) => {
    setChild({
      ...child,
      group: target.value,
    });
  };

  const fetchApiChild = () => {
    if (Object.keys(apiData).length > 0) {
      setChild(apiData);
    }
  };

  useEffect(() => {
    if (type === 'edit') {
      fetchApiChild();
    }
  }, [type, open, apiData]);

  const onFinish = () => {
    type === 'add' && dispatch(postChildData(child));
  };

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
            Personal data
          </Typography>
        </ListItem>
        <ListItem>
          <Input
            id="firstName"
            label="First name"
            value={child.name || ''}
            onChange={onFirstChange}
          />
          <Input
            id="lastName"
            label="Last name"
            value={child.surname || ''}
            onChange={onLastChange}
          />
          <Select
            id="group"
            label="Group"
            value={child.group || ''}
            options={groups}
            onChange={onGroupChange}
          />
        </ListItem>
      </List >
      <DialogPopupFooter onFinish={onFinish} />
    </>
  );
};

export default ChildForm;