import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './AppBar';
import { AppBar, Button, Divider, IconButton, Toolbar, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function appBarLabel(label: string) {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
export default function BasicGridLayout() {
  return (

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
            <ResponsiveAppBar></ResponsiveAppBar>
            </Grid>
            <Grid item xs={2}>
            <Divider orientation="vertical" variant="middle" sx={{ height: '100vh' }} />
            </Grid>
            <Grid item xs={10}>
                <Box sx={{ flexGrow: 1 }}>  
                    <Grid container spacing={0}>
                         <Grid item xs={12}>
                            <Typography variant="h3" gutterBottom>
                                Manage Roles
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <AppBar position="static" color="primary" enableColorOnDark>
                            {appBarLabel('Add new Role:')}
                        </AppBar>
                        </Grid>
                    </Grid>   
                </Box>
            </Grid>
        </Grid>
        </Box>
  );
}
