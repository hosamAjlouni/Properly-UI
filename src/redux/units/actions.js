const SET_UNITS = (units) => {
  return {
    type: "SET_UNITS",
    payload: units,
  };
};

const SET_FETCH_REQUIRED = (required) => {
  return {
    type: "SET_FETCH_REQUIRED",
    payload: required,
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

const TOGGLE_DIALOG = () => {
  return {
    type: "TOGGLE_DIALOG",
  };
};

export {
  SET_UNITS,
  SET_FETCH_REQUIRED,
  SET_FORM_FIELD,
  CLEAR_FORM,
  TOGGLE_DIALOG,
};
