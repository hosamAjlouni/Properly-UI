import React from "react";
import { useState } from "react";
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
import formatDate from "../../utils/formatDate";

export default function AddPropertyFormDialog({ setAlert }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState("");
  const [user] = useState(1);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = () => {
    const url = "http://127.0.0.1:8000/api/properties/";
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        year_built: formatDate(date),
        description: description,
        user: user,
      }),
    };

    fetch(url, options)
      .then((res) => {
        if (res.ok) {
          setName("");
          setDate(new Date());
          setDescription("");
          toggleDialog();
          setAlert({
            alertType: 'success',
            alertText: 'Property has been added successfully'
          })
        }

        return res.json();
      })
      .then((data) => {})
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

          <AddPropertyForm
            state={{ name, date, description }}
            setState={{ setName, setDate, setDescription }}
          />
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
}
