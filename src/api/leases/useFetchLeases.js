import store from "redux/store";
import { useEffect } from "react";
import { SET_LEASES, SET_FETCH_REQUIRED } from "redux/leases/actions";
import { SET_ALERT } from "redux/alert/actions";

const useFetchUnits = (fetchRequired) => {
  const url = "http://127.0.0.1:8000/api/leases/";

  useEffect(() => {
    if (fetchRequired) {
      store.dispatch(SET_FETCH_REQUIRED(false));
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          store.dispatch(SET_LEASES(data));
          store.dispatch(
            SET_ALERT("success", "Units Loaded Successfully")
          );
        })
        .catch((err) => {
          store.dispatch(SET_ALERT("error", err.message));
        });
    }
  }, [fetchRequired]);
};

export default useFetchUnits;
