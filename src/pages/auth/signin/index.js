import {useState} from "react";
import { Box, Stack, Container, Card, CardContent, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Signin() {
  const [username, setUsername] = useState("");

  console.log("username", username);

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
          />


          <TextField id="filled-basic" label="Password" variant="outlined" type='password' />
          <Button variant="contained">Sign In</Button>
        </CardContent>
      </Card>
    </Container>
  );
}
