import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = props => {
  // props - everything what you want to pass

  return (
    <li className={"list-item " + props.status} key={props.id}>
      <span className="list-item-icon"></span>
      <div className="list-item-content-wrapper">
        <span className="list-item-text">{props.name}</span>
        <div className="list-item-button-wrapper">
          <button
            type="button"
            onClick={() => props.setListItemStatus(props.id, "in-preparation")}
            className="button list-item-button"
          >
            In preparation
          </button>
          <button
            type="button"
            onClick={() => props.setListItemStatus(props.id, "in-progress")}
            className="button list-item-button"
          >
            In progress
          </button>
          <button
            type="button"
            onClick={() => props.setListItemStatus(props.id, "done")}
            className="button list-item-button"
          >
            Done
          </button>
          <button
            type="button"
            onClick={() => props.removeListItem(props.id)}
            className="button list-item-button"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  status: PropTypes.string,
  removeListItem: PropTypes.func,
  setListItemStatus: PropTypes.func
};

export default ListItem;
