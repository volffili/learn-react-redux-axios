import React, { useEffect } from "react";
import Todo from "./Todo";
import { List, Divider } from "@material-ui/core";
import { apiFetchTodos, apiDeleteTodo, apiChangeStatusTodo } from "../actions/";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  useEffect(() => {
    dispatch(apiFetchTodos());
  }, []);

  return (
    <List>
      <Divider />
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <Todo
            text={todo.title}
            completed={todo.completed}
            onDeleteClick={() => {
              dispatch(apiDeleteTodo(todo.id));
            }}
            onCheckBoxClick={() => {
              dispatch(apiChangeStatusTodo(todo.id, !todo.completed));
            }}
          />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};
