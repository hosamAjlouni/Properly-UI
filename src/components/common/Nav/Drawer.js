import React from "react";
import { connect } from "react-redux";
import { TOGGLE_DRAWER } from "redux/nav/actions";
import { Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleIcon from "@material-ui/icons/People";

const mapStateToProps = (state) => {
  return {
    open: state.nav.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(TOGGLE_DRAWER()),
  };
};

const Drawer = (props) => {
  const firstList = [
    {
      label: "Properties",
      url: "/properties",
      icon: <LocationCityIcon />,
    },
    {
      label: "Contacts",
      url: "/contacts",
      icon: <PeopleIcon />,
    },
  ];

  const list = (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer}
      onKeyDown={props.toggleDrawer}
    >
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={"Home"} secondary="Dashboard" />
      </ListItem>

      <Divider />

      <List>
        {firstList.map((item, index) => (
          <ListItem button component={Link} to={item.url} key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {firstList.map((item, index) => (
          <ListItem button component={Link} to={item.url} key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.open}
        onClose={props.toggleDrawer}
        onOpen={props.toggleDrawer}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
