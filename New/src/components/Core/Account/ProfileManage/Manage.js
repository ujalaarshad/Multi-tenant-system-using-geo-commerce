import React from "react";
import { makeStyles, lighten } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/EditOutlined";
import Drawer from "../../Layout/AdminSideBar";
import IconButton from "@material-ui/core/IconButton";
import Redirect from "react-router-dom/Redirect";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  root: {
    display: "flex"
  },
  heroContent: {
    padding: theme.spacing(12, 0, 6)
  },
  paper: {
    marginTop: theme.spacing(6)
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#F3F3F3"
    }
  },
  tableCell: {
    fontWeight: "bold"
  },
  typo: {
    paddingTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

function handlePasswordChange(){
  return <Redirect to="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"/>;
}

const rows = [
  createData("Name", "Hamza Arshad", <IconButton><EditIcon/></IconButton>),
  createData("Store Name", "Shopify", <IconButton><EditIcon /></IconButton>),
  createData("Password", "*******", <NavLink to="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"  style={{color:"black",textDecoration: 'none'}} ><IconButton><EditIcon /></IconButton></NavLink>),
  createData("Email Address", "hamza@gmail.com", "This can not be changed.")
];

function createData(name, data, icon) {
  return { name, data, icon };
}

export default function Manage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <CssBaseline />
        <div className={classes.topHeading}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Profile Info
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Basic information about you.
          </Typography>
        </div>
        <Paper className={classes.paper}>
          <Typography
            variant="h5"
            align="left"
            color="textPrimary"
            component="p"
            className={classes.typo}
            fontWeight="fontweightregular"
          >
            Profile
          </Typography>
          <Table>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name} className={classes.tableRow}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tableCell}
                    style={{ height: 70 }}
                    style={{ width: 300 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row" style={{ width: 500 }}>
                    {row.data}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.icon}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
}
