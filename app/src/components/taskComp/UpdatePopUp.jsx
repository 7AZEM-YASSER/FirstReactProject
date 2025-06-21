"use client";

import { Grid, Typography, Button, Divider } from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";

export default function UpdatePopUp() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#11111150",
        zIndex: "5",
      }}
    >
      <Card>
        <CardContent>
          <div style={{textAlign: "right"}}>
            <Typography sx={{p: "10px"}}>Update Your Task</Typography>
          </div>
          <Divider/>
          <div>
            <Grid container>
              <Grid size={12}>
                <TextField sx={{width: "100%", m: "10px 0"}} label="Title" variant="outlined" />
              </Grid>
              <Grid size={12}>
                <TextField sx={{width: "100%", m: "10px 0"}} label="Discrebtion" variant="outlined" />
              </Grid>
            </Grid>
          </div>
        </CardContent>
        <Divider/>
        <CardActions>
          <Grid container sx={{width: "50%"}}>
            <Grid size={5}>
              <Button variant="contained">Make</Button>
            </Grid>
            <Grid size={7}>
              <Button variant="outlined">No</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Container>
  );
}
