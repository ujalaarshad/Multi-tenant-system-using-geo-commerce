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
import Pricing from './components/StaticPanel/Pricing';
import Home from './components/StaticPanel/Home';

import storage from "./components/superadminpanel/Storage";
import MaterialTableDemo from "./components/superadminpanel/table";
import ResponsiveDrawer from "./components/superadminpanel/dr";
import MaterialTable from "./components/superadminpanel/table_Generateplan";
import HigherOrderComponent from "./components/Login/Login_view"
import ImageLoader from "./components/Market/featured_product";
import increased_sales from "./components/Market/Increased_sale";
import Register from "./components/Account/Register";
import CreateRoles from "./components/DefineRoles/CreateRoles";
import Roles from "./components/DefineRoles/Roles";
import Manage from "./components/Account/Manage";




class routes extends React.Component {
    render(){
        return (
            <div className="App" >
              
              
              
              <Router>
              
              
                <Switch>
                <Route exact path="/table" component={MaterialTableDemo} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/CreateRoles" component={CreateRoles} />
                <Route exact path="/Roles" component={Roles} />
                <Route exact path="/Manage" component={Manage} />

                <Route exact path="/storage" component={storage} />
                <Route exact path="/superadminpanel" component={ResponsiveDrawer} />
                <Route exact path="/MaterialTableDemo" component={MaterialTable} />
                <Route exact path="/SignIn" component={HigherOrderComponent} />
                <Route exact path="/featured_product" component={ImageLoader} />
                <Route exact path="/Increased_sale" component={increased_sales} />
                  <Route exact path= "/Home" component={Home} />
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
