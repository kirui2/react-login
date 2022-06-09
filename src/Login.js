import React, {Component, useState } from 'react';
// import Link from '@material-ui/core/Link';
import axios from 'axios'
import {
  TextField,
  Grid,
  Link
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import CardActions from '@mui/material/CardActions';
import Home from './Home'
const Login = () => {
 
  const initialValues = {
    username:"",
    password:"",
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(values)
    try {
      // make axios post request
      console.log(values)
      const response = await axios({
        method: "post",
        url: `http://localhost:9100/login`,
        data: values,
        headers: { "Content-Type": "application/json"},
      });
      console.log(response)
      // document.location.href ="/Home";
      window.location="/Home";
    } catch(error) {
      console.log(error)
    }
  }



  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    //style={{ minHeight: '100vh' }}
    marginTop={20}
   >
      <Card sx={{ width: '25%' }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom={3}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column" spacing={2}>
        <Grid item>
        <TextField
        required
          id="username-input"
          name="username"
          label="Username"
          type="text"
          size="small"
          value={values.username}
          onChange={handleInputChange}
          
        />
        </Grid>
        <Grid item>
        <TextField
        required
          id="password-input"
          name="password"
          label="Password"
          type="password"
          size="small"
          value={values.password}
          onChange={handleInputChange}
          
        />
        </Grid>
        
        <Grid item>
        <Button type="submit" variant="contained">Login</Button>
        </Grid>
        
      </Grid>
    </form>
    </CardContent>
    <CardActions>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom={3}>
     Not registered yet <Link href="#">Sign Up</Link>
    </Typography>
      </CardActions>
    </Card>
     </Grid>
    
    
  );
};

export default Login;
