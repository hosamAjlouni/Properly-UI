import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedDialogs from "./PropertyDetailsDialog";

const useStyles = makeStyles({
  Card: {
    height: "350px",
  },
  title: {
    display: "inline",
    marginLeft: "5px",
  },
});

const PropertyCard = ({ property }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <CardContent>
        <Typography className={classes.title} variant="h6">
          {property.name.toUpperCase()}
        </Typography>
      </CardContent>

      <Divider />

      <CardActions>
        <ButtonGroup>
          <Button color="primary" variant="contained">
            Submit
          </Button>
          <Button color="secondary" variant="contained">
            Cancel
          </Button>
          <CustomizedDialogs property={property} />
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
