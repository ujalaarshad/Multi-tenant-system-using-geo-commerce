import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const headerstyle = {
    
    background: '#224e6a'
    
    }

const btnstyle ={
   display:'flex',
    flexDirection: 'row',
    justifyContent: 'flext-end',
    alignItems: 'right',
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
  },
  
  createSpacing: {
    marginRight: theme.spacing(2)
  },
}));



class ButnAppBar extends React.Component {
    
    render(){
  const {classes} = this.props;

  return (
    <div  className={classes.root}>
      <AppBar position="static" style={headerstyle}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.createSpacing}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.createSpacing}>
            Market
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Manage
          </Typography>
          
          <Button color="inherit" >
            <Typography>Pricing</Typography>
          </Button>
          <Button color="inherit"  >Login</Button>
          <Button color="inherit"  >Register</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
    }
}
ButnAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(useStyles) (ButnAppBar) ;