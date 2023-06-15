import * as React from "react"
import "./Sidebar.css"
import Logo from "../Logo/Logo"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <a href='#intro'><Logo/></a>
    </section>
  )
}
