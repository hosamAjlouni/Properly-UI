const isActive = (lease, start = new Date(), end = new Date()) => {
  const isPast = new Date(lease.end) < new Date(start);
  const isFuture = new Date(lease.start) > new Date(end);
  const isActive = !isPast && !isFuture;
  return isActive;
};

export default isActive;
