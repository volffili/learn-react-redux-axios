import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton
} from "@material-ui/core";

import { Clear } from "@material-ui/icons";

export default ({ onCheckBoxClick, onDeleteClick, completed, text }) => (
  <ListItem>
    <Checkbox color="primary" onClick={onCheckBoxClick} checked={completed} />
    <ListItemText primary={text} align="center" />
    <ListItemSecondaryAction>
      <IconButton onClick={onDeleteClick}>
        <Clear />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);
