import React from "react";
import "./List.scss";
import ListItem from "../ListItem/ListItem";

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
        list.concat({ id: Date.now(), name: value, status: "in-preparation" })
      );
    }

    // clear input value after added new element to the list
    setValue("");

    event.preventDefault();
  };

  // remove current element from the list
  const removeElement = id => {
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
          <ListItem
            name={item.name}
            status={item.status}
            key={item.id}
            id={item.id}
            setElementStatus={setElementStatus}
            removeElement={removeElement}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
};

export default List;
