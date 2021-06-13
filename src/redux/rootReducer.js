import { combineReducers } from "redux";

import propertiesReducer from "../components/Properties/state/reducer";
import drawerReducer from "../common/Nav/state/reducer";
import alertReducer from "../common/alert/state/reducer";

const rootReducer = combineReducers({
  drawer: drawerReducer,
  alert: alertReducer,
  properties: propertiesReducer,
});

export default rootReducer;
