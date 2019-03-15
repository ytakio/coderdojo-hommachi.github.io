import React from "react"

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Supporter</h2>
      <p>
        <a href="https://hommachi-open-source-lab.github.io/">
          本町オープンソースラボ
        </a>
      </p>
    </section>
    <section>
      <h2>Donation</h2>
      <p>運営費や備品購入にあてさせて頂きます。</p>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/orgs/coderdojo-hommachi"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://coderdojo-hommachi.doorkeeper.jp/contact/new"
            className="icon fa-icon fa-envelope alt"
          >
            <span className="label">Envelope</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; CoderDojo Osakasayama / Hommachi. Design:{" "}
      <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
