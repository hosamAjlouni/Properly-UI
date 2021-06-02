import { Typography } from "@material-ui/core";
import React from "react";
import PropertiesGrid from "../components/Properties/PropertiesGrid";

const PropertiesPage = () => {
  return (
    <React.Fragment>
      <Typography  variant="h4">Properties</Typography>
      <br />
      <PropertiesGrid />
    </React.Fragment>
  );
};

export default PropertiesPage;
