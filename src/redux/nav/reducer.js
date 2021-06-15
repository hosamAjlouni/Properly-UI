const initialState = {
  open: false,
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, open: !state.open };
    default:
      return { ...state };
  }
};

export default navReducer;
