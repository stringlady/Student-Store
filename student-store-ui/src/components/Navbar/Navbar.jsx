import * as React from "react"
import "./Navbar.css"
import Home from '../Home/Home'

export default function Navbar() {
  return (
      <nav className="navbar">
        <a id="links">Home</a>
        <a id="links">About Us</a>
        <a id="links">Contact Us</a>
        <a id="links">Buy Now</a>
      </nav>
  )
}
