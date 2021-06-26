import store from "redux/store";
import { useEffect } from "react";
import { SET_LEASES } from "redux/leases/actions";

const useFetchLeases = () => {
  const url = "http://127.0.0.1:8000/api/leases/";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch(SET_LEASES(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
};

export default useFetchLeases;
