(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7xVP":function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz");t.a=function(e){var t=Object(l.useState)(!1),a=t[0],c=t[1],i=function(){c(!a)},o={open:{maxHeight:a||"/subscription"===window.location.pathname?"1000px":0,opacity:a||"/subscription"===window.location.pathname?1:0,transition:"500ms all"},color:{color:a?"#e7205b":""},subbutton:{backgroundColor:a?"#e7205b":""},morebutton:{backgroundColor:a?"#000":""}};return n.a.createElement("div",{className:"atelier__card atelier",onMouseEnter:i,onMouseLeave:i},n.a.createElement("div",{className:"atelier__card__content"},n.a.createElement("div",null,e.atelier.Date.split(" ").map((function(e,t){return n.a.createElement("p",{className:"atelier__date date date"+t},e)}))),n.a.createElement("div",{className:"atelier__card__mainContent"},n.a.createElement("p",{className:"atelier__type type"}," ",e.atelier.type),n.a.createElement("p",{className:"atelier__title title",style:o.color}," ",e.atelier.titre),n.a.createElement("p",{className:"atelier__description",style:o.open},e.atelier.description_courte))),"/subscription"!==window.location.pathname&&n.a.createElement("div",{className:"atelier__card__buttons"},n.a.createElement(r.Link,{to:"/atelier/"+e.atelier.id,style:o.morebutton}," Détails"),n.a.createElement(r.Link,{to:"/subscription",state:{atelier:e.atelier},style:o.subbutton}," S'inscrire")))}},Bl7J:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),c=function(){var e=Object(r.useStaticQuery)("3336376295").allStrapiFooter.nodes[0];return n.a.createElement("footer",null,n.a.createElement("div",{className:"footer__contact"},n.a.createElement("p",{className:"title"},"contact"),n.a.createElement("p",null,e.contact)),n.a.createElement("div",{className:"footer__acces"},n.a.createElement("p",{className:"title"},"acces"),e.acces),n.a.createElement("div",{className:"footer__social"},n.a.createElement("p",{className:"title"},"social"),e.Social.map((function(e,t){return n.a.createElement("a",{key:t,target:"_blank",href:e.lien}," ",e.nom)}))))},i=function(){var e=window.location.pathname;return n.a.createElement("nav",null,n.a.createElement(r.Link,{to:"/",style:{color:"/"===e?"#fff":"#000"}}," home "),n.a.createElement(r.Link,{to:"/atelier",style:{color:"/atelier"===e?"#fff":"#000"}}," ateliers "),n.a.createElement(r.Link,{to:"/philosophie",style:{color:"/philosophie"===e?"#fff":"#000"}}," philosophie "),n.a.createElement(r.Link,{to:"/consulting",style:{color:"/consulting"===e?"#fff":"#000"}}," consulting "),n.a.createElement(r.Link,{to:"/equipe",style:{color:"/equipe"===e?"#fff":"#000"}}," équipe "),n.a.createElement(r.Link,{to:"/contact",style:{color:"/contact"===e?"#fff":"#000"}}," contact "))},o=function(){return n.a.createElement("p",null,"logo")},u=function(e){e.siteTitle;return n.a.createElement("header",null,n.a.createElement(o,null),n.a.createElement(i,null))};u.defaultProps={siteTitle:""};var m=u,s=(a("hTrI"),function(){var e=Object(r.useStaticQuery)("696129815");return console.log(e),n.a.createElement("p",{class:"marquee"},n.a.createElement("span",null,e.allStrapiRuban.edges[0].node.texte))});t.a=function(e){var t,a=e.children,l=Object(r.useStaticQuery)("3649515864");return n.a.createElement("div",{class:"content"},n.a.createElement(s,null),n.a.createElement(m,{siteTitle:(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),n.a.createElement("main",null,a),n.a.createElement(c,null))}},Z7z5:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("Bl7J"),c=a("7xVP");t.default=function(e){return e.location.state.atelier.titre?n.a.createElement(r.a,null,n.a.createElement(c.a,{atelier:e.location.state.atelier}),n.a.createElement("form",null,"k",n.a.createElement("div",null,n.a.createElement("label",null,"Nom"),n.a.createElement("input",{type:"text"})),n.a.createElement("div",null,n.a.createElement("label",null,"Prenom"),n.a.createElement("input",{type:"text"})),n.a.createElement("div",null,n.a.createElement("label",null,"Entreprise"),n.a.createElement("input",{type:"text"})),n.a.createElement("div",null,n.a.createElement("label",null,"Adresse"),n.a.createElement("input",{type:"number"})),n.a.createElement("div",null,n.a.createElement("label",null,"NPA"),n.a.createElement("textarea",null)),n.a.createElement("div",null,n.a.createElement("label",null,"Localité"),n.a.createElement("input",{type:"number"})),n.a.createElement("div",null,n.a.createElement("label",null,"Email"),n.a.createElement("input",{type:"number"})),n.a.createElement("div",null,n.a.createElement("label",null,"Nombre de participant"),n.a.createElement("input",{type:"number"})))):(window.location.pathname="/",null)}},hTrI:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-subscription-js-7051e105786c12d7f614.js.map