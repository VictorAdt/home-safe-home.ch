(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2e/A":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),l=(a("vrFN"),a("7xVP"));t.default=function(e){var t=e.data,a=t.allStrapiPageAtelier.edges[0].node;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"page atelier"},r.a.createElement("h1",null,a.titre),r.a.createElement("p",null,a.description),r.a.createElement("div",{className:"atelier__cards__container"},t.atelier.edges.map((function(e,t){return r.a.createElement(l.a,{atelier:e.node})})))))};var c="1254556258"},"7xVP":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("i8R+");t.a=function(e){var t=Object(n.useState)(!1),a=t[0],c=t[1],o=function(){c(!a)},s={open:{maxHeight:a||"/subscription"===l.window.location.pathname?"1000px":0,opacity:a||"/subscription"===l.window.location.pathname?1:0,transition:"500ms all"},color:{color:a||"/subscription"===l.window.location.pathname?"#e7205b":""},button:{backgroundColor:a?"#000":""}};return r.a.createElement("div",{className:"atelier__card atelier",onMouseEnter:o,onMouseLeave:o},r.a.createElement("div",{className:"atelier__card__content"},r.a.createElement("div",null,e.atelier.Date.split(" ").map((function(e,t){return r.a.createElement("p",{className:"atelier__date date date"+t},e)}))),r.a.createElement("div",{className:"atelier__card__mainContent"},r.a.createElement("p",{className:"atelier__type type"}," ",e.atelier.type),r.a.createElement("p",{className:"atelier__title title",style:s.color}," ",e.atelier.titre),r.a.createElement("p",{className:"atelier__description",style:s.open},e.atelier.description))),"/subscription"!==l.window.location.pathname&&r.a.createElement("div",{className:"atelier__card__buttons"},r.a.createElement(i.Link,{to:"/atelier/"+e.atelier.id,style:s.button}," Détails"),r.a.createElement(i.Link,{to:"/subscription",state:{atelier:e.atelier},style:s.button}," S'inscrire")))}}}]);
//# sourceMappingURL=component---src-pages-atelier-js-7709eea1bb1cf6624d0a.js.map