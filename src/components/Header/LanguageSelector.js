import * as React from "react";
import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function LanguageSelector() {
  const [language, setLanguage] = React.useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#FECC00",
      border: 0,
      borderRadius: 6,
      color: "black",
      height: 28,
    },
  }));

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  const classes = useStyles();

  return (
    <Box sx={{ minWidth: 120, maxWidth: 300 }}>
      <FormControl full variant="outlined">
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={language}
          label="Language"
          className={classes.root}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value=""> English</MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
          <MenuItem value="ua">Украънська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
