import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postChildData, selectChildData, updateChildData } from "../../../child/childSlice";
import { selectDialogOpen, selectDialogType } from "../../dialogSlice";
import { groups } from "../../../../assets/fixtures";
import { MenuItem, TextField, Typography } from "@mui/material";
import DialogPopupFooter from "../Footer";
import { List, ListItem } from "./styled";

const ChildForm = () => {
  const dispatch = useDispatch();
  const apiData = useSelector(selectChildData);
  const type = useSelector(selectDialogType);
  const open = useSelector(selectDialogOpen);

  const [child, setChild] = useState({});

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
    type === 'edit' && dispatch(updateChildData(child));
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
          <TextField
            required
            id="firstName"
            label="First name"
            value={child.name || ''}
            onChange={onFirstChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            required
            id="lastName"
            label="Last name"
            value={child.surname || ''}
            onChange={onLastChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          />
          <TextField
            id="group"
            select
            label="Group"
            value={child.group || ''}
            onChange={onGroupChange}
            size="small"
            margin="dense"
            sx={{ width: "14rem", px: 1 }}
          >
            {groups.map(group => (
              <MenuItem key={group.id} value={group.label}>
                {group.label}
              </MenuItem>
            ))}
          </TextField>
        </ListItem>
      </List >
      <DialogPopupFooter onFinish={onFinish} />
    </>
  );
};

export default ChildForm;