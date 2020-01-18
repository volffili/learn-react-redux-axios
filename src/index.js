import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

//MATERIAL-UI
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

//REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

const greenTheme = createMuiTheme({ palette: { primary: green } });

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={greenTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
