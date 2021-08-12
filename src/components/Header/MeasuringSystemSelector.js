import * as React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from "@material-ui/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function MeasuringSystemSelector() {

  const [measuringSystem, setMeasuringSystem] = React.useState('');

  const useStyles = makeStyles((theme) => ({
    
    root: {
      background: '#FECC00',
      border: 0,
      borderRadius: 6,      
      color: 'black',
      height: 28,
      
    },
  }));

  const handleChange = (event) => {
    setMeasuringSystem(event.target.value);
  };
  const classes = useStyles();

  return (
    
    <Box sx={{ minWidth: 120, maxWidth: 300 }}>
      <FormControl full variant="outlined" >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={measuringSystem}
          label="MeasuringSystem"
          className={classes.root}
          onChange={handleChange}      
          inputProps={{ 'aria-label': 'Without label' }}    
        >
          <MenuItem value=""> Метрическая</MenuItem>          
          <MenuItem value="ru">Имперская</MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}