import React from "react";
import { connect } from "react-redux";
import { toggleDrawerAction } from "../../redux/actions";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleIcon from "@material-ui/icons/People";

const mapStateToProps = (state) => {
  return {
    open: state.drawer.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleDrawerAction()),
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
