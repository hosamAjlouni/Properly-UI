import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PeopleIcon from "@material-ui/icons/People";

import { Link } from "react-router-dom";
import React from "react";

const SideBar = ({ isOpen, toggleDrawer }) => {
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
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
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
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {["Sample", "Sample", "Sample"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer open={isOpen} onClose={toggleDrawer()} onOpen={toggleDrawer()}>
        {list}
      </SwipeableDrawer>
    </div>
  );
};

export default SideBar;
