import React from "react"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import HeaderSide from "../components/HeaderSide"
import face_image from "../assets/images/cat_flying_heart_face.svg"

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderSide />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={face_image} alt="" />
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
