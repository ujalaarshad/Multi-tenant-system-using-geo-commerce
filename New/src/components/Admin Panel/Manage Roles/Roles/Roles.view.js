import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Drawer from "../../../Core/Layout/AdminSideBar/AdminSideBar";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { Grid } from "@material-ui/core";
import TablePaginationActions from "./TablePaginationActions";
import DialogView from "./DeleteDIalog";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  Paperroot: {
    marginTop: theme.spacing(20),
    overflowX: "auto",
    width: "50rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      marginRight: theme.spacing(5)
    }
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  }
}));

const RolesView = props => {
  const classes = useStyles();
  const {
    rows,
    page,
    rowsPerPage,
    handleEditClick,
    handleClickOpen,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
    handleClose,
    open
  } = props;
  return (
    <div className={classes.root}>
      <Drawer />
      <Paper className={classes.Paperroot}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Roles</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={handleEditClick}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton onClick={handleClickOpen}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { "aria-label": "Rows per page" },
                        native: true
                      }}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <DialogView open={open} handleClose={handleClose} />
    </div>
  );
};

export default RolesView;
