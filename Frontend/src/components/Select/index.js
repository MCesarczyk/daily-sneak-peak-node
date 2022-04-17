import { MenuItem, TextField } from "@mui/material";

const Select = ({ id, label, value, onChange, options }) => (
  <TextField
    select
    role="select"
    id={id}
    label={label}
    value={value}
    defaultValue=""
    onChange={onChange}
    size="small"
    margin="dense"
    sx={{ width: "14rem", px: 1 }}
  >
    {options.map(option => (
      <MenuItem key={option.id} value={option.id}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

export default Select;