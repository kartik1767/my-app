import React from 'react'
import "../styles/App.css"
import "../styles/Header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="product">Product</Link>
    </nav>
  )
}

export default Header