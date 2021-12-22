import React from "react";
import { render, screen } from '@testing-library/react';
import Nav from "./Nav";
// importamos lo que se necesite para renderizar la vista 
import { BrowserRouter } from 'react-router-dom';
import { themeContext } from '../../context/themeContext';

const themeObj = {
  theme: "",
  toggleTheme: () => theme ? theme = "" : theme = "dark"
}

describe("Nav", () => {
  test("matches snapshot", () => {
    render(
      <BrowserRouter>
          <themeContext.Provider value={themeObj}>
            <Nav />
          </themeContext.Provider>
      </BrowserRouter>)
  expect(screen).toMatchSnapshot();
});
});
