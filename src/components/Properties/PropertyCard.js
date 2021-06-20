import { connect } from "react-redux";

// import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import PropertyOccupancy from "./PropertyOccupancy";

import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomizedDialogs from "./PropertyDetailsDialog";

const useStyles = makeStyles({
  CardContent: {
    // height: "100px",
  },
});

const mapStateToProps = (state) => {
  return {
    units: state.units.items,
  };
};

const PropertyCard = ({ property }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={property.name.charAt(0).toUpperCase() + property.name.slice(1)}
      />
      <Divider />
      <CardContent className={classes.CardContent}>
        <Typography variant="h6">Card</Typography>
        <Typography variant="h6">Content</Typography>
        <PropertyOccupancy property={property}></PropertyOccupancy>
      </CardContent>

      <Divider />

      <CardActions>
        <Grid container justify="space-between">
          <Grid item>
            <ButtonGroup></ButtonGroup>
          </Grid>

          <Grid item>
            <CustomizedDialogs property={property} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default connect(mapStateToProps, null)(PropertyCard);
