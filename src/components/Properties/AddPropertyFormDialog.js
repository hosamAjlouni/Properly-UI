import React from "react";
import { connect } from "react-redux";
import { SET_ALERT } from "redux/alert/actions";
import {
  TOGGLE_DIALOG,
  SET_FORM_FIELD_ERROR,
  CLEAR_FORM,
} from "redux/properties/actions";
import {
  Fab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddPropertyForm from "./AddPropertyForm";
import formatDate from "utils/formatDate";

const mapStateToProps = (state) => {
  return {
    form: state.properties.form,
    open: state.properties.formDialog.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDialog: () => dispatch(TOGGLE_DIALOG()),
    setAlert: (type, text) => dispatch(SET_ALERT(type, text)),
    setFormFieldError: (fieldName, error) =>
      dispatch(SET_FORM_FIELD_ERROR(fieldName, error)),
    clearForm: () => dispatch(CLEAR_FORM()),
  };
};

const AddPropertyFormDialog = ({
  open,
  toggleDialog,
  setAlert,
  form,
  clearForm,
  setFormFieldError
}) => {
  const handleSubmit = () => {
    const url = "http://127.0.0.1:8000/api/properties/";
    const body = {
      name: form.name.value,
      year_built: formatDate(form.yearBuilt.value),
      description: form.description.value,
      user: 1,
    };
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 201) {
          clearForm();
          toggleDialog();
          setAlert("success", "Property has been added successfully");
        } else if (response.status === 400) {
          response.json().then((data) => {
            Object.keys(data).forEach(key => {
              setFormFieldError(key, ...data[key])
            })
          });
        }
      })
      .catch((error) => {
        console.log("this is an error");
      });
  };

  return (
    <div>
      <Fab variant="round" color="primary" onClick={toggleDialog}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Property</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new property, please enter all required information.
          </DialogContentText>

          <AddPropertyForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Property
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPropertyFormDialog);
