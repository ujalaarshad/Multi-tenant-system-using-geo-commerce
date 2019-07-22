import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import banner from "./managesales.jpg";
import banner1 from "./managesales1.jpg";
import Image from 'material-ui-image'
import Nabar from '../NavBAr/bar'
import Foter from '../Footer/newFooter'
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  paragraphStyle: {
    marginBottom: theme.spacing(8)
  },
  paperStyle: {
    marginBottom: theme.spacing(16)
  },
  imageStyle: {
    marginTop: theme.spacing(5.5)
  },
  [theme.breakpoints.down("xs")]: {
    responsiveDirection: {
      marginTop: theme.spacing(3),
      flexDirection: "column-reverse"
    }
  }
  
}));

const Imagewidth = {
    width:"480px",
    height:"320px",
}


function ManageSales() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Nabar/>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Manage Sales</h1>
                <p className={classes.paragraphStyle}>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle}>
                <img width="480px" height="320px" src={banner} />
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={5} className={classes.responsiveDirection}>
            <Grid item xs={12} md={5} className={classes.imageStyle}>
              <Paper className={classes.paperStyle} >
                  < Image  src ={banner1} />
                
              </Paper>
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
                <h1>Product Returns</h1>
                <p className={classes.paragraphStyle}>
                  Develop a concrete definition of a lead and make sure all
                  employees understand it Distribute your leads quickly. ..
                  Install an effective customer relationship management (CRM)
                  tool. ... Track the source Nurture your leads Excite your
                  sales staff about each prospect
                </p>
              </Typography>
              <Divider />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom align={"Center"}>
            <h1>Manage Your Business With Us</h1>
            <p className={classes.paragraphStyle}>
            <NavLink to="/Register"  style={{color:"black",textDecoration: 'none'}} >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ background: "#0781bd" }}
              >
                Start free trial
              </Button>
              </NavLink>
            </p>
          </Typography>
        </main>
      </Container>
      <Foter/>
    </React.Fragment>
  );
}

export default ManageSales;
