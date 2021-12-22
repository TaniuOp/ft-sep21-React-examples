import React, { useState } from 'react';

import './App.css';
import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/';

import {BrowserRouter} from 'react-router-dom';
import {userContext} from './context/userContext';
import {themeContext} from './context/themeContext'; 
// ***** 


function App() {
  const [user, setUser] = useState({ name: "" }); // Estado de user ->{name:"alex"}
  const [theme, setTheme] = useState("") //Tema día / noche 

  const login = name => setUser({ name }) // Rellena estado user
  const logout = () => setUser({ name: "" }) // Limpia estado user

  const toggleTheme = () => theme === "dark"? setTheme(""):setTheme("dark")

  const value = {
    user,
    login,
    logout
  } // Claves: user,login,logout

  const themeObj = {
    theme: theme,
    toggleTheme
  }


  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <themeContext.Provider value={themeObj}>
            <Header />
            <Main />
          </themeContext.Provider>
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;


