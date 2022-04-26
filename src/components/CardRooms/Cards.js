import * as React from "react";
import "./Cards.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
//create our styles
const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 90,
    backgroundColor: 'red',
    padding: 20,
    textAlign: "center",
    color: "black",
    fontWeight: 600,
    fontFamily: "Roboto"
  },
  p: {
    padding: 20,
    color: "black",
    fontWeight: 600,
    fontFamily: "Roboto"
  },
};


function Cards() {
  return (
    <>
      <div style={classes.root}>
        <br />
        <br />
        <br />
        <Paper elevation={2} >
          <br />
          <br />
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4}>
                  Quarto 1
                  <br />
                  <p style={classes.p}>35 min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 2</Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 3</Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 4</Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 5</Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 6</Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >Quarto 7</Paper>
              </Grid>
            </Grid>
          </Container>
          <br />
          <br />
        </Paper>


      </div>
    </>
  );
}

export default Cards;
