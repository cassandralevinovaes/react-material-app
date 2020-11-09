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
      backgroundColor: '#968c83',
      letterSpacing: '2px',
      color:'#fff'
}
const buttonReg = {
   width: '300px',
     letterSpacing: '2px',
      backgroundColor: '#f7dad9'
}
const facebookStyle = {
   width: '300px',
      backgroundColor: '#3b5998',
      color: '#fff',
      textTransform:'capitalize',
      letterSpacing: '1px'
}
const twitterStyle = {
   width: '300px',
      backgroundColor: '#00acee',
      color: '#fff',
      textTransform:'capitalize',
      letterSpacing: '1px'
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

<br />

<p></p>

<form className={classes.root} noValidate autoComplete="off">
  <TextField id="outlined-size-small" label="Email" variant="outlined" /><br />
   <TextField id="outlined-size-small" label="Password" variant="outlined" />
</form>
<Button style={buttonStyle} size='large' disableElevation color='default'> Get started</Button>


{/*<p> OR </p>
   
   <Button style={facebookStyle} size='large' disableElevation color='default'> Login with facebook</Button>
   <p></p>
   
   <Button style={twitterStyle} size='large' disableElevation color='default'> Login with twitter</Button>
<br />*/}
   <p className='small'>Need an account?</p>
    <Button style={buttonReg} size='large' disableElevation color='default'> Register now</Button>
    </div>
  );
}

