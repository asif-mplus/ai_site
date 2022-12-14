import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={sports}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8, maxHeight: 1 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 400 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Sports"
          placeholder="Favorites"
          style={{ height: 100 }}
        />
      )}
    />
  );
}

const sports = [
  { title: "Baseball" },
  { title: "Cricket" },
  { title: "Rugby" },
  { title: "Kho Kho" },
  { title: "Squash" },
  { title: "Tenis" },
  { title: "Hockey" },
  { title: "Badminton" },
];
