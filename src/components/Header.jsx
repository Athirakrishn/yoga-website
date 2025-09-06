import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <>
     <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{backgroundColor:'rgb(4, 95, 102)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          {/* meuicon */}
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,color:"rgb(255, 255, 255)",fontWeight:"700" }}>
            YOGA-STUDIO
             </Typography>
             
          <Box sx={{ flexGrow: 1 , display: "flex", justifyContent: "space-evenly",gap:"3",color:"rgb(255, 255, 255)" }}>
            <Typography variant="h6" component="div" >Classes</Typography> 
            <Typography variant="h6" component="div">Programs</Typography> 
            <Typography variant="h6" component="div" >Live classes</Typography> 
            <Typography variant="h6" component="div">Teachers</Typography>   
            <Typography variant="h6" component="div" >Magazine</Typography> 
            <Typography variant="h6" component="div" >Academy</Typography> 
          </Box>
         
          <Button color="inherit" sx={{color:"rgb(255, 255, 255)",fontWeight:"700" }}>LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header