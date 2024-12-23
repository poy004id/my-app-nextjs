import * as React from "react";
import { Box, Stack, Container, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function Signin() {
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
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="outlined" />
        </CardContent>
      </Card>
    </Container>
  );
}
