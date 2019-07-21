import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import emailcon from './Components/Email Confirmation/emailconfirmation';
import price from './Components/StaticPanel/Pricing';
import aboutus from './Components/Footer/Aboutus';
import storage from './Components/superadminpanel/Storage';

import contactus from './Components/Footer/Contactus';

  import MaterialTableDemo from './Components/superadminpanel/table';
  import ResponsiveDrawer from './Components/superadminpanel/dr';


import manageinvent from './Components/StaticPanel/ManageInventory';

import managesales from './Components/StaticPanel/ManageSales';
import MaterialTable from './Components/superadminpanel/table_Generateplan';


const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/emailconfirm' component={emailcon} />
      <Route exact path='/pricing' component={price} />
    
      <Route exact path='/aboutus' component={aboutus} />
      <Route exact path='/contactus' component={contactus} />
    
   
      <Route exact path='/table' component={MaterialTableDemo} />
      
      <Route exact path='/storage' component={storage} />
      <Route exact path='/superadminpanel' component={ResponsiveDrawer} />
   
      
      <Route exact path='/manageInventory' component={manageinvent} />
      <Route exact path='/managesales' component={managesales} />
      <Route exact path='/MaterialTableDemo' component={MaterialTable} />
    </Switch>
  </BrowserRouter >
);
export default Root;
