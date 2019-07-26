import React from 'react';

import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import Cntctus from '../components/Services Accquisition Protocol/ContactUs/Contactus.js';
import Pricing from '../components/Services Accquisition Protocol/Pricing/Pricing.js';
import Abtus from '../components/Services Accquisition Protocol/AboutUs/Aboutus.js';
import AddDuration from '../components/Super Admin Panel/Duration/AddDuration/AddDuration';
import AddStorage from '../components/Super Admin Panel/Storage/AddStorage/AddStorage';
import AddBandwidth from '../components/Super Admin Panel/Bandwidth/AddBandwith/AddBandwidth';
import AddStaffAccounts  from '../components/Super Admin Panel/Staff Accounts/AddStaffAccounts/AddStaffAcounts';
import EditBandwidth from '../components/Super Admin Panel/Bandwidth/EditBandwidth/EditBandwidth';
import EditDuration from '../components/Super Admin Panel/Duration/EditDuration/EditDuration';
import EditStorage from '../components/Super Admin Panel/Storage/EditStorage/EditStorage';
import EditStaffAccounts from '../components/Super Admin Panel/Staff Accounts/EditStaffAccounts/EditStaffAccounts';
import SuperAdminSidebar from "../components/Core/Layout/SuperAdminSideBar";
import plan from '../components/Super Admin Panel/Generate Plans/GeneratePlan';
import ConfirmationCode from '../components/Core/Account/ForgetPassword/ConfirmationCode/ConfirmationCode';
import ForgetPassword from '../components/Core/Account/ForgetPassword/ForgetPassword.js';
import ConfirmNPass from '../components/Core/Account/ForgetPassword/CreateNewPassword/CreateNewPassword';

import managesales from '../components/Services Accquisition Protocol/Manage/ManageSales/ManageSales';
import manageinvent from '../components/Services Accquisition Protocol/Manage/ManageInventory/ManageInventory';
import Addusers from '../components/Admin Panel/Manage Users/AddUsers/AddUsers';
import dropdown from '../components/Admin Panel/Manage Users/dropdown';

import UserEdit from '../components/Admin Panel/Manage Users/EditUsers/EditUser';

import Home from '../components/Services Accquisition Protocol/Home/Home.js';

import ViewPlan from "../components/Super Admin Panel/table";
import editplan from '../components/Super Admin Panel/Generate Plans/ViewPlans';

import GeneratePlan from "../components/Super Admin Panel/Generate Plans/GeneratePlan";
import LoginView from "../components/Core/Account/Login/Login_view"
import FeaturedProducts from "../components/Services Accquisition Protocol/Market/FeaturedProducts";
import increased_sales from "../components/Services Accquisition Protocol/Market/IncreasedSales";
import Register from "../components/Core/Account/Register/Register";
import EmailConfirm from '../components/Core/Account/Register/EmailConfirmation';
import CreateRoles from "../components/Admin Panel/Manage Roles/CreateRoles/CreateRoles";
import Roles from "../components/Admin Panel/Manage Roles/Roles/Roles";
import ProfileManage from "../components/Core/Account/ProfileManage/Manage";

class routes extends React.Component {
    render(){
        return (
            <div className="App" >
              
              
              
              <Router>
              
              
                <Switch>
                <Route exact path="/Register" component={Register} />
                  <Route exact path="/CreateRoles" component={CreateRoles} />
                  <Route exact path="/Roles" component={Roles} />
                  <Route exact path="/Manage" component={ProfileManage} />

                  <Route exact path="/superadminpanel" component={SuperAdminSidebar} />
                  <Route exact path="/MaterialTableDemo" component={GeneratePlan} />
                  <Route exact path="/SignIn" component={LoginView} />
                  <Route exact path="/featured_product" component={FeaturedProducts} />
                  <Route exact path="/Increased_sale" component={increased_sales} />
                  <Route exact path= "/Home" component={Home} />
            
                  <Route exact path= "/EditUsers" component={UserEdit} />
 
                  <Route exact path= "/dropdown" component={dropdown} />
                  <Route exact path= "/AddUsers" component={Addusers} />
                  <Route exact path= "/ForgetPassword" component={ForgetPassword} />
                  <Route exact path= "/managesales" component={managesales} />
                  <Route exact path= "/manageInventory" component={manageinvent} />
                  <Route exact path= "/ForgetPassword/ConfirmFromEmail" component={ConfirmationCode} />
                  <Route exact path= "/ForgetPassword/ConfirmFromEmail/CreateNewPassword" component={ConfirmNPass} />
                  <Route exact path= "/Contactus" component={Cntctus} />
                  <Route exact path= "/Pricing" component={Pricing} />
                  <Route exact path= "/Aboutus" component={Abtus} />
                  <Route exact path= "/ADD_duration" component={AddDuration} />
                  <Route exact path= "/Storage" component={AddStorage} />
                  <Route exact path= "/Bandwidth" component={AddBandwidth} />
                  <Route exact path= "/StaffAccounts" component={AddStaffAccounts} />
                  <Route exact path= "/edit_bandwidth" component={EditBandwidth} />
                  <Route exact path= "/edit_duration" component={  EditDuration} />
                  <Route exact path= "/edit_storage" component={EditStorage} />
                  <Route exact path= "/edit_staffAccounts" component={EditStaffAccounts} />
                  <Route exact path="/superadminpanel" component={SuperAdminSidebar} />
                 
                  <Route exact path="/plan" component={plan} /> 
                  <Route exact path="/edit_plan" component={editplan} /> 
                </Switch>
                
              </Router>
        
              
              
            </div>
          );
    }
  
}

export default routes;
