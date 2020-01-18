import React from "react";
import { Paper } from "@material-ui/core";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default () => {
  return (
    <Paper>
      <AddTodo />
      <TodoList />
    </Paper>
  );
};
