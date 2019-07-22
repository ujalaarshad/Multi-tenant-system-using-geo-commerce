import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import banner from './banner3.png'
import abc from './abc.jpg';
import Image from 'material-ui-image';
import Nabar from '../NavBAr/bar'
import Foter from '../Footer/newFooter'
import {NavLink} from "react-router-dom";



const useStyles = makeStyles(theme => ({
  
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  
  
}));
const newStyles = {
width : '480px',
height : '320px' 

};





const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <Nabar/>
      <CssBaseline />
      <Container maxWidth="lg">
        
        
        <main>
          {/* Main featured post */}
          
          {/* End main featured post */}
          {/* Sub featured posts */}
          
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
              <h1>Market your business</h1>
              <h2>Advertise your product</h2>
              <p>
             Develop a concrete definition of a lead and make sure all employees understand it Distribute your leads quickly. ..
                      
               Install an effective customer relationship management (CRM) tool. ...Track the source Nurture your leads Excite your sales staff about each prospect
                      
              </p>
              </Typography>
              <br/>
              <br/>
              <Divider/>
              
              
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            <Grid item xs={12} md={5} >
                <br/>
                <br/>
                
                
                
                    
                <img
                width = '480px'
                height = '320px' 
                src={banner}
              />
                
                <br/>
                <br/>
                <br/>
                <br/>
                
              
            </Grid>
            {/* End sidebar */}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={5} >
                <br/>
                <br/>
                
                
                
                    
             <img
                width = '480px'
                height = '320px' 
                src={abc}
              />
                
                <br/>
                <br/>
                <br/>
                <br/>
                
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom align={"left"}>
              <h2>Product Returns</h2>
              <p>
                  
                      
                      Develop a concrete definition of a lead and make sure all employees understand it
                      
                      Distribute your leads quickly. ..
          
                      Install an effective customer relationship management (CRM) tool. ...
Track the source
                      Nurture your leads
                      
                      Excite your sales staff about each prospect
                    
              </p>
              </Typography>
              <br/>
              <br/>
              <Divider/>
              
              
            </Grid>
            {/* End main content */}
            {/* Sidebar */}

            
            {/* End sidebar */}
          </Grid>
          
              <Typography variant="h6" gutterBottom align={"Center"}>
              <h1>Manage Your Business With Us</h1>
              <p>
              <NavLink to="/Register"  style={{color:"black",textDecoration: 'none'}} >
              <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
            style = {{background: "#0781bd"}}
          >
            Start free trial
          </Button>
          </NavLink>
              </p>
              </Typography>
              
              
              
            
        </main>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
      <Foter/>
    </React.Fragment>
    
  );
}