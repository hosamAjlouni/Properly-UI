import isPast from "./isPast";
import isActive from "./isActive";
import isFuture from "./isFuture";

const leaseState = (lease) => {
  if (isPast(lease)) {
    return "past";
  } else if (isActive(lease)) {
    return "active";
  } else if (isFuture(lease)) {
    return "future";
  }

  return "something went wrong";
};

export default leaseState;
