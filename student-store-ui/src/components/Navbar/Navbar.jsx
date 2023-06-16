import * as React from "react"
import "./Navbar.css"
import Logo from '../Logo/Logo'


export default function Navbar() {
  return (
      <nav className="navbar">
        <a href="#intro" id="links">Home</a>
        <a href="#about" id="links">About Us</a>
        <a href="#contact" id="links">Contact Us</a>
        <a href="#buy" id="links">Buy Now</a>
      </nav>
  )
}
