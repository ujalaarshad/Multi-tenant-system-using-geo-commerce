import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import price from './Components/StaticPanel/Pricing';
import aboutus from './Components/Footer/Aboutus';
import storage from './Components/superadminpanel/Storage';

import contactus from './Components/Footer/Contactus';

  import MaterialTableDemo from './Components/superadminpanel/table';
  import ResponsiveDrawer from './Components/superadminpanel/dr';
import MaterialTable from './Components/superadminpanel/table_Generateplan';
import HigherOrderComponent from './Components/Login/Login_view';
import ImageLoader from './Components/Market/featured_product';
import increased_sales from './Components/Market/Increased_sale';


const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/pricing' component={price} />
    
      <Route exact path='/aboutus' component={aboutus} />
      <Route exact path='/contactus' component={contactus} />
    
   
      <Route exact path='/table' component={MaterialTableDemo} />
      
      <Route exact path='/storage' component={storage} />
      <Route exact path='/superadminpanel' component={ResponsiveDrawer} />
      <Route exact path='/MaterialTableDemo' component={MaterialTable} />
      <Route exact path='/SignIn' component={HigherOrderComponent} />
         <Route exact path='/featured_product' component={ImageLoader} />
      <Route exact path='/Increased_sale' component={increased_sales} />
    </Switch>
  </BrowserRouter >
);
export default Root;
