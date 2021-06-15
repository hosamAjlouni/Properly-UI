import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import PropertyCard from "./PropertyCard";
import React from "react";
import useFetchProperties from "./useFetchProperties";

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  };
};

const PropertiesGrid = ({ properties }) => {
  useFetchProperties("http://127.0.0.1:8000/api/properties/");

  return (
    <React.Fragment>
      <Typography variant="h5">Properties</Typography>
      <br />
      
      <Grid container spacing={3}>
        {properties.map((property, index) => (
          <Grid item xs={12} md={6} lg={4} key={property.id}>
            <PropertyCard property={property} i={index} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, null)(PropertiesGrid);
