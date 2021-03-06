import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const mapStateToProps = (state) => {
  return {
    units: state.units.items,
  };
};

const PropertyOccupancy = ({ property }) => {
  const occupancy = property.occupancy;
  return (
    <React.Fragment>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="body1">
            {occupancy.occupied} - Occupied
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{occupancy.vacant} - Vacant</Typography>
        </Grid>
      </Grid>
      <LinearProgress
        value={
          ((occupancy.occupied / (occupancy.occupied + occupancy.vacant)) * 100) || 0
        }
        variant="determinate"
      ></LinearProgress>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, null)(PropertyOccupancy);
