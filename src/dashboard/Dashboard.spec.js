// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("shows the controls and display", () => {
    render(<Dashboard />);
  });
});
