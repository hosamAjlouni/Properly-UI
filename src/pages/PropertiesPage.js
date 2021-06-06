import React from "react";
import PropertiesGrid from "../components/Properties/PropertiesGrid";
import AddPropertyFormDialog from "../components/Properties/AddPropertyFormDialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const PropertiesPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PropertiesGrid />
      <div className={classes.fab}>
        <AddPropertyFormDialog></AddPropertyFormDialog>
      </div>
    </React.Fragment>
  );
};

export default PropertiesPage;
