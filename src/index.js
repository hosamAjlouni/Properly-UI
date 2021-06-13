import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import withTheme from "./theme/Theme";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const ThemedApp = withTheme(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemedApp />
    </Router>
  </Provider>,
  document.getElementById("root")
);
