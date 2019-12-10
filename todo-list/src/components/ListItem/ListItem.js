import React from "react";
import "./ListItem.scss";

const ListItem = item => {
  return (
    <li className={item.status}>
      <label>{item.name}</label>
    </li>
  );
};

export default ListItem;
