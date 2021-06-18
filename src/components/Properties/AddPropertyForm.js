import { connect } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import DateInput from "components/Common/Inputs/DateInput";
import { SET_FORM_FIELD } from "redux/properties/actions";

const mapStateToProps = (state) => {
  return {
    name: state.properties.form.name,
    yearBuilt: state.properties.form.yearBuilt,
    description: state.properties.form.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormField: (fieldName, value) =>
      dispatch(SET_FORM_FIELD(fieldName, value)),
  };
};

const AddPropertyForm = ({ name, yearBuilt, description, setFormField }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            name="name"
            value={name}
            onChange={(e) => setFormField(e.target.name, e.target.value)}
            autoFocus
            label="Property Name"
            type="text"
            fullWidth
            autoComplete={false}
            autoCorrect={false}
          />
        </Grid>

        <Grid item xs={12}>
          <DateInput
            date={yearBuilt}
            setFormField={setFormField}
            label="Year Built"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="description"
            value={description}
            onChange={(e) => setFormField(e.target.name, e.target.value)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddPropertyForm);
