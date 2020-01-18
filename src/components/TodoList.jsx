import React, { useEffect } from "react";
import Todo from "./Todo";
import { List, Divider } from "@material-ui/core";
import { fetchTodos } from "../actions/";
import { useSelector, useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <List>
      <Divider />
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <Todo text={todo.title} completed={todo.completed} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};
