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

export default function AddPropertyFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState({
    name: "",
    date: new Date(),
    description: "",
    user: "admin",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    fetch("http://127.0.0.1:8000/api/properties/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        name: state.name,
        year_built: state.date,
        description: state.description,
        user: state.user,
      },
    })
      .then((res) => {
        console.log('respoooonseeeeeee');
        console.log(res);
        res.json();
      })
      .then((data) => {
        console.log("dataaaaaaaaaaaa");
        console.log(data);
      })
      .catch((error) => {
        console.log("errrrrrrrrrrrrr");
        console.log(error);
      });
  };

  return (
    <div>
      <Fab variant="round" color="primary" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Property</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a new property, please enter all required information.
          </DialogContentText>

          <AddPropertyForm state={state} setState={setState} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
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
