"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{130:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(689),c=e(87),o=e(184);function i(n){var t=n.movies,e=(0,r.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:e.pathname.includes("movies")?"".concat(n.id):"movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},415:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(439),o=e(757),i=e.n(o),u=e(791),a=e(130),s=e(847),f=e(214),h=e(184);function v(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],o=t[1],v=(0,u.useState)(!1),d=(0,c.Z)(v,2),p=d[0],l=d[1],m=(0,u.useState)(null),k=(0,c.Z)(m,2),w=k[0],x=k[1];return(0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,(0,s.Tg)();case 3:return t=n.sent,n.prev=4,n.next=7,t.json();case 7:e=n.sent,o(e.results),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),x(n.t0);case 14:return n.prev=14,l(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[4,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Trending today"}),p?(0,h.jsx)(f.Z,{}):(0,h.jsx)(a.Z,{movies:e}),w&&(0,h.jsxs)("h3",{children:["Oops, something went wrong: ",w.message]})]})}},847:function(n,t,e){e.d(t,{Bt:function(){return s},Tg:function(){return o},Y5:function(){return u},vw:function(){return i},y:function(){return a}});var r="453b881a671dd013b145c543ca73b9df",c="https://api.themoviedb.org/3/",o=function(){return fetch("".concat(c,"trending/movie/week?api_key=").concat(r))},i=function(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n))},u=function(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r))},a=function(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r))},s=function(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r))}},861:function(n,t,e){function r(n,t,e,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void e(s)}u.done?t(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,o){var i=n.apply(t,e);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.ea6babf9.chunk.js.map