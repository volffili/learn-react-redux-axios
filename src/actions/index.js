import Axios from "axios";

const api = Axios.create({
  baseURL: "https:/my-json-server.typicode.com/volffili/learn-react-redux-axios"
});

export const setTodos = todos => {
  return {
    type: "SET_TODOS",
    payload: todos
  };
};

export const addTodo = todo => {
  return {
    type: "ADD_TODO",
    payload: todo
  };
};

export const fetchNewTodo = title => {
  return dispatch => {
    api.post("/todos", { title, completed: "false" }).then(res => {
      dispatch(addTodo(res.data));
    });
  };
};

export const fetchTodos = () => {
  return dispatch => {
    api.get("/todos").then(res => {
      dispatch(setTodos(res.data));
    });
  };
};
