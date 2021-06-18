import store from "redux/store";
const leases = store.getState().leases;

const isOccupied = (unit, start = new Date(), end = new Date()) => {
  const unitLeases = leases.filter((lease) => lease.unit === unit.id);
  const activeLeases = unitLeases.filter((lease) => {
    let startsBefore = (lease.start <= start)
    let startsAfter = (lease.start >= end)
    let startsWithin = (!startsBefore && !startsAfter)
    let endsBefore = (lease.end <= start)
    let endsAfter = (lease.end >= end)
    let endsWithin = (!endsBefore && !endsAfter)


    const isActive = false;
    isActive = (start <= lease.start && end >= lease.start) || ()
    return 0;
  });
};

export default isOccupied;
