(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0vJV":function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",(function(){return r})),n.d(t,"toBool",(function(){return l})),n.d(t,"isNothing",(function(){return i})),n.d(t,"isSomething",(function(){return o})),n.d(t,"serialize",(function(){return c})),n.d(t,"deserialize",(function(){return u}));var a,r=((a=function(){return r}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:r}})),l=function(e){return!(!e||!e.valueOf())},i=function(e){return e===r},o=function(e){return!(e===r||null==e)},c=function(e){return JSON.stringify(e,(function(e,t){return t===r?null:t}))},u=function(e){return JSON.parse(e,(function(e,t){return null===t?r:t}))}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),i=function(){var e=Object(l.useStaticQuery)("3336376295").allStrapiFooter.nodes[0];return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer__contact"},r.a.createElement("p",{className:"title"},"contact"),r.a.createElement("p",null,e.contact)),r.a.createElement("div",{className:"footer__acces"},r.a.createElement("p",{className:"title"},"acces"),e.acces),r.a.createElement("div",{className:"footer__social"},r.a.createElement("p",{className:"title"},"social"),e.Social.map((function(e,t){return r.a.createElement("a",{key:t,target:"_blank",href:e.lien}," ",e.nom)}))))},o=(n("i8R+"),function(){return r.a.createElement("nav",null,r.a.createElement(l.Link,{to:"/",activeStyle:{color:"#fff"}}," home "),r.a.createElement(l.Link,{to:"/atelier",activeStyle:{color:"#fff"}}," ateliers "),r.a.createElement(l.Link,{to:"/philosophie",activeStyle:{color:"#fff"}}," philosophie "),r.a.createElement(l.Link,{to:"/consulting",activeStyle:{color:"#fff"}}," consulting "),r.a.createElement(l.Link,{to:"/equipe",activeStyle:{color:"#fff"}}," équipe "),r.a.createElement(l.Link,{to:"/contact",activeStyle:{color:"#fff"}}," contact "))}),c=function(){return r.a.createElement("p",null,"logo")},u=function(e){e.siteTitle;return r.a.createElement("header",null,r.a.createElement(c,null),r.a.createElement(o,null))};u.defaultProps={siteTitle:""};var s=u,f=(n("hTrI"),function(){var e=Object(l.useStaticQuery)("696129815");return console.log(e),r.a.createElement("p",{class:"marquee"},r.a.createElement("span",null,e.allStrapiRuban.edges[0].node.texte))});t.a=function(e){var t,n=e.children,a=Object(l.useStaticQuery)("3649515864");return r.a.createElement("div",{class:"content"},r.a.createElement(f,null),r.a.createElement(s,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.a.createElement("main",null,n),r.a.createElement(i,null))}},hTrI:function(e,t,n){},"i8R+":function(e,t,n){"use strict";var a=n("0vJV"),r=a.Nothing,l=a.isNothing,i="undefined"!=typeof window?window:r,o="undefined"!=typeof document?document:r;e.exports.window=i,e.exports.document=o,e.exports.exists=function(e){return!l(e)}},o9dS:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return i}));var a=n("q1tI"),r=n.n(a),l=n("Bl7J");t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement("h1",null,t.allStrapiPagePhilosophie.nodes[0].titre),r.a.createElement("p",null,t.allStrapiPagePhilosophie.nodes[0].description))};var i="4082140801"}}]);
//# sourceMappingURL=component---src-pages-philosophie-js-9b87ec535238e7446479.js.map