(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{151:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),c=t(0),i=t.n(c),s=t(175),r=t.n(s),o=t(160),m=t(171),u=t(186),M=t.n(u),L=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return i.a.createElement(o.a,null,i.a.createElement(r.a,{title:"Generic Page Title"}),i.a.createElement(m.a,null),i.a.createElement("div",{id:"main"},i.a.createElement("section",{id:"content",className:"main"},i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:M.a,alt:""})),i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"about"))))},a}(i.a.Component);a.default=L},155:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},156:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(4),i=t.n(c),s=t(33),r=t.n(s);t.d(a,"a",function(){return r.a});t(155),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),c=t(4),i=t.n(c),s=t(55),r=t(2),o=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=o},160:function(e,a,t){"use strict";var n=t(7),l=t.n(n),c=t(0),i=t.n(c),s=(t(147),function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("section",null,i.a.createElement("h2",null,"Supporters"),i.a.createElement("ul",{className:"supporters"},i.a.createElement("li",null,i.a.createElement("a",{href:"http://www.city.osakasayama.osaka.jp/kosodate_kyoiku/kosodate/upp_kosodatesiensedaikankouryuusenta1/index.html"},"大阪狭山市立 UPっぷ（世代間交流センター）")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://hommachi-open-source-lab.github.io/"},"本町オープンソースラボ")))),i.a.createElement("section",null,i.a.createElement("h2",null,"Donation"),i.a.createElement("p",null,"運営費や備品購入にあてさせて頂きます。"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},i.a.createElement("span",{className:"label"},"Facebook"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},i.a.createElement("span",{className:"label"},"Instagram"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/orgs/coderdojo-hommachi",className:"icon fa-github alt"},i.a.createElement("span",{className:"label"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://coderdojo-hommachi.doorkeeper.jp/contact/new",className:"icon fa-icon fa-envelope alt"},i.a.createElement("span",{className:"label"},"Envelope"))))),i.a.createElement("p",{className:"copyright"},"© CoderDojo Osakasayama / Hommachi. Design:"," ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),r=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading},i.a.createElement("div",{id:"wrapper"},e,i.a.createElement(s,null)))},a}(i.a.Component);a.a=r},171:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(156),i=t(172),s=t.n(i);a.a=function(e){return l.a.createElement("header",{id:"header"},l.a.createElement(c.a,{to:"/"},l.a.createElement("h1",null,l.a.createElement("img",{src:s.a,alt:""})," CoderDojo")),l.a.createElement("p",null,"Osakasayama / Hommachi"))}},172:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEzLjA4bW0iIGhlaWdodD0iMTMuMDhtbSIgdmlld0JveD0iMCAwIDM3LjA4IDM3LjA4Ij4KICA8dGl0bGU+bG9nb19zaWRlPC90aXRsZT4KICA8Y2lyY2xlIGN4PSIxOC41NCIgY3k9IjE4LjU0IiByPSIxOC40MyIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZmZmO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMjI2NzQ0MTg2MDQ2NDk5OTNweCIvPgogIDxjaXJjbGUgY3g9IjE4LjU0IiBjeT0iMTguNTQiIHI9IjE1LjgyIiBzdHlsZT0iZmlsbDogbm9uZTtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC41NTgxMzk1MzQ4ODM2Mzk5cHgiLz4KICA8cGF0aCBkPSJNNzAuODYsODYuNDdhMTUuODIsMTUuODIsMCwxLDAsMC0zMS42NCw3LjkxLDcuOTEsMCwwLDEsMCwxNS44Miw3LjkxLDcuOTEsMCwwLDAsMCwxNS44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4zMiAtNTIuMTEpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC4zOTk5OTk5OTk5OTk5NDA0NnB4Ii8+CiAgPHBhdGggZD0iTTcwLjg2LDU0LjgzYTE1LjgyLDE1LjgyLDAsMCwwLDAsMzEuNjQsNy45MSw3LjkxLDAsMCwxLDAtMTUuODIsNy45MSw3LjkxLDAsMCwwLDAtMTUuODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuMzIgLTUyLjExKSIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZWQ4NmIzO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMjc5MDY5NzY3NDQxODE5OTRweCIvPgogIDxwYXRoIGQ9Ik03My41Nyw2Mi43M2MwLDIuMzMtLjg5LDMuNTctMi41MSwzLjU3cy0yLjUyLTEuMjMtMi41Mi0zLjU5Ljg5LTMuNTMsMi41My0zLjUzUzczLjU3LDYwLjM1LDczLjU3LDYyLjczWm0tNC4xOCwwYzAsMS44Ni41NSwyLjgyLDEuNjcsMi44MnMxLjY3LTEsMS42Ny0yLjgyLS41NC0yLjc4LTEuNjYtMi43OFM2OS4zOSw2MC44Nyw2OS4zOSw2Mi43MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4zMiAtNTIuMTEpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC4wNzg0ODgzNzIwOTMwMTA3NHB4Ii8+CiAgPHBhdGggZD0iTTcyLjI2LDgxLjczYS4zOS4zOSwwLDAsMS0uNDQuMzkuMzcuMzcsMCwwLDEtLjQyLS4zOFY3Ni4xMmMwLS4yLS4wNS0uMjgtLjI0LS4yOGgwbC0uODYsMGgwYS40LjQsMCwwLDEtLjQtLjQxLjQxLjQxLDAsMCwxLC40LS40M2wxLjE2LDBoLjA4Yy42LDAsLjc2LjIuNzYuODZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTIuMzIgLTUyLjExKSIgc3R5bGU9ImZpbGw6ICNmZmY7c3Ryb2tlOiAjZmZmO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMDc4NDg4MzcyMDkzMDE3MTVweCIvPgo8L3N2Zz4K"},186:function(e,a,t){e.exports=t.p+"static/pic04-4719578f0779425b80be8d195c8786c2.png"}}]);
//# sourceMappingURL=component---src-pages-about-js-7a8d72ea81ab2abca861.js.map