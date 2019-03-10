import React from "react"
import { Link } from "gatsby"

import logo from "../assets/images/logo_side.svg"

const HeaderGeneric = props => (
  <header id="header">
    <Link to="/">
      <h1>
        <img src={logo} alt="" />
        &nbsp;CoderDojo
      </h1>
    </Link>
    <p>Osakasayama / Hommachi</p>
  </header>
)

export default HeaderGeneric
