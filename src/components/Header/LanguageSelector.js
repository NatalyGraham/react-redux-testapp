import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const LanguageSelector = (props) => {
  
  const handleChange = (event) => {
    props.setLanguage(event.target.value)    
  };

  const languages = [
    {
      code: "English",
      name: props.item[0],
    },
    {
      code: "Русский",
      name: props.item[1],
    },
    {
      code: "Украънська",
      name: props.item[2],
    },
  ];

  return (
    <Box sx={{ minWidth: 120, maxWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.boxName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.accuracy}
          label="Accuracy"
          name="demo-simple-select-label"
          onChange={handleChange}
        >
          {menuItemValues.map(({ code, name }) => (
            <MenuItem value={code} key={code}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector;

