import store from "redux/store";
import isOccupied from "utils/units/isOccupied";

const occupancyRate = (property) => {
  const occupancy = {
    occupied: 0,
    vacant: 0,
  };
  let units = store.getState().units.items.filter(
    (unit) => unit.property === property.id
  );
  units.forEach((unit) => {
    if (isOccupied(unit)) {
      occupancy.occupied = occupancy.occupied + 1;
    } else {
      occupancy.vacant = occupancy.vacant + 1;
    }
  });

  return occupancy;
};

export default occupancyRate;
