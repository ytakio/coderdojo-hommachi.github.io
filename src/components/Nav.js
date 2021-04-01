import React from "react"
import Scrollspy from "react-scrollspy"
import Scroll from "./Scroll"

const Nav = props => (
  <nav id="nav" className={props.sticky ? "alt" : ""}>
    <Scrollspy
      items={["intro", "first", "second", "blog"]}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">Introduction</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">Support</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">さんか</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="blog">
          <a href="#">にっき</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
