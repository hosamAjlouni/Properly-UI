const SET_ALERT = (type, text) => {
  return {
    type: "SET_ALERT",
    payload: {
      type: type,
      text: text,
    },
  };
};

const CLEAR_ALERT = () => {
  return {
    type: "CLEAR_ALERT",
  };
};

export { CLEAR_ALERT, SET_ALERT };
