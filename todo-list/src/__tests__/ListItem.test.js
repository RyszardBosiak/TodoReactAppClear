import React from "react";
import { render, getByTestId } from "@testing-library/react";
import ListItem from "../components/ListItem/ListItem";

it("ListItem renders without crashing", () => {
  const { getByTestId } = render(<ListItem />);
  expect(getByTestId("list-item")).toBeInTheDocument();
});
