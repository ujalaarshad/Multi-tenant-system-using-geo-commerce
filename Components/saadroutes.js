import React,{Component} from 'react';

import Nabar from './components/NavBAr/bar';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import './App.css';
import CE from './components/ForgetPassword/ConfirmFromEmail';
import FP from './components/ForgetPassword/ForgetPassword';
import ConfirmNPass from './components/ForgetPassword/CreateNewPassword';
import Footer from './components/Footer/newFooter';
import managesales from './components/MANAGE/ManageSales';
import manageinvent from './components/MANAGE/ManageInventory';
import Addusers from './components/addUsers/AddUsers';
import dropdown from './components/addUsers/dropdown';
import Cntctus from './components/Footer/Contactus';
import Abtus from './components/Footer/Aboutus';
import UserE from './components/addUsers/EditUser';
import Pricing from './components/StaticPanel/Pricing'



class routes extends React.Component {
    render(){
        return (
            <div className="App" >
              
              
              
              <Router>
              
              
                <Switch>
                  <Route exact path= "/Pricing" component={Pricing} />
                  <Route exact path= "/EditUsers" component={UserE} />
                  <Route exact path= "/Contactus" component={Cntctus} />
                  <Route exact path= "/Aboutus" component={Abtus} />
                  <Route exact path= "/dropdown" component={dropdown} />
                  <Route exact path= "/AddUsers" component={Addusers} />
                  <Route exact path= "/ForgetPassword" component={FP} />
                  <Route exact path= "/managesales" component={managesales} />
                  <Route exact path= "/manageInventory" component={manageinvent} />
                  <Route exact path= "/ForgetPassword/ConfirmFromEmail" component={CE} />
                  <Route exact path= "/ForgetPassword/ConfirmFromEmail/CreateNewPassword" component={ConfirmNPass} />
                  
                </Switch>
                
              </Router>
        
              
              
            </div>
          );
    }
  
}

export default routes;
