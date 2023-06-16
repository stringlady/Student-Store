import * as React from "react"
import "./Sidebar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <Link to="/"><a href='#intro'><Logo/></a></Link>
    </section>
  )
}
