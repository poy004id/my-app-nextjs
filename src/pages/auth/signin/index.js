import { useState } from "react";
import {
  Box,
  Stack,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

import { FormHelperText } from "@mui/material";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      const doSignIn = await axios.post(`${API_URL}/auth/signin`, {
        username,
        password,
      });
      if (doSignIn?.status === 200) {
        console.log("success");
        localStorage.setItem("accessToken", doSignIn.data.data.accessToken);
        window.location.replace("/dashboard");
      }
    } catch (error) {
      setError(error?.response?.data?.message || "Terjadi kesalahan");
    }
  };

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
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Sign In
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Input your username and password
          </Typography>

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FormHelperText error>{error}</FormHelperText>

          <Button variant="contained" onClick={handleSignIn}>
            Sign In
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
