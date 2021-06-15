import { combineReducers } from "redux";

import propertiesReducer from "redux/properties/reducer";
import navReducer from "redux/nav/reducer";
import alertReducer from "redux/alert/reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  alert: alertReducer,
  properties: propertiesReducer,
});

export default rootReducer;
