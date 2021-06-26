const SET_PROPERTIES = (properties) => {
  return {
    type: "SET_PROPERTIES",
    payload: properties,
  };
};

const SET_FORM_FIELD_VALUE = (fieldName, value) => {
  return {
    type: "SET_FORM_FIELD_VALUE",
    payload: { fieldName, value },
  };
};

const SET_FORM_FIELD_ERROR = (fieldName, error) => {
  return {
    type: "SET_FORM_FIELD_ERROR",
    payload: { fieldName, error },
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
  SET_PROPERTIES,
  SET_FORM_FIELD_VALUE,
  SET_FORM_FIELD_ERROR,
  CLEAR_FORM,
  TOGGLE_DIALOG,
};
