import React from 'react'
import Logo from '../imagens/logo.png'
import styles from "./Navbar.modules.css"


const Navbar = () => {
  return (
    <nav className="navbar">
       <img src={Logo} className="brand"/>
    </nav>
    )
}

export default Navbar