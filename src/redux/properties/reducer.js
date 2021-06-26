const initialState = {
  items: [],
  formDialog: {
    open: false,
  },
  form: {
    name: {
      value: "",
      error: "",
    },
    yearBuilt: {
      value: new Date(),
      error: "",
    },
    description: {
      value: "",
      error: "",
    },
  },
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return {
        ...state,
        items: action.payload,
      };

    case "SET_FORM_FIELD_VALUE":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.fieldName]: {
            ...state.form[action.payload.fieldName],
            value: action.payload.value,
          },
        },
      };

    case "SET_FORM_FIELD_ERROR":
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.fieldName]: {
            ...state.form[action.payload.fieldName],
            error: action.payload.error,
          },
        },
      };

    case "CLEAR_FORM":
      return {
        ...state,
        form: {
          name: {
            value: "",
            error: "",
          },
          yearBuilt: {
            value: new Date(),
            error: "",
          },
          description: {
            value: "",
            error: "",
          },
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

export default propertiesReducer;
