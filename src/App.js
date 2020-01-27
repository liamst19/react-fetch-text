import React from "react";
import "./App.css";
import JapaneseText from "./component.JapaneseText.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch Text Demo</h1>
      </header>
      <main>{<JapaneseText url="wagahai.json" />}</main>
      <footer className="App-footer">
        <h2><span>The footer is not where it should be.</span></h2>
      </footer>
    </div>
  );
}

export default App;
