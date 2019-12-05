import React from "react";
import "./App.scss";
import List from "./components/List/index";
import AppHeader from "./components/AppHeader/index";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <List></List>
    </div>
  );
}

export default App;
