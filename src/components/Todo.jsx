import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton
} from "@material-ui/core";

import { Clear, CheckBox } from "@material-ui/icons";

export default ({ onCheckBoxClick, onDeleteClick, completed, text }) => (
  <ListItem>
    <CheckBox color="primary" onClick={onCheckBoxClick} checked={completed} />
    <ListItemText primary={text} align="center">
      <ListItemSecondaryAction>
        <IconButton>
          <Clear />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemText>
  </ListItem>
);
