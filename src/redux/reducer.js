import { combineReducers } from "redux";

const drawerState = {
  open: false,
};

const drawerReducer = (state = drawerState, action) => {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return { ...state, open: !state.open };
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  drawer: drawerReducer,
});

export default rootReducer;
