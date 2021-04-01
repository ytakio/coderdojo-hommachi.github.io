import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Waypoint from "react-waypoint"

import Layout from "../components/layout"
import Header from "../components/Header"
import Nav from "../components/Nav"
import ScratchCat from "../assets/images/scratch-cat.png"
import cat_flying_heart_face from "../assets/images/cat_flying_heart_face_s.svg"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet
          title={"CoderDojo Higashi-Sumiyoshi"}
          meta={[
            {
              property: "og:image",
              content:
                "https://raw.githubusercontent.com/coderdojo-higashi-sumiyoshi/coderdojo-higashi-sumiyoshi.github.io/develop/src/assets/images/og_s.png",
            },
          ]}
        />
        <Helmet title="CoderDojo Higashi-Sumiyoshi" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        />
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>CoderDojo 東住吉</h2>
                </header>
                <p>
                  コーダー道場は子どものためのリラックスした、楽しいプログラミングクラブです！2011年にアイルランドで始まり、世界では110カ国・2,000の道場、日本では全国に218以上の道場があります。
                </p>
                <ul className="actions">
                  <li>
                    <a href="https://coderdojo.com/" className="button">
                      <span className="label"> Learn More</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={ScratchCat} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>サポートしてもらえる内容</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style2 fa-gamepad" />
                <h3>
                  <a href="https://scratch.mit.edu/">Scratch</a>
                </h3>
                <p>ゲーム や アニメーション</p>
              </li>
              <li>
                <span className="icon major style1 fa-train" />
                <h3>
                  <a href="https://rubyonrails.org/">Ruby on Rails</a>
                </h3>
                <p>Web アプリケーション</p>
              </li>
              <li>
                <span className="icon major style5 fa-cogs" />
                <h3>
                  <a href="http://mruby.org/">mruby</a>
                </h3>
                <p>ブレッドボード で 電子工作</p>
              </li>
            </ul>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>コーダー道場に参加するには</h2>
              <p>
                7 歳〜17 歳までのプログラミング大好きなこども達が参加できます。
                <br />
                こども達といっしょに楽しみたいおとな達はメンターで参加できます。
              </p>
            </header>

            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    href="https://coderdojo-higashi-sumiyoshi.doorkeeper.jp/"
                    className="button special"
                  >
                    <span className="label">Event</span>
                  </a>
                </li>
              </ul>
            </footer>
          </section>

          <section id="blog" className="main special">
            <header className="major">
              <h2>コーダー道場の雰囲気はどんなの</h2>
              <p>
                公園で友達と遊ぶようにプログラミングが楽してます。
                <br />
                毎回の開催レポートをメンターが公開しています。
              </p>
            </header>

            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/blog" className="button special">
                    にっき
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>

        <span className="image main">
          <img src={cat_flying_heart_face} />
        </span>
      </Layout>
    )
  }
}

export default Index
