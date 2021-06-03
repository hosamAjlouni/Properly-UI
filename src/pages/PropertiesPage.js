import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import PropertiesGrid from "../components/Properties/PropertiesGrid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
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
        <Fab color="secondary" aria-label="add">
          <EditIcon />
        </Fab>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
};

export default PropertiesPage;
