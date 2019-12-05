import React from "react";

const initialList = [
  { id: "a", name: "Water plants", status: "done" },
  { id: "b", name: "Buy something to eat", status: "inProgress" },
  { id: "c", name: "Book flight", status: "inPreparation" }
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
    <div className="todoList">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {list.map(item => (
          <li className={item.status} key={item.id}>
            <label>{item.name}</label>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "inPreparation")}
            >
              In preparation
            </button>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "inProgress")}
            >
              In progress
            </button>
            <button
              type="button"
              onClick={() => setElementStatus(item.id, "done")}
            >
              Done
            </button>
            <button type="button" onClick={() => handleClick(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
