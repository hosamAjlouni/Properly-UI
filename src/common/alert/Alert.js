import React from "react";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab/";
import Snackbar from "@material-ui/core/Snackbar";

const Alert = ({ alert, setAlert }) => {
  const handleClose = () => {
    setAlert({
      alertType: "",
      alertText: "",
    });
  };

  return (
    <React.Fragment>
      {alert.alertText && (
        <Snackbar
          open={alert.alertText ? true : false}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <MuiAlert
            style={{ position: "fixed", bottom: 0 }}
            fullWidth
            variant="filled"
            severity={alert.alertType || "info"}
          >
            <AlertTitle>{alert.alertType || "Info"}</AlertTitle>
            {alert.alertText || "Alert"}
          </MuiAlert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};

export default Alert;
