import store from "redux/store";
import { useEffect } from "react";
import { SET_PROPERTIES } from "redux/properties/actions";

const useFetchProperties = () => {
  const url = "http://127.0.0.1:8000/api/properties/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(SET_PROPERTIES(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

export default useFetchProperties;
