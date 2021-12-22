import React, { Component } from 'react'
import Nav from '../Nav'
import './Header.css'
import logo from "../../assets/linux.png";

// Importamos Context
// useContext de componente funcional Hooks
import { themeContext } from '../../context/themeContext';
// userContext de componente de clase
import { userContext } from '../../context/userContext';


class Header extends Component {
    render() {
        return (
            /* Consumo el objetdo que ha mandado themContext que ha sido provided por App.js*/
            <themeContext.Consumer>
                {
                    ({ theme, toggleTheme }) =>
                        <header className={"header "+theme}>
                            <img src={logo} alt="linux" />
                            <div className="header-title">
                                <h1>Mi app super guay</h1>
                                <Nav />
                            </div>
                            <userContext.Consumer>
                                {
                                    ({ user, logout }) => user.name ?
                                        <>
                                            <h3>Hola {user.name}</h3>
                                            <button onClick={logout}>Logout</button>
                                        </> 
                                        : "" 
                                }
                            </userContext.Consumer>
                            <button onClick={toggleTheme}>Cambia</button>
                        </header>
                }
            </themeContext.Consumer>
        )
    }
}
export default Header