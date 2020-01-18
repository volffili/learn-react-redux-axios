import React from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import { fetchNewTodo } from "../actions/";

export default () => {
  const dispatch = useDispatch();
  let title;

  const newTodo = e => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(fetchNewTodo(title));
  };

  return (
    <form onSubmit={newTodo}>
      <TextField onChange={e => (title = e.target.value)} label="Add Todo" />
    </form>
  );
};
