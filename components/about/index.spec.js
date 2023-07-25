import React from "react";
import "@testing-library/jest-dom";
import About from ".";
import { render, screen } from "@testing-library/react";

describe("<About />", () => {
  it("should render component properly", () => {
    render(<About />);

    expect(screen.getByText(/sobre o projeto/i)).toBeInTheDocument();

    expect(screen.getByAltText(/charizard/i)).toBeInTheDocument();
  });
});
