import { combineReducers } from "redux";

import propertiesReducer from "redux/properties/reducer";
import unitsReducer from "redux/units/reducer";
import leasesReducer from "redux/leases/reducer";
import navReducer from "redux/nav/reducer";
import alertReducer from "redux/alert/reducer";

const rootReducer = combineReducers({
  nav: navReducer,
  alert: alertReducer,
  properties: propertiesReducer,
  units: unitsReducer,
  leases: leasesReducer
});

export default rootReducer;
