import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { signInWithPopup, signOut } from 'firebase/auth';
import { googleauthprovider,auth } from '../firebase/setup';


export default function Navbar() {

    const [authData,setAuthData] = React.useState([])
    const [user,setuser] = React.useState(false) 

    const SignIn = async()=>{
        try{
            const data = await signInWithPopup(auth,googleauthprovider)
            setAuthData(data)
            setuser(true)
            // console.log(data)
        }catch(err){
            console.log(err)
        }    
    }
    const Logout = async ()=>{
        try{
            await signOut(auth)
            setuser(false)
        }
        catch(err){
            console.error(err)
        }
    }
    // console.log(authData)
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar  style={{backgroundColor:'black',color:'yellow', height:'60px'}}>
        <Toolbar variant="dense">
        
          <Typography variant="h6" style={{padding:"20px"}}  component="div">
            News-hub
          </Typography>
          {/* <Button onClick={SignIn} sx={{ml:'900px',color:'white'}} variant='contained' size="small">signup</Button> */}
          
          { user? <Button onClick={Logout} variant='contained' size='small'>Logout</Button> : <Button onClick={SignIn} sx={{ml:'1000px',color:'white'}} variant='contained' size="small">signup</Button> }
          <Typography sx={{ml:"10px",color:'white'}}>{authData?.user?.displayName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}