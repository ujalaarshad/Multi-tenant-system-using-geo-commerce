import React from 'react';
import { Route , withRouter} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
   paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
   avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const newStyles = {
background:"#0781bd",
color:"#ffffff",
borderColor: "#007bff"

};

class Bandwidth extends React.Component {

  render(){
    const { classes } = this.props;
    return (
      <div>

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
        Bandwidth
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Bandwidth"
            label="Bandwidth"
            name="Duration"
            
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Price"
            label="Price"
           
            id="Price"
         
          />
          
          <Button
            fullWidth
            variant="contained"
            style={newStyles}
            onClick={()=>this.props.history.push('/table')}
          >
         ADD
          </Button>
         
        </form>
      </div>
    </Container>
  </div>
      );
  }
}

Bandwidth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Bandwidth));