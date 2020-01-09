import React from "react";
import { render, fireEvent } from "@testing-library/react";
import List from "../components/List/List";

const testData = [
  { id: "a", name: "Water plants", status: "done" },
  { id: "b", name: "Buy something to eat", status: "in-progress" },
  { id: "c", name: "Book flight", status: "in-preparation" }
];

const inputTestData = Date.now().toString();

expect.extend({
  toBeTheSame(input, output) {
    const pass = input === output;

    if (pass) {
      return {
        message: () =>
          `Input test string - "${input}" - is the same as last list element "${output}". New element was added.`,
        pass: true
      };
    } else {
      return {
        message: () =>
          `Input test string - "${input}" - is not the same as last list element "${output}". New element was not added.`,
        pass: false
      };
    }
  }
});

describe("Group of tests for List component", () => {
  it("List elements render without crashing", () => {
    const { getByTestId } = render(<List defaultList={testData} />);
    const formInput = getByTestId("item-name-input");
    const formSubmitButton = getByTestId("form-submit-button");

    expect(getByTestId("list")).toBeInTheDocument();
    expect(formInput).toBeInTheDocument();
    expect(formSubmitButton).toBeInTheDocument();
  });

  it("Add new element to the list", () => {
    const { getByTestId } = render(<List defaultList={testData} />);
    const formInput = getByTestId("item-name-input");
    const formSubmitButton = getByTestId("form-submit-button");
    const list = getByTestId("list");

    fireEvent.change(formInput, { target: { value: inputTestData } });
    fireEvent.click(formSubmitButton);

    const listItemsText = list.querySelectorAll("li span");
    const lastListItemText = listItemsText[listItemsText.length - 1].innerHTML;

    expect(inputTestData).toBeTheSame(lastListItemText);
  });
});
