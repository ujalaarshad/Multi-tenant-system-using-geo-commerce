import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';
import Drawer from "../../Core/Layout/SuperAdminSideBar";
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
   textField: {
      width: 400,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: '100%',
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
   paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
   form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  containerSpacing: {
    marginTop: theme.spacing(12)
  },
}));
const newStyles = {
background:"#0781bd",
color:"#ffffff",
borderColor: "#007bff",

};


export default function UserRolesDropDown() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
    <form className={classes.root} autoComplete="off">
    <Drawer />
    <Container component="main" maxWidth="xs" className={classes.containerSpacing}>
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
          Add Bandwidth
        </Typography>

        <form className={classes.form} noValidate>
       <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Bandwidth"
            label="Bandwidth"
            name="Bandwidth"
            
            autoFocus
          />
      
       <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Price"
            label="Price"
            name="Price"
            
            autoFocus
          />
      <br></br>
      <br></br>
      <div>
      <Button
            fullWidth
            variant="contained"
            style={newStyles}
          >
            Add
          </Button>
    </div>
     </form>
      </div>
      </Container>
    </form>
    </div>
  );
}