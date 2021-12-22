import React from "react";
import { render, screen } from '@testing-library/react';
import Review from "./Review";

describe("Review", () => {
  test("matches snapshot", () => {
    render (<Review/>)
    expect(screen).toMatchSnapshot(); 
  });
});
