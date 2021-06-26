import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import PropertyCard from "./PropertyCard";
import React from "react";

const mapStateToProps = (state) => {
  return {
    properties: state.properties,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const PropertiesGrid = ({ properties }) => {
  return (
    <React.Fragment>
      <Typography variant="h4">Properties</Typography>

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
