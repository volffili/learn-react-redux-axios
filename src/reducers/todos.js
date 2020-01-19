const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_TODOS":
      return payload;
    case "ADD_TODO":
      return [...state, payload];
    case "DELETE_TODO":
      return state.filter(todo => todo.id != payload);
    case "REPLACE_TODO":
      return state.map(todo => (todo.id == payload.id ? payload : todo));
    default:
      return state;
  }
};

export default todos;
