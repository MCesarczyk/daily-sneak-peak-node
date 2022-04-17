import { Typography } from "@mui/material";
import AvatarUploader from "../../../../../features/AvatarUploader";
import DialogPopupFooter from "../../Footer";
import Input from "../../../../../components/Input";
import Select from "../../../../../components/Select";
import { Fieldset, List, ListItem } from "../../styled";

const ChildFormFieldset = ({ title, child, groups, setChild, onFinish }) => {
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

  const onAvatarChange = (payload) => {
    setChild({
      ...child,
      avatar: payload,
    });
  };

  return (
    <>
      <Fieldset>
        <AvatarUploader
          onAvatarChange={onAvatarChange}
        />
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
          </ListItem>
          <ListItem>
            <Input
              id="lastName"
              label="Last name"
              value={child.surname || ''}
              onChange={onLastChange}
            />
          </ListItem>
          <ListItem>
            <Select
              id="group"
              label="Group"
              value={child.group || ''}
              options={groups}
              onChange={onGroupChange}
            />
          </ListItem>
        </List >
      </Fieldset>
      <DialogPopupFooter onFinish={onFinish} />
    </>
  )
};

export default ChildFormFieldset;