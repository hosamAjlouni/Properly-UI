const SET_LEASES = (leases) => {
  return {
    type: "SET_LEASES",
    payload: leases,
  };
};

const SET_FORM_FIELD = (fieldName, value) => {
  return {
    type: "SET_FORM_FIELD",
    payload: { fieldName, value },
  };
};

const CLEAR_FORM = () => {
  return {
    type: "CLEAR_FORM",
  };
};

export { SET_LEASES, SET_FORM_FIELD, CLEAR_FORM };
