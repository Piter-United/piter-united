webpackJsonp([3],{100:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Redir=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(0),u=a(c),f=n(99),s=n(301),d=a(s),m=t.Redir=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),o(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.id){var t=setInterval(function(){clearInterval(t),e.setState({redirect:!0})},5e3);this.setState({int:t})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.int)}},{key:"render",value:function(){var e=this.props.id;return this.state.redirect&&!window.redirected?(window.redirected=!0,u.default.createElement(f.Redirect,{to:"/event/"+e})):null}}]),t}(u.default.Component);t.default=(0,f.withRouteData)(function(e){var t=e.event,n=e.communities;return u.default.createElement(d.default,null,t&&u.default.createElement("h1",{style:{marginTop:"20px"}},"Next event: ",u.default.createElement(f.Link,{to:"/event/"+t.id},t.name)),u.default.createElement("h2",null,"Community list"),u.default.createElement(m,{id:t.id}),u.default.createElement("div",{style:{display:"flex",flexDirection:"row"}},n.map(function(e){var t=e.id,n=e.name,a=e.site,r=e.description,l=e.logo;return u.default.createElement("div",{key:t,className:"card",style:{width:"18rem",marginRight:"5px",marginLeft:"5px",marginBottom:"5px"}},u.default.createElement("img",{className:"card-img-top",src:l.url,alt:n}),u.default.createElement("div",{className:"card-body"},u.default.createElement("h5",{className:"cart-title"},u.default.createElement("a",{href:a,target:"blank"},n)),r&&u.default.createElement("p",{className:"card-text"},r)))})))})},301:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),i=n(99),o=n(302),c=a(o),u=function(e){var t=e.to,n=e.text;return l.default.createElement(i.Link,{to:t,className:"btn btn-light",style:{marginRight:"10px"},role:"button"},n)},f=function(e){var t=e.buttons,n=e.children;return l.default.createElement("div",{className:"background"},l.default.createElement("div",{className:"malina-left"},l.default.createElement("img",{alt:"",src:c.default,style:{width:"400px"}})),l.default.createElement("div",{className:"container"},t&&t,!t&&l.default.createElement("div",{className:"back"},l.default.createElement(u,{to:"/",text:"Home"}),l.default.createElement(u,{to:"/event",text:"Events"}),l.default.createElement(u,{to:"/company",text:"Companies"}),l.default.createElement(u,{to:"/about",text:"About"}))),l.default.createElement("div",{className:"container"},n))};t.default=f},302:function(e,t,n){e.exports=n.p+"static/img.e1954899.png"}});