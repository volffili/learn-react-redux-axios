const todos = (state = [], action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todos;
