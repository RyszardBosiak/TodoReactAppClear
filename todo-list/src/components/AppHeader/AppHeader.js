import React from "react";
import PropTypes from "prop-types";
import "./AppHeader.scss";

const AppHeader = props => {
  return (
    <div className="header">
      <h1 className="header-headline">{props.content}</h1>
    </div>
  );
};

AppHeader.propTypes = {
  content: PropTypes.string
};

export default AppHeader;
