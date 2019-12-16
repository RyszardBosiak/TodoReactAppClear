import React from "react";
import "./AppHeader.scss";

export default function AppHeader(props) {
  return (
    <div className="header">
      <h1 className="header-headline">{props.content}</h1>
    </div>
  );
}
