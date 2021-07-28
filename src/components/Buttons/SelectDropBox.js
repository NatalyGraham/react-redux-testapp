import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function SelectDropBoxs() {
  const [accuracyLevel, setAccLvl] = React.useState(1);

  const handleChange = (event) => {
    setAccLvl(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , maxWidth: 250}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Accuracy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={accuracyLevel}
          label="Accuracy"
          onChange={handleChange}
        >
          <MenuItem value={1}>Normal</MenuItem>
          <MenuItem value={2}>High</MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}
