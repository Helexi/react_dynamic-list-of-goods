(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,r){},13:function(t,n,r){},15:function(t,n,r){"use strict";r.r(n);var e=r(5),a=r.n(e),c=r(2),u=r(6),o=r(0),s=r.n(o),i=r(3),p=(r(12),"https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json");function f(){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var d=function(){var t=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.slice(0,5).sort((function(t,n){return t.name.localeCompare(n.name)})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=(r(13),r(1)),h=function(t){var n=t.goods;return Object(j.jsx)("ul",{className:"goodsList",children:n.map((function(t){return Object(j.jsx)("li",{className:"goodList__item",style:{color:t.color},children:t.name},t.id)}))})},m=function(){var t=Object(i.useState)([]),n=Object(u.a)(t,2),r=n[0],e=n[1],a=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,f();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,d();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,b();case 3:return t.t1=t.sent,t.abrupt("return",(0,t.t0)(t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"allButtons",children:[Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return a()},children:"Load All goods"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return o()},children:"Load 5 first goods"}),Object(j.jsx)("button",{className:"button",type:"button",onClick:function(){return p()},children:"Load red goods"})]}),Object(j.jsx)(h,{goods:r})]})};a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f73d86d.chunk.js.map