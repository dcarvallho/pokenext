import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MainContainer from ".";

describe("<MainContainer />", () => {
  it("should render component properly", () => {
    render(<MainContainer />);

    expect(screen.get)
  });
  it('should redirect the routes properly trough the links', ()=>{
    render(<MainContainer />)

    expect(screen.getByRole("link", { name: /page/i })).toHaveAttribute("href","/page");

    expect(screen.getByRole("link", {name: /home/i})).toHaveAttribute("href", "/")
  })
});
