import * as React from "react";
import "./Cards.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
//create our styles
const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    backgroundColor: 'red',
    paddingBotton: 1,
    paddingTop: 20,
    textAlign: "center",
    color: "black",
    fontWeight: 600,
    fontFamily: "Roboto"
  },
  available: {
    height: 100,
    backgroundColor: 'white',
    paddingBotton: 1,
    paddingTop: 20,
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
  pa: {
    color: "blue",
    fontWeight: 400,
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
                  <p style={classes.p}>35 Min</p>
                  <h1 style={classes.p}>jhk Min</h1>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  Quarto 2
                  <br />
                  <br />
                  <Button size="small" style={classes.pa} variant="outlined">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 3
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 4
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 5
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  Quarto 6
                  <br />
                  <br />
                  <Button size="small" style={classes.pa} variant="outlined">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 7
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 4
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 5
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  Quarto 6
                  <br />
                  <br />
                  <Button size="small" style={classes.pa} variant="outlined">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={4} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  Quarto 7
                  <br />
                  <p style={classes.p}>35 Min</p>
                </Paper>
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
