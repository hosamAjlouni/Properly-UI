const SET_PROPERTIES = (properties) => {
  return {
    type: "SET_PROPERTIES",
    payload: properties,
  };
};

const SET_FORM_FIELD = (fieldName, value) => {
  return {
    type: "SET_FORM_FIELD",
    payload: {fieldName, value},
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

export { SET_PROPERTIES, SET_FORM_FIELD, CLEAR_FORM, TOGGLE_DIALOG };
