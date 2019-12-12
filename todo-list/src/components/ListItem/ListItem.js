import React from "react";
import "./ListItem.scss";

const ListItem = props => {
  // props - everything what you want to pass
  return (
    <li className={"to-do-list-element " + props.status} key={props.id}>
      <span className="to-do-list-text">{props.name}</span>
      <button
        type="button"
        onClick={() => props.setElementStatus(props.id, "in-preparation")}
        className="button to-do-list-button"
      >
        In preparation
      </button>
      <button
        type="button"
        onClick={() => props.setElementStatus(props.id, "in-progress")}
        className="button to-do-list-button"
      >
        In progress
      </button>
      <button
        type="button"
        onClick={() => props.setElementStatus(props.id, "done")}
        className="button to-do-list-button"
      >
        Done
      </button>
      <button
        type="button"
        onClick={() => props.removeElement(props.id)}
        className="button to-do-list-button"
      >
        Remove
      </button>
    </li>
  );
};

export default ListItem;
