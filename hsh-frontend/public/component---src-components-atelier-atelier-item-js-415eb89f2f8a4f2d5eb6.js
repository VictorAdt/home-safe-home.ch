(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0vJV":function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",(function(){return a})),n.d(t,"toBool",(function(){return i})),n.d(t,"isNothing",(function(){return l})),n.d(t,"isSomething",(function(){return c})),n.d(t,"serialize",(function(){return o})),n.d(t,"deserialize",(function(){return u}));var r,a=((r=function(){return a}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:a}})),i=function(e){return!(!e||!e.valueOf())},l=function(e){return e===a},c=function(e){return!(e===a||null==e)},o=function(e){return JSON.stringify(e,(function(e,t){return t===a?null:t}))},u=function(e){return JSON.parse(e,(function(e,t){return null===t?a:t}))}},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=function(){var e=Object(i.useStaticQuery)("3336376295").allStrapiFooter.nodes[0];return a.a.createElement("footer",null,a.a.createElement("div",{className:"footer__contact"},a.a.createElement("p",{className:"title"},"contact"),a.a.createElement("p",null,e.contact)),a.a.createElement("div",{className:"footer__acces"},a.a.createElement("p",{className:"title"},"acces"),e.acces),a.a.createElement("div",{className:"footer__social"},a.a.createElement("p",{className:"title"},"social"),e.Social.map((function(e,t){return a.a.createElement("a",{key:t,target:"_blank",href:e.lien}," ",e.nom)}))))},c=(n("i8R+"),function(){return a.a.createElement("nav",null,a.a.createElement(i.Link,{to:"/",activeStyle:{color:"#fff"}}," home "),a.a.createElement(i.Link,{to:"/atelier",activeStyle:{color:"#fff"}}," ateliers "),a.a.createElement(i.Link,{to:"/philosophie",activeStyle:{color:"#fff"}}," philosophie "),a.a.createElement(i.Link,{to:"/consulting",activeStyle:{color:"#fff"}}," consulting "),a.a.createElement(i.Link,{to:"/equipe",activeStyle:{color:"#fff"}}," équipe "),a.a.createElement(i.Link,{to:"/contact",activeStyle:{color:"#fff"}}," contact "))}),o=function(){return a.a.createElement("p",null,"logo")},u=function(e){e.siteTitle;return a.a.createElement("header",null,a.a.createElement(o,null),a.a.createElement(c,null))};u.defaultProps={siteTitle:""};var s=u,f=(n("hTrI"),function(){var e=Object(i.useStaticQuery)("696129815");return console.log(e),a.a.createElement("p",{class:"marquee"},a.a.createElement("span",null,e.allStrapiRuban.edges[0].node.texte))});t.a=function(e){var t,n=e.children,r=Object(i.useStaticQuery)("3649515864");return a.a.createElement("div",{class:"content"},a.a.createElement(f,null),a.a.createElement(s,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement("main",null,n),a.a.createElement(l,null))}},Ilgs:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("Bl7J");t.default=function(e){var t=e.data.strapiAtelier;return a.a.createElement(l.a,null,a.a.createElement("div",{className:"atelier__item"},a.a.createElement("p",null,t.titre),a.a.createElement("p",null,t.description)),a.a.createElement(i.Link,{to:"/subscription",state:{atelier:t}},"S'inscrire"))};var c="2771161016"},hTrI:function(e,t,n){},"i8R+":function(e,t,n){"use strict";var r=n("0vJV"),a=r.Nothing,i=r.isNothing,l="undefined"!=typeof window?window:a,c="undefined"!=typeof document?document:a;e.exports.window=l,e.exports.document=c,e.exports.exists=function(e){return!i(e)}}}]);
//# sourceMappingURL=component---src-components-atelier-atelier-item-js-415eb89f2f8a4f2d5eb6.js.map