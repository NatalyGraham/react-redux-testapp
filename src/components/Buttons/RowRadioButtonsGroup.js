import * as React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RowRadioButtonsGroup = (props) => {
  
   const visibility125 = (props.accuracy === "AnyLvl" || props.accuracy === "NormalLvl");
   const visibility150 = (props.accuracy === "AnyLvl" || props.accuracy === "HighLvl");
   const visibility175 =  props.accuracy === "HighLvl";

 
  const temperatureData = [
    {
      tempValue: "125",
      tempVisibility: !visibility125,
    },
    {
      tempValue: "150",
      tempVisibility: !visibility150,
    },
    {
      tempValue: "175",
      tempVisibility: !visibility175,
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
