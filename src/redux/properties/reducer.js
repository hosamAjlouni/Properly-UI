const initialState = {
  items: [],
  fetchRequired: true,
  formDialog: {
    open: false,
  },
  form: {
    name: "",
    yearBuilt: new Date(),
    description: "",
  },
};

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROPERTIES":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_FETCH_REQUIRED":
      return {
        ...state,
        fetchRequired: action.payload,
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

export default propertiesReducer;
