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
import MaterialTableDemo from './table_Generateplan';
import {Link} from 'react-router-dom';
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
   const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
    <form className={classes.root} autoComplete="off">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
          Generate Plan
        </Typography>

        <form className={classes.form} noValidate>
      <FormControl variant="outlined"  className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Storage
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="UserRoles" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>10GB</MenuItem>
          <MenuItem value={20}>20GB</MenuItem>
          <MenuItem value={30}>30GB</MenuItem>
        </Select>

      </FormControl>
      <FormControl variant="outlined"  className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Bandwidth
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="UserRoles" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>10GHZ</MenuItem>
          <MenuItem value={20}>20GHZ</MenuItem>
          <MenuItem value={30}>30GHZ</MenuItem>
        </Select>
        
      </FormControl>
      <FormControl variant="outlined"  className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
          Staff Accounts
        </InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={labelWidth} name="UserRoles" id="outlined-age-simple" />}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        
      </FormControl>
      <br></br>
      <br></br>
      <div>
      <Button
            fullWidth
            variant="contained"
            style={newStyles}
            onClick={handleClickOpen}
          >
            Generate
          </Button>
          <br></br>
          <br></br>
              <Link component={Link} to="/MaterialTableDemo" variant="body2">
                Edit the Plan
              </Link>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Discounted Price</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Total Amount=100 $
            <br></br>
            Please enter Discounted price
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            className={classes.textField}
            label="Discounted price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  color="primary" >
            Cancel
          </Button>
          <Button onClick={handleClose} component={Link} to="/MaterialTableDemo" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
     </form>
      </div>
      </Container>
    </form>
    </div>
  );
}