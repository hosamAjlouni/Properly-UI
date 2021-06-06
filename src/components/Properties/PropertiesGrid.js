import { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import PropertyCard from "./PropertyCard";
import React from "react";

const PropertiesGrid = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/properties/")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
      })
      .catch((err) => {
        console.log(err);
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

export default PropertiesGrid;
