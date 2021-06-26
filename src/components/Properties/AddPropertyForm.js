import { connect } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import DateInput from "components/Common/Inputs/DateInput";
import { SET_FORM_FIELD_VALUE } from "redux/properties/actions";

const mapStateToProps = (state) => {
  return {
    form: state.properties.form
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormFieldValue: (fieldName, value) =>
      dispatch(SET_FORM_FIELD_VALUE(fieldName, value)),
  };
};

const AddPropertyForm = ({ form, setFormFieldValue }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            name="name"
            value={form.name.value}
            onChange={(e) => setFormFieldValue(e.target.name, e.target.value)}
            autoFocus
            label="Property Name"
            type="text"
            fullWidth
            autoComplete={false}
            autoCorrect={false}
            error={form.name.error}
            helperText={form.name.error}
          />
        </Grid>

        <Grid item xs={12}>
          <DateInput
            date={form.yearBuilt.value}
            setFormField={setFormFieldValue}
            label="Year Built"
            error={form.yearBuilt.error}
            helperText={form.yearBuilt.error}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="description"
            value={form.description.value}
            onChange={(e) => setFormFieldValue(e.target.name, e.target.value)}
            multiline
            rows={6}
            label="Description"
            type="Textarea"
            fullWidth
            error={form.description.error}
            helperText={form.description.error}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPropertyForm);
