(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0vJV":function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",(function(){return r})),n.d(t,"toBool",(function(){return i})),n.d(t,"isNothing",(function(){return l})),n.d(t,"isSomething",(function(){return o})),n.d(t,"serialize",(function(){return c})),n.d(t,"deserialize",(function(){return s}));var a,r=((a=function(){return r}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:r}})),i=function(e){return!(!e||!e.valueOf())},l=function(e){return e===r},o=function(e){return!(e===r||null==e)},c=function(e){return JSON.stringify(e,(function(e,t){return t===r?null:t}))},s=function(e){return JSON.parse(e,(function(e,t){return null===t?r:t}))}},"7xVP":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),l=n("i8R+");t.a=function(e){new Date(e.atelier.Date);return e?r.a.createElement("div",{className:"atelier__card atelier"},r.a.createElement("div",{className:"atelier__card__content"},r.a.createElement("div",null,e.atelier.Date&&e.atelier.Date.split(" ").map((function(e,t){return r.a.createElement("p",{className:"atelier__date date date"+t},e)}))),r.a.createElement("div",{className:"atelier__card__mainContent"},r.a.createElement("p",{className:"atelier__type type"}," ",e.atelier.type),r.a.createElement("p",{className:"atelier__title title"}," ",e.atelier.titre),r.a.createElement("p",{className:"atelier__description"},e.atelier.description_courte))),"/inscription"!==l.window.location.pathname&&r.a.createElement("div",{className:"atelier__card__buttons"},r.a.createElement(i.Link,{to:"/atelier/"+e.atelier.id}," Détails"),r.a.createElement(i.Link,{to:"/inscription",state:{atelier:e.atelier}}," S'inscrire"))):null}},EnID:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),l=n("7xVP"),o=n("/S4K"),c=n("kD0k"),s=n.n(c),u=n("RQdb"),m=n("vDqi"),p=n.n(m),d=n("hdq9"),f=function(e){var t=Object(a.useState)(!1),n=t[0],i=t[1],l=Object(a.useState)(""),c=l[0],m=l[1],f=Object(a.useState)({nom:"",prenom:"",entreprise:"",adresse:"",npa:"",localite:"",email:"",nb:"",telephone:""}),h=f[0],b=f[1],E=function(){var e=Object(o.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(Object.assign({},h,((n={})[t.target.name]=t.target.value,n))),""===h.nom||""===h.prenom||""===h.adresse||""===h.npa||""===h.localite||""===h.email||""===h.nb||""===h.telephone){e.next=6;break}return e.next=4,i(!0);case 4:e.next=7;break;case 6:i(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){}),[h]);var v=function(){var t=Object(o.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),a={nom:h.nom,prenom:h.prenom,entreprise:h.entreprise,adresse:h.adresse,email:h.email,telephone:h.telephone,npa:h.npa,localite:h.localite,participant:h.nb,atelier:{id:e.atelier.strapiId,titre:e.atelier.titre}},m("Envoi du message"),t.prev=4,t.next=7,p()({method:"POST",url:"http://backend.homesafehome.ch/inscriptions",data:a});case 7:if(200!==t.sent.status){t.next=12;break}return m("Message envoyé"),setTimeout((function(){window.location.pathname="/"}),500),t.abrupt("return");case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),console.log(t.t0.response.status),500===t.t0.response.status?m("Une erreur est survenue"):400===t.t0.response.status&&m("Merci d'entrer un numéro de téléphone et une adresse email valide");case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{message:c}),r.a.createElement("form",null,r.a.createElement(u.a,{handleChange:E,name:"nom",label:"Nom",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"prenom",label:"Prenom",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"entreprise",label:"Entreprise",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"adresse",label:"Adresse",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"npa",label:"NPA",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"localite",label:"Localité",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"email",label:"Email",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"nb",label:"Nombre de participant",type:"text"}),r.a.createElement(u.a,{handleChange:E,name:"telephone",label:"Telephone",type:"text"})),r.a.createElement("div",{style:{cursor:n?"pointer":"not-allowed"}},r.a.createElement("button",{style:{backgroundColor:n?"#e7205b":"#c8c8c8",pointerEvents:n?"":"none"},onClick:v},"S'inscrire")))};t.default=function(e){return Object(a.useEffect)((function(){e.location.state||(window.location.pathname="/")}),[]),r.a.createElement(i.a,null,e.location.state&&r.a.createElement("div",{className:"page sub"},r.a.createElement(l.a,{atelier:e.location.state.atelier}),r.a.createElement(f,{atelier:e.location.state.atelier})))}},"i8R+":function(e,t,n){"use strict";var a=n("0vJV"),r=a.Nothing,i=a.isNothing,l="undefined"!=typeof window?window:r,o="undefined"!=typeof document?document:r;e.exports.window=l,e.exports.document=o,e.exports.exists=function(e){return!i(e)}}}]);
//# sourceMappingURL=component---src-pages-inscription-js-a1f3da975237d7afad96.js.map