import React from "react";
import { connect } from "react-redux";
import { SET_ALERT } from "redux/alert/actions";
import { TOGGLE_DIALOG, SET_FORM_FIELD, CLEAR_FORM, SET_FETCH_REQUIRED } from "redux/properties/actions";
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
    name: state.properties.form.name,
    yearBuilt: state.properties.form.yearBuilt,
    description: state.properties.form.description,
    open: state.properties.formDialog.open,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDialog: () => dispatch(TOGGLE_DIALOG()),
    setAlert: (type, text) => dispatch(SET_ALERT(type, text)),
    setFormField: (fieldName, value) => dispatch(SET_FORM_FIELD()),
    clearForm: () => dispatch(CLEAR_FORM()),
    requireFetch: () => dispatch(SET_FETCH_REQUIRED(true))
  };
};

const AddPropertyFormDialog = ({
  open,
  toggleDialog,
  setAlert,
  name,
  yearBuilt,
  description,
  clearForm,
  requireFetch
}) => {
  const handleSubmit = () => {
    const url = "http://127.0.0.1:8000/api/properties/";
    const body = {
      name: name,
      year_built: formatDate(yearBuilt),
      description: description,
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
        if (response.ok) {
          toggleDialog();
          clearForm();
          setAlert("success", "Property has been added successfully");
          requireFetch();
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error.message);
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
