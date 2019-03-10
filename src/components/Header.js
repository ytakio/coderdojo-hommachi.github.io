import React from "react"
import { Link } from "gatsby"

import logo from "../assets/images/logo.svg"

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </span>
    <h1>CoderDojo</h1>
    <p>Osakasayama / Hommachi</p>
  </header>
)

export default Header
