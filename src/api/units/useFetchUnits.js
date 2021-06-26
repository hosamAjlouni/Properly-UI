import store from "redux/store";
import { useEffect } from "react";
import { SET_UNITS } from "redux/units/actions";

const useFetchUnits = () => {
  const url = "http://127.0.0.1:8000/api/units/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(SET_UNITS(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

export default useFetchUnits;
