import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Grid,
} from "@mui/material";
const home = () => {
  return (
    <Grid container alignItems="center" justify="center" direction="column" spacing={2} >
      <Grid item>
        <Card>
         <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Welcome to Swipe X
        </Typography>
         </CardContent>
        </Card>
      </Grid>
    </Grid>
    
  )
}

export default home