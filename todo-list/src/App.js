import React from "react";
import "./styles/App.scss";
import List from "./components/List/List";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader content="TODO List"></AppHeader>
      <List></List>
    </div>
  );
}

export default App;
