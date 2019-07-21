import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { classExpression } from "@babel/types";
import FormLabel from "@material-ui/core/FormLabel";
import Drawer from "../drawerresp";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormGroup, CssBaseline } from "@material-ui/core";
import { fontSize } from "@material-ui/system";

const styles = theme => ({
  submit: {
    background: "#0781bd",
    color: "#ffffff",
    marginTop: theme.spacing(2)
  },
  containerSpacing: {
    marginTop: theme.spacing(12)
  },
  root: {
    display: "flex"
  },
  typo: {
    paddingLeft: theme.spacing(2)
  }
});

class CreateRoles extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Drawer />
        <CssBaseline />

        <form noValidate>
          <Container maxWidth={"md"} className={classes.containerSpacing}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TextField
                  autoComplete="RoleName"
                  name="RoleName"
                  variant="outlined"
                  required
                  fullWidth
                  id="RoleName"
                  label="Role Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={8} md={8} lg={12}>
                <FormLabel
                  style={{
                    color: "#000000",

                    fontWeight: "bold",
                    fontSize: "20px"
                  }}
                  required
                >
                  Choose privileges
                </FormLabel>
              </Grid>

              <Grid item xs={12} sm={8} md={8} lg={8}>
                <Paper style={{ paddingTop: 1 + "em" }}>
                  {/*Home*/}
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox value="Home" />}
                      label="Home"
                      className={classes.typo}
                    />
                  </FormGroup>

                  {/*Dasboard*/}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Dashboard" />}
                      label="Dashboard"
                      className={classes.typo}
                    />
                  </FormGroup>

                  {/*Products*/}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Products" />}
                      label="Products"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Add Products" />}
                      label="Add Products"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Discounted Products" />}
                      label="Discounted Products"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Categories*/}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Categories" />}
                      label="Categories"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Add Categories" />}
                      label="Add Categories"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Orders*/}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Orders" />}
                      label="Orders"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Create Orders" />}
                      label="Create Orders"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Product Returns" />}
                      label="Product Returns"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Suppliers*/}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Suppliers" />}
                      label="Suppliers"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Add Suppliers" />}
                      label="Add Suppliers"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Roles */}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Roles" />}
                      label="Roles"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Add Roles" />}
                      label="Add Roles"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Users */}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Users" />}
                      label="Users"
                      className={classes.typo}
                    />
                    <FormControlLabel
                      control={<Checkbox value="Add Users" />}
                      label="Add Users"
                      className={classes.typo}
                      style={{ marginLeft: 1 + "em", marginTop: -0.5 + "em" }}
                    />
                  </FormGroup>

                  {/*Add Store Location */}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Add Store Location" />}
                      label="Add Store Location"
                      className={classes.typo}
                    />
                  </FormGroup>

                  {/*Reports */}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Reports" />}
                      label="Reports"
                      className={classes.typo}
                    />
                  </FormGroup>

                  {/*Marketing */}
                  <FormGroup style={{ marginTop: -0.5 + "em" }}>
                    <FormControlLabel
                      control={<Checkbox value="Marketing" />}
                      label="Marketing"
                      className={classes.typo}
                    />
                  </FormGroup>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={8} md={8} lg={8} align="right">
                <Button
                  type="submit"
                  variant="contained"
                  className={classes.submit}
                  style={{
                    background: "#0781bd",
                    minWidth: "200px"
                  }}
                >
                  Add Role
                </Button>
              </Grid>
            </Grid>
          </Container>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateRoles);
