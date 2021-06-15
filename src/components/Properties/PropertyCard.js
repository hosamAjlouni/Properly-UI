import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomizedDialogs from "./PropertyDetailsDialog";

const useStyles = makeStyles({
  CardContent: {
    height: "100px",
  },
});

const PropertyCard = ({ property, i }) => {
  const classes = useStyles();
  return (
    <Card
    // variant="outlined"
    >
      <CardHeader
        title={property.name.charAt(0).toUpperCase() + property.name.slice(1)}
      />

      <CardContent className={classes.CardContent}>
        <Typography>Card content goes here</Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <Grid container justify="space-between">
          <Grid item>
            <ButtonGroup>
              <Button color="primary" variant="contained">
                Submit
              </Button>
              <Button color="secondary" variant="contained">
                Cancel
              </Button>
            </ButtonGroup>
          </Grid>

          <Grid item>
            <CustomizedDialogs property={property} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
