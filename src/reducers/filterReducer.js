const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "APPLY_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const filterAction = (filterString) => {
  return { type: "APPLY_FILTER", payload: filterString };
};

export default filterReducer;
