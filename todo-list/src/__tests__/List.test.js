import React from "react";
import { render, getByTestId } from "@testing-library/react";
import List from "../components/List/List";

const testData = [
  { id: "a", name: "Water plants", status: "done" },
  { id: "b", name: "Buy something to eat", status: "in-progress" },
  { id: "c", name: "Book flight", status: "in-preparation" }
];

it("List renders without crashing", () => {
  const { getByTestId } = render(<List defaultList={testData} />);
  expect(getByTestId("list")).toBeInTheDocument();
});
