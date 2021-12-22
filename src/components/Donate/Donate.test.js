import React from "react";
import { render, screen } from '@testing-library/react';
import Donate from "./Donate";

describe("Donate", () => {
  test("matches snapshot and validate text", () => {
    render (<Donate/>)
    const linkElement = screen.getByText(/Dóname una cerveza/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen).toMatchSnapshot(); 

  });
});
