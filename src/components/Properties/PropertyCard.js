import {
  Grid,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedDialogs from "./PropertyDetailsDialog";

const useStyles = makeStyles({
  CardContent: {
    height: "100px",
  },
});

const PropertyCard = ({ property }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        title={property.name.charAt(0).toUpperCase() + property.name.slice(1)}
      />

      <CardContent className={classes.CardContent}>
        <Typography>Card content goes here</Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <Grid container justify='space-between'>
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
