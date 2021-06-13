const initialState = {
  type: "",
  text: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
      };
    case "CLEAR_ALERT":
      return {
        ...state,
        type: "",
        text: "",
      };
    default:
      return { ...state };
  }
};

export default alertReducer;
