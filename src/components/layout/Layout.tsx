import React from "react"
import Sidebar from "./Sidebar"

type layoutProp = {
  children: React.ReactNode
}

const Layout = ({ children }: layoutProp) => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
