import TopBar from "./TopBar";
import SideBar from "./SideBar";
import React from "react";

const TopSideBars = () => {

  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = () => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open: !state.open });
  };

  return (
    <div>
      <TopBar toggleDrawer={toggleDrawer} />
      <SideBar isOpen={state.open} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default TopSideBars;
