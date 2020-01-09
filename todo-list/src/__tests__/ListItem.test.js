import React from "react";
import { render, getByTestId } from "@testing-library/react";
import ListItem from "../components/ListItem/ListItem";

describe("Group of test for ListItem component", () => {
  it("ListItem renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("list-item")).toBeInTheDocument();
  });

  it("Button with status In preparation renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("button-status-in-preparation")).toBeInTheDocument();
  });

  it("Button with status In progress renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("button-status-in-progress")).toBeInTheDocument();
  });

  it("Button with status Done renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("button-status-done")).toBeInTheDocument();
  });

  it("Button with Remove functionality renders without crashing", () => {
    const { getByTestId } = render(<ListItem />);
    expect(getByTestId("button-remove")).toBeInTheDocument();
  });
});
