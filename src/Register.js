import React, {useState } from 'react';
import axios   from 'axios';
import Typography from '@mui/material/Typography';
import {
  TextField,
  Grid,
  Link
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
const Register = () => {

  const initialValues = {
    name: "",
    email:"",
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
    try {
      // make axios post request
      console.log(values)
      const response = await axios({
        method: "post",
        url: `http://192.168.1.47:8096/users`,
        data: values,
        headers: { "Content-Type": "application/json","Access-Control-Allow-Origin": "*"},
      });
      console.log(response)
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
         Lets Get Started !
        </Typography>
      <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column" spacing={2}>
      <Grid item>
        <TextField
        required
          id="name-input"
          name="name"
          label="Full Name"
          type="text"
          size="small"
          value={values.name}
          onChange={handleInputChange}
        />
        </Grid>
        <Grid item>
        <TextField
        required
          id="email-input"
          name="email"
          label="Email"
          type="text"
          size="small"
          value={values.email}
            onChange={handleInputChange}
        />
        </Grid>
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
        <Button type="submit" variant="contained">Sign Up</Button>
        {/* <Button variant="contained">Sign Up</Button> */}
        </Grid>
        
      </Grid>
    </form>
    </CardContent>
    <CardActions>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom={3}>
     Already Registered ?  <Link href="#">Login</Link>
    </Typography>
      </CardActions>
    </Card>
     </Grid>
    
    
  );
};

export default Register;
