import React from "react";
import React, { Component } from 'react';
import "./style.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const textAlignCenter = {
  textAlign: 'center',
}
const buttonStyle = {
   width: '300px',
      backgroundColor: '#f7dad9'
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
      backgroundColor: '#fff'
      
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
<div style={textAlignCenter}>

<h1>React Material</h1>
<p>Material UI for coding react app</p>

<form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-size-small" label="Email" variant="outlined" /><br />
   <TextField id="outlined-size-small" label="Password" variant="outlined" />
</form>
<Button style={buttonStyle} size='large' disableElevation color='default'> Get started</Button>

   
    </div>
  );
}

