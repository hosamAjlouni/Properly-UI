import { Grid, TextField } from "@material-ui/core";
import DateInput from "../Inputs/DateInput";

const AddPropertyForm = ({state, setState}) => {

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            value={state.name}
            onChange={(e) => {
              setState((state) => ({
                ...state,
                name: e.target.value,
              }));
            }}
            autoFocus
            label="Property Name"
            type="text"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <DateInput date={state.date} setState={setState} label="Year Built" />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={state.description}
            onChange={(e) => {
              setState((state) => ({
                ...state,
                description: e.target.value,
              }));
            }}
            multiline
            rows={6}
            label="Description"
            type="Textarea"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPropertyForm;
