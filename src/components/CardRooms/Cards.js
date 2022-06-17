import * as React from "react";
import "./Cards.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import QuartoFoto from './../../assets/room.jpeg';
//create our styles

// const classes = {
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 100,
//     backgroundColor: 'red',
//     paddingBotton: 1,
//     paddingTop: 20,
//     textAlign: "center",
//     color: "black",
//     fontWeight: 600,
//     fontFamily: "Roboto"
//   },
//   available: {
//     height: 100,
//     backgroundColor: 'white',
//     paddingBotton: 1,
//     paddingTop: 20,
//     textAlign: "center",
//     color: "black",
//     fontWeight: 600,
//     fontFamily: "Roboto"
//   },
//   p: {
//     padding: 20,
//     color: "black",
//     fontWeight: 600,
//     fontFamily: "Roboto"
//   },
//   pa: {
//     color: "blue",
//     fontWeight: 400,
//     fontFamily: "Roboto"
//   },
// };

const classes = {
  root: {
    flexGrow: 1,
  },

  paper: {
    height: 80,
    backgroundColor: 'red',
    textAlign: "left",
    color: "black",
    fontFamily: "Helvetica"
  },

  available: {
    height: 80,
    backgroundColor: 'white',
    textAlign: "left",
    color: "black",
    fontWeight: 400,
    fontFamily: "Roboto"
  },

  p: {
    color: "black",
    fontFamily: "Roboto",

  },

  pa: {
    color: "blue",
    fontWeight: 400,
    fontFamily: "Roboto"
  },

  paragraph: {
    fontSize: 25
  }
};


function closeRoom() {
  window.confirm("Deseja ocupar o quarto?")
}

function viewReports() {
  alert("Ver relatórios.")
}



function Cards() {
  return (
    <>
      <div style={classes.root}>
       
        <Paper elevation={3} >
          <br />
          
          <Container>
          <div className="main-pricing">
            <div className="today">Hoje: 17600</div>
            <div className="month">Mês: 223400</div>
          </div>
          <br/>
          <hr />
          <br/>
            <Grid container spacing={1}>
              <Grid item xs={3} sm={1}>
                <Paper style={classes.paper} elevation={4}>
                  <p style={classes.paragraph}>&nbsp;01</p>
                  {/* <img src={QuartoFoto} /> */}
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;03</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;06</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;04</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;06</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;07</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;08</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;02</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;09</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;10</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;11</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;12</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;13</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;14</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;15</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>16</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;17</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.available} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;18</p>
                  <Button size="small" style={classes.pa} onClick={closeRoom} fullWidth variant="text">Disponivel</Button>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;19</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
              <Grid item xs={3} sm={2}>
                <Paper style={classes.paper} elevation={4} >
                  <p style={classes.paragraph}>&nbsp;20</p>
                  <p style={classes.p}>&nbsp;35min</p>
                </Paper>
              </Grid>
            </Grid>
            <br />
            <br />
            <Button size="small" style={classes.pa} onClick={viewReports} fullWidth variant="outlined">Relatórios</Button>
          </Container>
          <br />
          <br />
        </Paper>
      </div>
    </>
  );
}

export default Cards;
