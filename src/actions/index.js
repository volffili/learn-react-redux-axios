import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:3001/"
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

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const replaceTodo = id => {
  return {
    type: "REPLACE_TODO",
    payload: id
  };
};

export const apiChangeStatusTodo = (id, completed) => {
  return dispatch => {
    api.patch("/todos/" + id, { completed }).then(res => {
      console.log(res.data);
      dispatch(replaceTodo(res.data));
    });
  };
};

export const apiDeleteTodo = id => {
  return dispatch => {
    api.delete("/todos/" + id).then(res => {
      dispatch(deleteTodo(id));
    });
  };
};

export const apiNewTodo = title => {
  return dispatch => {
    api.post("/todos", { title, completed: false }).then(res => {
      dispatch(addTodo(res.data));
    });
  };
};

export const apiFetchTodos = () => {
  return dispatch => {
    api.get("/todos").then(res => {
      dispatch(setTodos(res.data));
    });
  };
};
