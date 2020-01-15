import React from "react";
import { render, getByTestId } from "@testing-library/react";
import AppHeader from "../components/AppHeader/AppHeader";

it("AppHeader renders without crashing", () => {
  const { getByTestId } = render(<AppHeader />);
  expect(getByTestId("app-header")).toBeInTheDocument();
});
