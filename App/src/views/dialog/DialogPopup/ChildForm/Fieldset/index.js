import { Typography } from "@mui/material";
import { groups } from "../../../../../assets/fixtures";
import DialogPopupFooter from "../../Footer";
import { List, ListItem } from "./styled";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";

const ChildFormFieldset = ({ title, child, setChild, onFinish }) => {
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

  return (
    <>
      <List>
        <ListItem>
          <Typography variant="body2" id="modal-description" sx={{ mt: 2 }}>
            {title}
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
  )
};

export default ChildFormFieldset;