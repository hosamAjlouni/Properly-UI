import { connect } from "react-redux";
import { Grid, Typography, Button } from "@material-ui/core";
import PropertyCard from "./PropertyCard";
import React from "react";
import { SET_FETCH_REQUIRED } from "redux/properties/actions";
import RefreshIcon from "@material-ui/icons/Refresh";

const mapStateToProps = (state) => {
  return {
    properties: state.properties,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requireFetch: () => dispatch(SET_FETCH_REQUIRED(true)),
  };
};

const PropertiesGrid = ({ properties, requireFetch }) => {
  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Typography variant="h4">Properties</Typography>
        <Button variant="outlined" color="primary" onClick={requireFetch}>
          <RefreshIcon />
        </Button>
      </Grid>

      <br />

      <Grid container spacing={3}>
        {properties.items.map((property) => (
          <Grid item xs={12} md={6} lg={4} key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesGrid);
