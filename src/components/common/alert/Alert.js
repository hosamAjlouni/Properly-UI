import React from "react";
import { connect } from "react-redux";
import { CLEAR_ALERT } from "redux/alert/actions";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab/";
import Snackbar from "@material-ui/core/Snackbar";

const mapStateToProps = (state) => {
  return { alert: state.alert };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAlert: () => dispatch(CLEAR_ALERT()),
  };
};

const Alert = ({ alert, clearAlert }) => {
  return (
    <React.Fragment>
      {alert.text && alert.type && (
        <Snackbar
          open={alert.text ? true : false}
          autoHideDuration={3000}
          onClose={clearAlert}
        >
          <MuiAlert
            style={{ position: "fixed", bottom: 0 }}
            variant="filled"
            severity={alert.type || "info"}
          >
            <AlertTitle>{alert.type || "Info"}</AlertTitle>
            {alert.text || "Alert"}
          </MuiAlert>
        </Snackbar>
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
