import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import ListItem from "../ListItem/ListItem";
import "./List.scss";

const inputId = _.uniqueId("form-input-");

// function component
const List = props => {
  const [value, setValue] = React.useState(""); // Hook
  const [list, setList] = React.useState(props.defaultList); // Hook

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
  const removeListItem = id => {
    setList(list.filter(item => item.id !== id));
  };

  // adding status to current element of the list
  const setListItemStatus = (id, status) => {
    setList(
      list.map(item => (item.id === id ? { ...item, status: status } : item))
    );
  };

  return (
    <div className="to-do-list-wrapper" data-testid="list">
      <form className="to-do-form" onSubmit={handleSubmit}>
        <label htmlFor={inputId} className="to-do-form-label">
          Type item name:
        </label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="to-do-form-input"
          id={inputId}
          data-testid="item-name-input"
        />
        <button
          type="submit"
          className="button to-do-form-button"
          data-testid="form-submit-button"
        >
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
            setListItemStatus={setListItemStatus}
            removeListItem={removeListItem}
          ></ListItem>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  defaultList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
      status: PropTypes.string
    })
  )
};

export default List;
