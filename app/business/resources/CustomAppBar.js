'use client';

import { AppBar } from 'react-admin';
import { Typography, Toolbar, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

const CustomAppBar = () => (
  <AppBar color="primary">
    <Toolbar sx={{ position: 'relative', width: '100%' }}>
      
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontWeight: 600,
          fontFamily: 'monospace',
        }}
      >
        PRACTISE ADMIN DASHBOARD
      </Typography>

      <Box sx={{ marginLeft: 'auto' }}>
        <Link href="/" passHref>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;