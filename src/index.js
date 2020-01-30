import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import JapaneseText from "./component.JapaneseText.js";
import * as serviceWorker from "./serviceWorker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch Text Demo</h1>
      </header>
      <main>{<JapaneseText url="wagahai.json" />}</main>
      <footer className="App-footer">
        <h2>
          <span>This is the footer.</span>
        </h2>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// serviceWorker.unregister();
