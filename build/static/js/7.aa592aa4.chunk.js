(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[7],{209:function(t,e,c){},223:function(t,e,c){"use strict";c.r(e);var n=c(35),i=c(30),a=c(5),r=c(1),s=c(6),o=c(31),l=c(10),j=c(24),b=(c(209),c(0)),u=function(){var t=Object(r.useState)([]),e=Object(a.a)(t,2),c=e[0],n=e[1],u=Object(r.useState)(!1),m=Object(a.a)(u,2),O=m[0],d=m[1],f=Object(r.useState)(0),h=Object(a.a)(f,2),x=h[0],v=h[1],_=Object(r.useState)(!1),p=Object(a.a)(_,2),y=p[0],g=p[1],N=Object(o.a)(),S=N.loading,w=N.error,k=N.getAllComics;Object(r.useEffect)((function(){A(x,!0)}),[]);var A=function(t,e){d(!e),k(t).then(C)},C=function(t){var e=!1;t.length<8&&(e=!0),n([].concat(Object(i.a)(c),Object(i.a)(t))),d(!1),v(x+8),g(e)};var E=function(t){var e=t.map((function(t,e){return Object(b.jsx)("li",{className:"comics__item",children:Object(b.jsxs)(s.b,{to:"/comics/".concat(t.id),children:[Object(b.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(b.jsx)("div",{className:"comics__item-name",children:t.title}),Object(b.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(b.jsx)("ul",{className:"comics__grid",children:e})}(c),I=w?Object(b.jsx)(j.a,{}):null,J=S&&!O?Object(b.jsx)(l.a,{}):null;return Object(b.jsxs)("div",{className:"comics__list",children:[I,J,E,Object(b.jsx)("button",{disabled:O,style:{display:y?"none":"block"},className:"button button__main button__long",onClick:function(){return A(x)},children:Object(b.jsx)("div",{className:"inner",children:"load more"})})]})},m=c(90);e.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(n.a,{children:[Object(b.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(b.jsx)("title",{children:"Comics page"})]}),Object(b.jsx)(m.a,{}),Object(b.jsx)(u,{})]})}},30:function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));var n=c(9);var i=c(7);function a(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(i.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=7.aa592aa4.chunk.js.map