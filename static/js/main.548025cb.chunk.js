(this.webpackJsonpcats=this.webpackJsonpcats||[]).push([[0],{1539:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(32),r=c.n(n),a=(c(39),c(18)),j=c(15),i=c.n(j),b=c(33),h=c(11),l=c(8),u=c(2),o=c(1),O=c(42),d=function(e){var t=e.sale,c=e.setBasket,s=e.basket;return t?Object(o.jsx)("div",{className:"catt",children:t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:e.url},t),Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("h2",{children:["Price: \xa3",e.price]}),Object(o.jsx)("button",{onClick:function(){return function(e){var t=Object(a.a)(s);t.push(e),c(t)}(e)},children:"Add to basket"})]})}))}):null},x=function(e){var t=e.basket,c=e.setBasket;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Basket"}),t&&t.map((function(e,s){return Object(o.jsxs)("div",{value:"item",children:[Object(o.jsx)("img",{src:e.url}),Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("h2",{children:e.price}),Object(o.jsx)("button",{onClick:function(){return function(e){var s=Object(a.a)(t);s.splice(e,1),c(s)}(s)},children:"Remove from Basket"})]},s)}))]})},m=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(h.a)(r,2),j=a[0],m=a[1],f=Object(s.useState)(!1),p=Object(h.a)(f,2),v=p[0],k=p[1],g=Object(s.useState)({error:!1,message:""}),B=Object(h.a)(g,2),w=B[0],N=B[1],S=function(){var e=Object(b.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,fetch("https://api.thecatapi.com/v1/images/search?limit=10");case 4:if(200===(t=e.sent).status){e.next=7;break}throw new Error("not working");case 7:return e.next=9,t.json();case 9:return c=e.sent,m(c),k(!1),e.next=14,C(c);case 14:e.sent,m(c),k(!1),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),N({error:!0,message:e.t0.message});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),C=function(e){e.map((function(e){e.name=O.name.firstName(),e.price=O.commerce.price()}))};if(Object(s.useEffect)((function(){S()}),[]),!j||v)return Object(o.jsx)("h1",{children:"loading..."});if(w.error)return Object(o.jsx)("h1",{children:w.message});function A(){return Object(o.jsx)("h1",{className:"header",children:"Home"})}function E(){return Object(o.jsx)("h1",{className:"header",children:"About"})}function y(){return Object(o.jsxs)("div",{className:"cats",children:[Object(o.jsx)("h1",{className:"header",children:"Cats For Sale"}),Object(o.jsx)(d,{setBasket:n,basket:c,sale:j})]})}function H(){return Object(o.jsx)("div",{children:Object(o.jsx)(x,{basket:c,setBasket:n})})}return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/User",children:"Cats for sale"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/checkout",children:"Basket"})})]})}),Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{path:"/about",children:Object(o.jsx)(E,{})}),Object(o.jsx)(u.a,{path:"/User",children:Object(o.jsx)(y,{})}),Object(o.jsx)(u.a,{path:"/checkout",children:Object(o.jsx)(H,{})}),Object(o.jsx)(u.a,{path:"/",children:Object(o.jsx)(A,{})})]})]})})})})};r.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))},39:function(e,t,c){}},[[1539,1,2]]]);
//# sourceMappingURL=main.548025cb.chunk.js.map