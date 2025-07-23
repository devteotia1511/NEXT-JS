"use client";
import { Card, CardContent, Typography } from '@mui/material';

const CustomDashboard = () => (
    <Card
      sx={{
        marginTop: '50px',
        display: 'flex',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        // bgcolor: 'grey',
        color: 'black',
        width: '100%',
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{
          fontFamily: 'Times New Roman',
        //   marginTop:'200px',
          fontWeight: 'bold',
          fontSize: '1.5rem'
           }}
        >
          WELCOME TO THE ADMIN DASHBOARD...
        </Typography>
        <Typography>Customize this dashboard as needed.</Typography>
      </CardContent>
    </Card>
  );
  
  export default CustomDashboard;