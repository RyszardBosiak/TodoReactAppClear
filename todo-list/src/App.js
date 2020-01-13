import React from "react";
import List from "./components/List/List";
import AppHeader from "./components/AppHeader/AppHeader";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <AppHeader content="TODO List"></AppHeader>
      <List></List>
    </div>
  );
}

export default App;
