import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListItem from "../components/ListItem/ListItem";
import List from "../components/List/List";

const testData = [{ id: "a", name: "Water plants", status: "done" }];
const statusButtons = [
  "button-status-in-preparation",
  "button-status-in-progress",
  "button-status-done"
];
const listElementStatuses = ["in-preparation", "in-progress", "done"];

describe("Group of test for ListItem component", () => {
  it("ListItem renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("list-item")).toBeInTheDocument();
  });

  statusButtons.forEach(button => {
    it(`Button with status ${button} renders without crashing`, () => {
      const { getByTestId } = render(<ListItem />);
      expect(getByTestId(button)).toBeInTheDocument();
    });
  });

  it("Button with Remove functionality renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("button-remove")).toBeInTheDocument();
  });

  statusButtons.forEach((button, index) => {
    it(`Change list element status to ${listElementStatuses[index]}`, () => {
      const { getByTestId } = render(<List defaultList={testData} />);
      const listItem = getByTestId("list-item");
      let statusButton = getByTestId(button);

      fireEvent.click(statusButton);

      let listitemClassesUpdated = listItem.classList.value.split(" ");

      expect(listitemClassesUpdated).toContain(listElementStatuses[index]);
    });
  });

  it("Remove list element", () => {
    const { getByTestId } = render(<List defaultList={testData} />);
    const listItem = getByTestId("list-item");
    const deleteButton = getByTestId("button-remove");

    expect(listItem).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(listItem).not.toBeInTheDocument();
  });
});
