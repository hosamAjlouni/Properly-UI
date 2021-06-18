const isFuture = (lease) => {
  const isFuture = new Date(lease.start) > new Date();

  return isFuture;
};

export default isFuture;
