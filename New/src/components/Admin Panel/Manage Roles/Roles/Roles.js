import React from "react";
import RolesView from "./Roles.view";

class editRoles extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  state = { page: 0, rowsPerPage: 5, open: false };

  rows = [
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo"),
    this.createData("Admin", "Yo", "Yo")
  ];

  handleChangePage(event, newPage) {
    this.setState({ page: newPage });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: parseInt(event.target.value, 10) });
    this.setState({ page: 0 });
  }

  createData(name, editIcon, deleteIcon) {
    return { name, editIcon, deleteIcon };
  }

  handleEditClick() {
    this.props.history.push("/CreateRoles");
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    let emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.rows.length - this.state.page * this.state.rowsPerPage
      );

    return (
      <RolesView
        rows={this.rows}
        page={this.state.page}
        rowsPerPage={this.state.rowsPerPage}
        handleEditClick={this.handleEditClick}
        handleClickOpen={this.handleClickOpen}
        emptyRows={this.emptyRows}
        handleChangePage={this.handleChangePage}
        handleChangeRowsPerPage={this.handleChangeRowsPerPage}
        handleClose={this.handleClose}
        open={this.state.open}
      />
    );
  }
}

export default editRoles;
