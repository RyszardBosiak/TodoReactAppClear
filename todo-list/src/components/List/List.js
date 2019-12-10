import React from "react";
import "./List.scss";

const initialList = [
  { id: "a", name: "Water plants", status: "done" },
  { id: "b", name: "Buy something to eat", status: "in-progress" },
  { id: "c", name: "Book flight", status: "in-preparation" }
];

// function component
const List = () => {
  const [value, setValue] = React.useState(""); // Hook
  const [list, setList] = React.useState(initialList); // Hook

  const handleChange = event => {
    setValue(event.target.value);
  };

  // add element to the list
  const handleSubmit = event => {
    // prevent to add empty list elements
    if (value) {
      setList(
        list.concat({ id: Date.now(), name: value, status: "inPreparation" })
      );
    }

    // clear input value after added new element to the list
    setValue("");

    event.preventDefault();
  };

  // remove current element from the list
  const handleClick = id => {
    console.log(id);
    setList(list.filter(item => item.id !== id));
  };

  // adding status to current element of the list
  const setElementStatus = (id, status) => {
    setList(
      list.map(item => (item.id === id ? { ...item, status: status } : item))
    );
  };

  return (
    <div className="to-do-list-wrapper">
      <form className="to-do-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="to-do-form-input"
        />
        <button type="submit" className="button to-do-form-button">
          Add Item
        </button>
      </form>

      <ul className="to-do-list">
        {list.map(item => (
          <li className={"to-do-list-element " + item.status} key={item.id}>
            <span className="to-do-list-text">{item.name}</span>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "in-preparation")}
              className="button to-do-list-button"
            >
              In preparation
            </button>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "in-progress")}
              className="button to-do-list-button"
            >
              In progress
            </button>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "done")}
              className="button to-do-list-button"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              className="button to-do-list-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
