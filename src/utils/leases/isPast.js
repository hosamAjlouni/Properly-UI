const isPast = (lease) => {
  const isPast = new Date(lease.end) < new Date();
  
  return isPast;
};

export default isPast;
