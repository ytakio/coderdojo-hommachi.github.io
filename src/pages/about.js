import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import HeaderSide from "../components/HeaderSide"
import pic04 from "../assets/images/pic04.png"

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderSide />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>About</h2>
            <p>about</p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
