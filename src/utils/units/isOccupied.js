import store from "redux/store";
import isActive from "utils/leases/isActive";

const isOccupied = (unit, start = new Date(), end = new Date()) => {
  const unitLeases = store.getState().leases.items.filter((lease) => lease.unit === unit.id);
  const activeLeases = unitLeases.filter((lease) => isActive(lease));
  return activeLeases.length ? true : false;
};

export default isOccupied;
