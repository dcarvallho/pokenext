import React from "react";
import HomePageContainer from ".";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("<HomePageContainer />", () => {
  it("Should render component properly", () => {
    render(<HomePageContainer />);

    expect(screen.getByText("Home Page teste", {exact: false})).toBeInTheDocument();
  });
});
