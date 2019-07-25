import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import EditIcon from "@material-ui/icons/EditOutlined";
import ManageView from "./Manage.view";

class Manage extends React.Component {
  rows = [
    this.createData(
      "Name",
      "Hamza Arshad",
      <IconButton>
        <EditIcon />
      </IconButton>
    ),
    this.createData(
      "Store Name",
      "Shopify",
      <IconButton>
        <EditIcon />
      </IconButton>
    ),
    this.createData(
      "Password",
      "*******",
      <NavLink
        to="/ForgetPassword/ConfirmFromEmail/CreateNewPassword"
        style={{ color: "black", textDecoration: "none" }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
      </NavLink>
    ),
    this.createData(
      "Email Address",
      "hamza@gmail.com",
      "This can not be changed."
    )
  ];

  createData(name, data, icon) {
    return { name, data, icon };
  }

  render() {
    return (
      <div>
        <ManageView rows={this.rows} />;
      </div>
    );
  }
}

export default Manage;
