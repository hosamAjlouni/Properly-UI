import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomizedDialogs from "./PropertyDetailsDialog";

const useStyles = makeStyles({
  CardContent: {
    height: "100px",
  },
});

const mapStateToProps = (state) => {
  return {
    units: state.units.items,
  };
};

const PropertyCard = ({ property, units }) => {
  const classes = useStyles();
  units = units.filter((unit) => unit.property === property.id);

  return (
    <Card>
      <CardHeader
        title={property.name.charAt(0).toUpperCase() + property.name.slice(1)}
      />

      <CardContent className={classes.CardContent}>
        <Typography variant="h6">Test</Typography>
      </CardContent>
      <Grid style={{padding: '5px 10px'}} container justify="space-between">
        <Grid item>
          <Typography variant='body1'>Occupied</Typography>
        </Grid>
        <Grid item>
          <Typography variant='body1'>Vacant</Typography>
        </Grid>
      </Grid>
      <LinearProgress
        size={60}
        value={(7 / 10) * 100}
        variant="determinate"
      ></LinearProgress>

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
