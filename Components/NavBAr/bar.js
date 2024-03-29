import React from "react";
import { link } from "react-router";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink } from "react-router-dom";

const headerstyle = {
  background: "#224e6a"
};

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    size: "medium",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  title3: {
    marginTop: theme.spacing(0.6),
    display: "none",
    size: "medium",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  root: {
    display: "flex"
  },
  search: {
    marginTop: theme.spacing(0.6),
    position: "relative",
    size: "medium",
    borderRadius: theme.shape.borderRadius,

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    marginTop: theme.spacing(0.6),
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavLink
        to="/manageInventory"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem onClick={handleMenuClose}>Manage Inventory</MenuItem>
      </NavLink>

      <NavLink
        to="/managesales"
        style={{ color: "black", textDecoration: "none" }}
      >
        <MenuItem onClick={handleMenuClose}>Manage Sales</MenuItem>
      </NavLink>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button
          aria-label="Show 4 new mails"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
          <p>Manage</p>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button aria-label="Show 4 new mails" color="inherit">
          <p>Market</p>
        </Button>
      </MenuItem>

      <NavLink to="/Pricing" style={{ color: "black", textDecoration: "none" }}>
        <MenuItem>
          <Button aria-label="Show 4 new mails" color="inherit">
            <p>Pricing</p>
          </Button>
        </MenuItem>
      </NavLink>
      <MenuItem>
        <Button aria-label="Show 11 new notifications" color="inherit">
          <p>Login</p>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <p>Register</p>
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={headerstyle}>
        <Toolbar>
          <Button
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </Button>
          <NavLink
            to="/Home"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button className={classes.search} color="inherit" noWrap>
              Home
            </Button>
          </NavLink>

          <Button
            className={classes.title3}
            color="inherit"
            noWrap
            onClick={handleProfileMenuOpen}
          >
            Manage
          </Button>

          <Button className={classes.title3} color="inherit" noWrap>
            Market
          </Button>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <NavLink
              to="/Pricing"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button size="medium" color="inherit">
                Pricing
              </Button>
            </NavLink>
            <Button size="medium" color="inherit">
              Login
            </Button>
            <NavLink
              to="/Register"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Button color="inherit" size="medium">
                Register
              </Button>
            </NavLink>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
