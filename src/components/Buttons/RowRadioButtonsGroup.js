import * as React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RowRadioButtonsGroup = (props) => {
  const visibility125 = props.accuracy === 2;
    

  function isDisable(visibility) {
    if (visibility) {
      return false;
    } else {
      return true;
    }
  }

  const temperatureData = [
    {
      tempValue: "125",
      tempVisibility: visibility125,
    },
    {
      tempValue: "150",
      tempVisibility: !visibility125,
    },
    {
      tempValue: "175",
      tempVisibility: !visibility125,
    },
  ];

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Well Temperature</FormLabel>
      <RadioGroup row aria-label="tempetature" name="row-radio-buttons-group">
        {temperatureData.map(({ tempValue, tempVisibility }) => (
          <FormControlLabel
            key={tempValue}
            value={tempValue}
            disabled={tempVisibility}
            control={<Radio />}
            label={tempValue}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RowRadioButtonsGroup;
