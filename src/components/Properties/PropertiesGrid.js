import { connect } from "react-redux";
import { SET_PROPERTIES } from "./state/actions";
import { SET_ALERT } from "../../common/alert/state/actions";
import { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import PropertyCard from "./PropertyCard";
import React from "react";

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProperties: (properties) => dispatch(SET_PROPERTIES(properties)),
    setAlert: (type, text) => dispatch(SET_ALERT(type, text)),
  };
};

const PropertiesGrid = ({ properties, setProperties, setAlert }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/properties/")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setAlert('success', 'Properties Loaded Successfully')
      })
      .catch((err) => {
        setAlert("error", err.message);
      });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h5">Properties</Typography>
      <br />

      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} md={6} lg={4} key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesGrid);
