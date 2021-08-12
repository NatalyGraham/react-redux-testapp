import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";

const useStyles = makeStyles((theme) => ({
  button: {
     //margin: theme.spacing(1),
  },
  root: {
    background: '#FECC00',
    border: 0,
    borderRadius: 6,    
    color: 'black',
    height: 24,
    
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={ classes.root}
        size='small'
        startIcon={<ChevronLeftSharpIcon />}
      >
        back to triolcorp.com
      </Button>
    </div>
  );
}
