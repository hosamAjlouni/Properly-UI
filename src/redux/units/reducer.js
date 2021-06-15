const initialState = {
  units: [],
  formDialog: {
    open: false,
  },
  form: {
    // name: "",
    // yearBuilt: new Date(),
    // description: "",
  },
};

const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UNITS":
      return {
        ...state,
        units: action.payload,
      };

    case "SET_FORM_FIELD":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.fieldName]: action.payload.value,
        },
      };
    case "CLEAR_FORM":
      return {
        ...state,
        form: {
          name: "",
          yearBuilt: new Date(),
          description: "",
        },
      };

    case "TOGGLE_DIALOG":
      return {
        ...state,
        formDialog: {
          open: !state.formDialog.open,
        },
      };

    default:
      return { ...state };
  }
};

export default unitsReducer;
