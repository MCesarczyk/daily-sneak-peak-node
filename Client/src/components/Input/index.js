import { TextField } from "@mui/material";

const Input = ({ optional, id, label, value, onChange }) => (
  <TextField
    required={!optional}
    id={id}
    label={label}
    value={value}
    onChange={onChange}
    size="small"
    margin="dense"
    sx={{ width: "14rem", px: 1 }}
  />
);

export default Input;