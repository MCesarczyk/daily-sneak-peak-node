import { Typography } from "@mui/material";
import AvatarUploader from "../../../../../features/AvatarUploader";
import DialogPopupFooter from "../../Footer";
import Input from "../../../../../components/Input";
import { Fieldset, List, ListItem } from "../../styled";

const GroupFormFieldset = ({ title, group, setGroup, onFinish }) => {
  const onNameChange = ({ target }) => {
    setGroup({
      ...group,
      name: target.value,
    });
  };

  const onDescriptionChange = ({ target }) => {
    setGroup({
      ...group,
      description: target.value,
    });
  };

  const onAvatarChange = (payload) => {
    setGroup({
      ...group,
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
              id="groupName"
              label="Group name"
              value={group.name || ''}
              onChange={onNameChange}
            />
          </ListItem>
          <ListItem>
            <Input
              id="description"
              label="Description"
              value={group.description || ''}
              onChange={onDescriptionChange}
            />
          </ListItem>
        </List >
      </Fieldset>
      <DialogPopupFooter onFinish={onFinish} />
    </>
  )
};

export default GroupFormFieldset;