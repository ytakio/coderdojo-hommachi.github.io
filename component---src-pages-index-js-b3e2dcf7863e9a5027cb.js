(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{153:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),c=t(0),s=t.n(c),r=t(155),o=t(174),i=t.n(o),m=t(225),u=t(159),E=t(183),d=t(229),p=t.n(d),N=t(34),h=t.n(N),g=t(288),M=t.n(g),f=t(4),j=t.n(f),D=function(e){return e.children},L=function(e){function a(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(h()(a)),a}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){M.a.polyfill()},t.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,l=n.type,c=n.element,s=n.offset,r=n.timeout;if(l&&c)switch(l){case"class":t=!!(a=document.getElementsByClassName(c)[0]);break;case"id":t=!!(a=document.getElementById(c))}t?this.scrollTo(a,s,r):console.log("Element not found: "+c)},t.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},t.render=function(){return s.a.createElement(D,null,"object"==typeof this.props.children?s.a.cloneElement(this.props.children,{onClick:this.handleClick}):s.a.createElement("span",{onClick:this.handleClick},this.props.children))},a}(s.a.Component);L.propTypes={type:j.a.string,element:j.a.string,offset:j.a.number,timeout:j.a.number,children:j.a.node.isRequired};var b=L,y=function(e){return s.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},s.a.createElement(p.a,{items:["intro","first","second","blog"],currentClassName:"is-active",offset:-300},s.a.createElement("li",null,s.a.createElement(b,{type:"id",element:"intro"},s.a.createElement("a",{href:"#"},"Introduction"))),s.a.createElement("li",null,s.a.createElement(b,{type:"id",element:"first"},s.a.createElement("a",{href:"#"},"Support"))),s.a.createElement("li",null,s.a.createElement(b,{type:"id",element:"second"},s.a.createElement("a",{href:"#"},"Event"))),s.a.createElement("li",null,s.a.createElement(b,{type:"id",element:"blog"},s.a.createElement("a",{href:"#"},"Blog")))))},I=t(289),w=t.n(I),C=t(290),T=t.n(C),z=function(e){function a(a){var t;return(t=e.call(this,a)||this)._handleWaypointEnter=function(){t.setState(function(){return{stickyNav:!1}})},t._handleWaypointLeave=function(){t.setState(function(){return{stickyNav:!0}})},t.state={stickyNav:!1},t}return l()(a,e),a.prototype.render=function(){return s.a.createElement(u.a,null,s.a.createElement(i.a,{title:"CoderDojo Osakasayama / Honmachi",meta:[{property:"og:image",content:"https://raw.githubusercontent.com/coderdojo-hommachi/coderdojo-hommachi.github.io/develop/src/assets/images/og.png"}]}),s.a.createElement(i.a,{title:"CoderDojo Osakasayama / Honmachi"}),s.a.createElement(E.a,null),s.a.createElement(m.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),s.a.createElement(y,{sticky:this.state.stickyNav}),s.a.createElement("div",{id:"main"},s.a.createElement("section",{id:"intro",className:"main"},s.a.createElement("div",{className:"spotlight"},s.a.createElement("div",{className:"content"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"CoderDojo 大阪狭山・本町")),s.a.createElement("p",null,"コーダー道場は子どものためのリラックスした、楽しいプログラミングクラブです！2011年にアイルランドで始まり、世界では110カ国・1,900の道場、日本では全国に176以上の道場があります。"),s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://coderdojo.com/",className:"button"},s.a.createElement("span",{className:"label"}," Learn More"))))),s.a.createElement("span",{className:"image"},s.a.createElement("img",{src:w.a,alt:""})))),s.a.createElement("section",{id:"first",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"サポートしてもらえる内容")),s.a.createElement("ul",{className:"features"},s.a.createElement("li",null,s.a.createElement("span",{className:"icon major style2 fa-gamepad"}),s.a.createElement("h3",null,"Scratch"),s.a.createElement("p",null,"ゲーム や アニメーション")),s.a.createElement("li",null,s.a.createElement("span",{className:"icon major style1 fa-train"}),s.a.createElement("h3",null,"Ruby on Rails"),s.a.createElement("p",null,"Web アプリケーション")),s.a.createElement("li",null,s.a.createElement("span",{className:"icon major style5 fa-cogs"}),s.a.createElement("h3",null,"mruby"),s.a.createElement("p",null,"ブレッドボード で 電子工作")))),s.a.createElement("section",{id:"second",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"コーダー道場に参加するには"),s.a.createElement("p",null,"7 歳〜17 歳までのプログラミング大好きなこども達が参加できます。",s.a.createElement("br",null),"こども達といっしょに楽しみたいおとな達はメンターで参加できます。")),s.a.createElement("footer",{className:"major"},s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://coderdojo-hommachi.doorkeeper.jp/",className:"button special"},s.a.createElement("span",{className:"label"},"Event")))))),s.a.createElement("section",{id:"blog",className:"main special"},s.a.createElement("header",{className:"major"},s.a.createElement("h2",null,"コーダー道場の雰囲気はどんなの"),s.a.createElement("p",null,"公園で友達と遊ぶようにプログラミングが楽してます。",s.a.createElement("br",null),"毎回の開催レポートをメンターが公開しています。")),s.a.createElement("footer",{className:"major"},s.a.createElement("ul",{className:"actions"},s.a.createElement("li",null,s.a.createElement(r.a,{to:"/blog",className:"button special"},"Blog")))))),s.a.createElement("span",{className:"image main"},s.a.createElement("img",{src:T.a})))},a}(s.a.Component);a.default=z},154:function(e,a,t){var n;e.exports=(n=t(158))&&n.default||n},155:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(4),s=t.n(c),r=t(32),o=t.n(r);t.d(a,"a",function(){return o.a});t(154),l.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},158:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),l=t.n(n),c=t(4),s=t.n(c),r=t(54),o=t(2),i=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(r.a,Object.assign({location:a,pageResources:t},t.json))};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=i},159:function(e,a,t){"use strict";var n=t(7),l=t.n(n),c=t(0),s=t.n(c),r=(t(146),function(e){return s.a.createElement("footer",{id:"footer"},s.a.createElement("section",null,s.a.createElement("h2",null,"Supporter"),s.a.createElement("p",null,"本町オープンソスラボ")),s.a.createElement("section",null,s.a.createElement("h2",null,"Donation"),s.a.createElement("p",null,"運営費や備品購入にあてさせて頂きます。"),s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/orgs/coderdojo-hommachi",className:"icon fa-github alt"},s.a.createElement("span",{className:"label"},"GitHub"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://coderdojo-hommachi.doorkeeper.jp/contact/new",className:"icon fa-icon fa-envelope alt"},s.a.createElement("span",{className:"label"},"Envelope"))))),s.a.createElement("p",{className:"copyright"},"© CoderDojo Osakasayama / Hommachi. Design:"," ",s.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),o=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},t.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"body "+this.state.loading},s.a.createElement("div",{id:"wrapper"},e,s.a.createElement(r,null)))},a}(s.a.Component);a.a=o},183:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(155),s=t(184),r=t.n(s);a.a=function(e){return l.a.createElement("header",{id:"header",className:"alt"},l.a.createElement("span",{className:"logo"},l.a.createElement(c.a,{to:"/"},l.a.createElement("img",{src:r.a,alt:""}))),l.a.createElement("h1",null,"CoderDojo"),l.a.createElement("p",null,"Osakasayama / Honmachi"))}},184:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyBpZD0i44Os44Kk44Ok44O8XzEiIGRhdGEtbmFtZT0i44Os44Kk44Ok44O8IDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwLjE4bW0iIGhlaWdodD0iMzAuMThtbSIgdmlld0JveD0iMCAwIDg1LjU2IDg1LjU2Ij4KICA8dGl0bGU+bG9nbzwvdGl0bGU+CiAgPGNpcmNsZSBjeD0iNDIuNzgiIGN5PSI0Mi43OCIgcj0iNDIuNTIiIHN0eWxlPSJmaWxsOiAjZmZmO3N0cm9rZTogI2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDogMTA7c3Ryb2tlLXdpZHRoOiAwLjUyMzI1NTgxMzk1MzQ5MDJweCIvPgogIDxjaXJjbGUgY3g9IjQyLjc4IiBjeT0iNDIuNzgiIHI9IjM5LjU1IiBzdHlsZT0iZmlsbDogbm9uZTtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMS4zOTUzNDg4MzcyMDkzMDcycHgiLz4KICA8cGF0aCBkPSJNNzAuODYsMTEwLjJhMzkuNTUsMzkuNTUsMCwwLDAsMC03OS4xLDE5Ljc4LDE5Ljc4LDAsMCwxLDAsMzkuNTUsMTkuNzgsMTkuNzgsMCwxLDAsMCwzOS41NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOC4wOCAtMjcuODcpIiBzdHlsZT0iZmlsbDogI2VkODZiMztzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwIi8+CiAgPHBhdGggZD0iTTcwLjg2LDMxLjFhMzkuNTUsMzkuNTUsMCwxLDAsMCw3OS4xLDE5Ljc4LDE5Ljc4LDAsMSwxLDAtMzkuNTUsMTkuNzgsMTkuNzgsMCwwLDAsMC0zOS41NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOC4wOCAtMjcuODcpIiBzdHlsZT0iZmlsbDogI2ZmZjtzdHJva2U6ICNlZDg2YjM7c3Ryb2tlLW1pdGVybGltaXQ6IDEwO3N0cm9rZS13aWR0aDogMC42OTc2NzQ0MTg2MDQ2NTM2cHgiLz4KICA8cGF0aCBkPSJNNzcuNjUsNTAuODVjMCw1Ljg0LTIuMjMsOC45Mi02LjI4LDguOTJzLTYuMy0zLjA2LTYuMy05UzY3LjI5LDQyLDcxLjM5LDQyLDc3LjY1LDQ0LjksNzcuNjUsNTAuODVabS0xMC40NywwYzAsNC42NSwxLjM5LDcuMDUsNC4xOSw3LjA1czQuMTYtMi40LDQuMTYtNy4wNS0xLjM0LTctNC4xNC03UzY3LjE4LDQ2LjIsNjcuMTgsNTAuODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjguMDggLTI3Ljg3KSIgc3R5bGU9ImZpbGw6ICNlZDg2YjM7c3Ryb2tlOiAjZWQ4NmIzO3N0cm9rZS1taXRlcmxpbWl0OiAxMDtzdHJva2Utd2lkdGg6IDAuMTk2MjIwOTMwMjMyNTU2MDVweCIvPgogIDxwYXRoIGQ9Ik03NC4zNiw5OC4zNWExLDEsMCwwLDEtMS4wOSwxLC45My45MywwLDAsMS0xLjA2LTFWODQuMzFjMC0uNDktLjExLS42Ny0uNTktLjY3aC0uMDlsLTIuMTMuMDZoLS4wNWExLDEsMCwwLDEtMS0xLDEsMSwwLDAsMSwxLTEuMDlsMi45LS4wNmguMjFjMS40OSwwLDEuOS41LDEuOSwyLjE1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4LjA4IC0yNy44NykiIHN0eWxlPSJmaWxsOiAjZmZmO3N0cm9rZTogI2ZmZjtzdHJva2UtbWl0ZXJsaW1pdDogMTA7c3Ryb2tlLXdpZHRoOiAwLjE5NjIyMDkzMDIzMjU3MjFweCIvPgo8L3N2Zz4K"},289:function(e,a,t){e.exports=t.p+"static/pic01-6c7bb890f8ce28bfa85a7f26adc49154.png"},290:function(e,a,t){e.exports=t.p+"static/cat_flying_heart_face-85fe4ab92ae0367f4b09fbf7c4ea476c.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-b3e2dcf7863e9a5027cb.js.map