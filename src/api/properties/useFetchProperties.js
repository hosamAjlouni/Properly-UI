import { useEffect } from "react";
import store from "redux/store";
import { SET_PROPERTIES, SET_FETCH_REQUIRED } from "redux/properties/actions";
import { SET_ALERT } from "redux/alert/actions";

const useFetchProperties = (fetchRequired) => {
  const url = "http://127.0.0.1:8000/api/properties/";

  useEffect(() => {
    if (fetchRequired) {
      store.dispatch(SET_FETCH_REQUIRED(false));
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          store.dispatch(SET_PROPERTIES(data));
          store.dispatch(
            SET_ALERT("success", "Properties Loaded Successfully")
          );
        })
        .catch((err) => {
          store.dispatch(SET_ALERT("error", err.message));
        });
    }
  }, [fetchRequired]);
};

export default useFetchProperties;
