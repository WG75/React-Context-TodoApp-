import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import App from "./App";
import AppProvider from "./contexts/app";
import * as serviceWorker from "./serviceWorker";

class Root extends React.Component {
  render() {
    return (
      <AppProvider>
        <App />
      </AppProvider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
