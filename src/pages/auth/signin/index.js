import {useState} from "react";
import { Box, Stack, Container, Card, CardContent, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleSignIn= async() => {
    try {
      const doSignIn =  await  axios.post(`${API_URL}/auth/signin`, {username, password} )
      console.log("doSignIn", doSignIn)
      if (doSignIn?.status == 200) {
        console.log("success")
        // set token to localstorage
        localStorage.setItem('accessToken', doSignIn.data.data.accessToken)
      }
    } catch (error) {
      console.error("error", error);
    }
  }



  return (
    <Container
      sx={{
        backgroundColor: "green",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Card
        sx={{
          backgroundColor: "white",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column", gap:2 }}>
          <Typography variant="h5" sx={{textAlign:'center'}}>Sign In</Typography>
          <Typography variant="body1" sx={{textAlign:'center'}}>Input your username and password</Typography>
          
          <TextField 
            id="outlined-basic" 
            label="Username" 
            variant="outlined" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <TextField id="filled-basic" label="Password" variant="outlined" type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained"
            onClick={handleSignIn}
          >Sign In</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
