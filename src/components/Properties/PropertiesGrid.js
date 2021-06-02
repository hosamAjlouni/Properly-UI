import { Grid } from "@material-ui/core";
import PropertyCard from "./PropertyCard";

const PropertiesGrid = () => {
  const properties = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid container spacing={2}>
      {properties.map((property, i) => (
        <Grid item xs="12" md="6" lg="4" key={i}>
          <PropertyCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default PropertiesGrid;
