(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"0vJV":function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",(function(){return l})),n.d(t,"toBool",(function(){return r})),n.d(t,"isNothing",(function(){return i})),n.d(t,"isSomething",(function(){return c})),n.d(t,"serialize",(function(){return o})),n.d(t,"deserialize",(function(){return u}));var a,l=((a=function(){return l}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:l}})),r=function(e){return!(!e||!e.valueOf())},i=function(e){return e===l},c=function(e){return!(e===l||null==e)},o=function(e){return JSON.stringify(e,(function(e,t){return t===l?null:t}))},u=function(e){return JSON.parse(e,(function(e,t){return null===t?l:t}))}},"7xVP":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("Wbzz");t.a=function(e){var t=Object(a.useState)(!1),n=t[0],i=t[1],c=function(){i(!n)},o={open:{maxHeight:n||"/subscription"===window.location.pathname?"1000px":0,opacity:n||"/subscription"===window.location.pathname?1:0,transition:"500ms all"},color:{color:n?"#e7205b":""},subbutton:{backgroundColor:n?"#e7205b":""},morebutton:{backgroundColor:n?"#000":""}};return l.a.createElement("div",{className:"atelier__card atelier",onMouseEnter:c,onMouseLeave:c},l.a.createElement("div",{className:"atelier__card__content"},l.a.createElement("div",null,e.atelier.Date.split(" ").map((function(e,t){return l.a.createElement("p",{className:"atelier__date date date"+t},e)}))),l.a.createElement("div",{className:"atelier__card__mainContent"},l.a.createElement("p",{className:"atelier__type type"}," ",e.atelier.type),l.a.createElement("p",{className:"atelier__title title",style:o.color}," ",e.atelier.titre),l.a.createElement("p",{className:"atelier__description",style:o.open},e.atelier.description_courte))),"/subscription"!==window.location.pathname&&l.a.createElement("div",{className:"atelier__card__buttons"},l.a.createElement(r.Link,{to:"/atelier/"+e.atelier.id,style:o.morebutton}," Détails"),l.a.createElement(r.Link,{to:"/subscription",state:{atelier:e.atelier},style:o.subbutton}," S'inscrire")))}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),i=function(){var e=Object(r.useStaticQuery)("3336376295").allStrapiFooter.nodes[0];return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer__contact"},l.a.createElement("p",{className:"title"},"contact"),l.a.createElement("p",null,e.contact)),l.a.createElement("div",{className:"footer__acces"},l.a.createElement("p",{className:"title"},"acces"),e.acces),l.a.createElement("div",{className:"footer__social"},l.a.createElement("p",{className:"title"},"social"),e.Social.map((function(e,t){return l.a.createElement("a",{key:t,target:"_blank",href:e.lien}," ",e.nom)}))))},c=n("i8R+"),o=function(){var e=c.window.location.pathname;return l.a.createElement("nav",null,l.a.createElement(r.Link,{to:"/",style:{color:"/"===e?"#fff":"#000"}}," home "),l.a.createElement(r.Link,{to:"/atelier",style:{color:"/atelier"===e?"#fff":"#000"}}," ateliers "),l.a.createElement(r.Link,{to:"/philosophie",style:{color:"/philosophie"===e?"#fff":"#000"}}," philosophie "),l.a.createElement(r.Link,{to:"/consulting",style:{color:"/consulting"===e?"#fff":"#000"}}," consulting "),l.a.createElement(r.Link,{to:"/equipe",style:{color:"/equipe"===e?"#fff":"#000"}}," équipe "),l.a.createElement(r.Link,{to:"/contact",style:{color:"/contact"===e?"#fff":"#000"}}," contact "))},u=function(){return l.a.createElement("p",null,"logo")},s=function(e){e.siteTitle;return l.a.createElement("header",null,l.a.createElement(u,null),l.a.createElement(o,null))};s.defaultProps={siteTitle:""};var m=s,p=(n("hTrI"),function(){var e=Object(r.useStaticQuery)("696129815");return console.log(e),l.a.createElement("p",{class:"marquee"},l.a.createElement("span",null,e.allStrapiRuban.edges[0].node.texte))});t.a=function(e){var t,n=e.children,a=Object(r.useStaticQuery)("3649515864");return l.a.createElement("div",{class:"content"},l.a.createElement(p,null),l.a.createElement(m,{siteTitle:(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),l.a.createElement("main",null,n),l.a.createElement(i,null))}},Z7z5:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Bl7J"),i=n("7xVP");t.default=function(e){return e.location.state.atelier.titre?l.a.createElement(r.a,null,l.a.createElement(i.a,{atelier:e.location.state.atelier}),l.a.createElement("form",null,"k",l.a.createElement("div",null,l.a.createElement("label",null,"Nom"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",null,l.a.createElement("label",null,"Prenom"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",null,l.a.createElement("label",null,"Entreprise"),l.a.createElement("input",{type:"text"})),l.a.createElement("div",null,l.a.createElement("label",null,"Adresse"),l.a.createElement("input",{type:"number"})),l.a.createElement("div",null,l.a.createElement("label",null,"NPA"),l.a.createElement("textarea",null)),l.a.createElement("div",null,l.a.createElement("label",null,"Localité"),l.a.createElement("input",{type:"number"})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"number"})),l.a.createElement("div",null,l.a.createElement("label",null,"Nombre de participant"),l.a.createElement("input",{type:"number"})))):(window.location.pathname="/",null)}},hTrI:function(e,t,n){},"i8R+":function(e,t,n){"use strict";var a=n("0vJV"),l=a.Nothing,r=a.isNothing,i="undefined"!=typeof window?window:l,c="undefined"!=typeof document?document:l;e.exports.window=i,e.exports.document=c,e.exports.exists=function(e){return!r(e)}}}]);
//# sourceMappingURL=component---src-pages-subscription-js-af81e93f49fdf370a410.js.map