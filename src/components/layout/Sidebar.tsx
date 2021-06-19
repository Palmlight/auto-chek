import React from "react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>AutoChek Assessment</h2>

      <NavLink to="/" className="nav-link" activeClassName="selected-link">
        Buildings
      </NavLink>
    </div>
  )
}

export default Sidebar
