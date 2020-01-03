import React from "react";
import List from "./components/List/List";
import AppHeader from "./components/AppHeader/AppHeader";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <AppHeader content="TODO List"></AppHeader>
      <List
        defaultList={[
          { id: "a", name: "Water plants", status: "done" },
          { id: "b", name: "Buy something to eat", status: "in-progress" },
          { id: "c", name: "Book flight", status: "in-preparation" }
        ]}
      ></List>
    </div>
  );
}

export default App;
