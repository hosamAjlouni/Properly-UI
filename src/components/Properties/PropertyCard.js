import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";

const PropertyCard = ({ property }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Title</Typography>
        <Typography variant="body1">2</Typography>
        <Typography variant="body1">3</Typography>
        <Typography variant="body1">4</Typography>
        <Typography variant="body1">4</Typography>
        <Typography variant="body1">4</Typography>
        <Typography variant="body1">4</Typography>
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
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
