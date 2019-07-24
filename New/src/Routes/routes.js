import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ConfirmationCode from "../components/Core/Account/ForgetPassword/ConfirmationCode";
import ForgetPassword from "../components/Core/Account/ForgetPassword/ForgetPassword.js";
import ConfirmNPass from "../components/Core/Account/ForgetPassword/CreateNewPassword";

import managesales from "../components/Services Accquisition Protocol/Manage/ManageSales";
import manageinvent from "../components/Services Accquisition Protocol/Manage/ManageInventory";
import Addusers from "../components/Admin Panel/Manage Users/AddUsers";
import dropdown from "../components/Admin Panel/Manage Users/dropdown";
import Cntctus from "../components/Services Accquisition Protocol/ContactUs/Contactus.js";
import Abtus from "../components/Services Accquisition Protocol/AboutUs/Aboutus.js";
import UserEdit from "../components/Admin Panel/Manage Users/EditUser";
import Pricing from "../components/Services Accquisition Protocol/Pricing/Pricing.js";
import Home from "../components/Services Accquisition Protocol/Home/Home.js";

import Addstorage from "../components/Super Admin Panel/Storage/AddStorage";
import ViewPlan from "../components/Super Admin Panel/table";
import SuperAdminSidebar from "../components/Core/Layout/SuperAdminSideBar";
import GeneratePlan from "../components/Super Admin Panel/Generate Plans/GeneratePlan";
import LoginView from "../components/Core/Account/Login/Login_view";
import FeaturedProducts from "../components/Services Accquisition Protocol/Market/FeaturedProducts";
import increased_sales from "../components/Services Accquisition Protocol/Market/IncreasedSales";
import Register from "../components/Core/Account/Register/Register.view";
import EmailConfirm from "../components/Core/Account/Register/EmailConfirmation";
import CreateRoles from "../components/Admin Panel/Manage Roles/CreateRoles/CreateRoles";
import Roles from "../components/Admin Panel/Manage Roles/Roles/Roles";
import ProfileManage from "../components/Core/Account/ProfileManage/Manage";

class routes extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/EmailConfirmation" component={EmailConfirm} />
            <Route exact path="/table" component={ViewPlan} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/CreateRoles" component={CreateRoles} />
            <Route exact path="/Roles" component={Roles} />
            <Route exact path="/Manage" component={ProfileManage} />

            <Route exact path="/storage" component={Addstorage} />
            <Route
              exact
              path="/superadminpanel"
              component={SuperAdminSidebar}
            />
            <Route exact path="/MaterialTableDemo" component={GeneratePlan} />
            <Route exact path="/SignIn" component={LoginView} />
            <Route
              exact
              path="/featured_product"
              component={FeaturedProducts}
            />
            <Route exact path="/Increased_sale" component={increased_sales} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Pricing" component={Pricing} />
            <Route exact path="/EditUsers" component={UserEdit} />
            <Route exact path="/Contactus" component={Cntctus} />
            <Route exact path="/Aboutus" component={Abtus} />
            <Route exact path="/dropdown" component={dropdown} />
            <Route exact path="/AddUsers" component={Addusers} />
            <Route exact path="/ForgetPassword" component={ForgetPassword} />
            <Route exact path="/managesales" component={managesales} />
            <Route exact path="/manageInventory" component={manageinvent} />
            <Route
              exact
              path="/ForgetPassword/ConfirmFromEmail"
              component={ConfirmationCode}
            />
            <Route
              exact
              path="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"
              component={ConfirmNPass}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default routes;
